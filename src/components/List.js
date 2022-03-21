import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, productSelectors, setPurchase }
    from "../redux/productsSlice";
import { Row, Col, Card, ButtonToolbar, Button, ButtonGroup, InputGroup, FormControl } from 'react-bootstrap'

// import Loading from './Loading';
// import Error from './Error';


function List() {
    // Quantity
    const [purchasedQuantityState, setPurchasedQuantityState] = useState();
    // Money
    const [purchaseOrderValueState, setPurchaseOrderValueState] = useState(0)

    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);
    const initialBudget = useSelector((state) => state.products.initialBudget);
    // const error = useSelector((state) => state.products.error);

    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') dispatch(fetchProducts());
    }, [dispatch, status])

    // Initial Purchase Quantity Equals {id:0, purchased:Zero}
    useEffect(() => {
        if (products) {
            const purchaseData = products.map((product) => ({
                id: product.id,
                max_stock: Number(product.id) * Math.floor(Math.random() * 5),
                purchased: 0,
                purchasedValue: 0
            }));
            purchaseData.forEach(order => {
                dispatch(setPurchase(order));
            });
        }
    }, [products, dispatch])

    // Set New Purchase Quantity & Payment
    useEffect(() => {
        if (products[1] && purchasedQuantityState) {



            if (purchasedQuantityState.id != 0) {
                let sameTypeProductOrderUnitPrice = products.find((product) => {
                    return product.id == purchasedQuantityState.id
                }).price

                console.log("purchasedQuantityState", purchasedQuantityState)
                console.log("sameTypeProductOrderPrice", sameTypeProductOrderUnitPrice)
                console.log("newCurrentBudget1", initialBudget - purchasedQuantityState.purchased * sameTypeProductOrderUnitPrice)


                let addPurchaseOrderValueIntoEntity = {
                    ...purchasedQuantityState,
                    purchasedValue: purchasedQuantityState.purchased * sameTypeProductOrderUnitPrice
                };
                dispatch(setPurchase(addPurchaseOrderValueIntoEntity));

                setPurchaseOrderValueState(purchasedQuantityState.purchased * sameTypeProductOrderUnitPrice)

            }

        }

        // if (sameTypeProductOrderPrice < initialBudget) {
        //     setPurchaseOrderValueState(sameTypeProductOrderPrice)
        //     dispatch(setCurrentBudget(initialBudget - sameTypeProductOrderPrice));

        //     console.log("sameTypeProductOrderPrice", sameTypeProductOrderTotalPrice)
        //     console.log("purchaseOrderValueState", productsPurchaseInfo)
        //     console.log("initialBudget", initialBudget)
        // }
    }, [purchasedQuantityState, products, dispatch])

    // Entity of Products
    const productsPurchaseInfo = useSelector(productSelectors.selectAll)

    console.log("products", products)
    console.log("productsPurchaseInfo", productsPurchaseInfo)

    const purchaseInput = (e) => {
        setPurchasedQuantityState({
            id: Number(e.target.name),
            max_stock: Number(purchaseMaxStorage(e.target.name)),
            purchased: Number(e.target.value),
        })
    }

    const purchaseIncreaseByOne = (e) => {
        e.preventDefault()

        setPurchasedQuantityState({
            id: Number(e.target.name),
            max_stock: Number(purchaseMaxStorage(e.target.name)),
            purchased: Number(purchaseOrderQuantity(e.target.name)) + 1,
        })
    }

    const purchaseDecraseByOne = (e) => {
        e.preventDefault()
        if (Number(purchaseOrderQuantity(e.target.name)) - 1 >= 0) {
            setPurchasedQuantityState({
                id: Number(e.target.name),
                max_stock: Number(purchaseMaxStorage(e.target.name)),
                purchased: Number(purchaseOrderQuantity(e.target.name)) - 1,
            })
        }
    }

    function purchaseOrderQuantity(productId) {
        let findPurchaseValue = products[1] && productsPurchaseInfo[1] ? productsPurchaseInfo.find((element) => element.id == productId) : 0
        return findPurchaseValue.purchased
    }

    function purchaseMaxStorage(productId) {
        let findPurchaseMaxStorage = products[1] && productsPurchaseInfo[1] ? productsPurchaseInfo.find((element) => element.id == productId) : 0
        return findPurchaseMaxStorage.max_stock
    }

    // if (status === 'failed') {
    //     return <Error message={error} />
    // }

    return (
        <Row className="pt-0">
            {products.map((product) => (
                <Col key={product.id} md={{ span: 4, offset: 0 }} className='pt-0 mb-4'>
                    <Card className='listCard pt-3 d-flex align-items-center h-100 '>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body className='d-flex flex-column align-items-center w-100 px-2'>
                            <Card.Title as="h5" className="listCardTitle">{product.title}</Card.Title>
                            <Card.Subtitle className="mb-2 price">${product.price}</Card.Subtitle>

                            <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                                <ButtonGroup className="" aria-label="First group">
                                    <Button name={`${product.id}`} size="sm" variant="secondary"
                                        // className={`container top-3 ${isActive ? "shadow": ""}`}
                                        className={`fw-bolder fs-6  ${purchaseOrderQuantity(product.id) == 0 ? "defaultColorSellButton" : "activeColorSellButton"}`}
                                        onMouseDown={purchaseDecraseByOne}>Sell</Button>

                                    <InputGroup size="sm" className=" CardPurchaseQuantity w-50">
                                        <FormControl name={`${product.id}`}
                                            value={purchaseOrderQuantity(product.id) || 0}
                                            onChange={purchaseInput}
                                            type="number"
                                            placeholder="1"
                                            aria-label="1"
                                            aria-describedby="btnGroupAddon"
                                        />
                                    </InputGroup>

                                    <Button name={`${product.id}`} size="sm" variant="secondary" className={`fw-bolder fs-6  ${purchaseMaxStorage(product.id) > purchaseOrderQuantity(product.id) ? "defaultColorBuyButton" : "StockColorBuyButton"} `}
                                        onMouseDown={purchaseIncreaseByOne}>Buy</Button>
                                </ButtonGroup>
                            </ButtonToolbar>

                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default List