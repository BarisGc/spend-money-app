import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, productSelectors, setPurchase }
    from "../redux/productsSlice";
import { Row, Col, Card, ButtonToolbar, Button, ButtonGroup, InputGroup, FormControl } from 'react-bootstrap'

// import Loading from './Loading';
// import Error from './Error';


function List() {
    const [purchasedQuantityState, setPurchasedQuantityState] = useState({ id: 0, purchased: 0 });

    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);
    // const error = useSelector((state) => state.products.error);

    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') dispatch(fetchProducts());
    }, [dispatch, status])

    // Initial Purchase Quantity Equals Zero
    useEffect(() => {
        if (products) {
            const purchaseData = products.map((element) => ({
                id: element.id,
                purchased: 0
            }));
            purchaseData.forEach(element => {
                dispatch(setPurchase(element));
            });
        }
    }, [products])

    // Set New Purchase Quantity
    useEffect(() => {
        dispatch(setPurchase(purchasedQuantityState));
    }, [purchasedQuantityState])


    const productsPurchaseInfo = useSelector(productSelectors.selectAll)

    console.log("products", products)
    console.log("productsPurchaseInfo", productsPurchaseInfo)
    console.log("productsPurchaseInfo22222", productsPurchaseInfo[3])

    const purchaseInput = (e) => {
        console.log("event", e.target.name, e.target.value)
        // setPurchasedQuantityState({ "e.target.name": e.target.value })
    }

    const purchaseIncreaseByOne = (e) => {
        setPurchasedQuantityState({ "e.target.name": e.target.value + 1 })
    }

    const purchaseDecraseByOne = (e) => {
        setPurchasedQuantityState({ "e.target.name": e.target.value - 1 })
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
                                    <Button name={`${product.id}`} size="sm" variant="secondary" className='activeColorSellButton fw-bolder fs-6' onClick={purchaseDecraseByOne}>Sell</Button>

                                    <InputGroup size="sm" className=" CardPurchaseQuantity w-50">
                                        <FormControl name={`${product.id}`}
                                            value={productsPurchaseInfo}
                                            onChange={purchaseInput}
                                            type="number"
                                            placeholder="1"
                                            aria-label="1"
                                            aria-describedby="btnGroupAddon"
                                        />
                                    </InputGroup>

                                    <Button name={`${product.id}`} size="sm" variant="secondary" className='defaultColorBuyButton fw-bolder fs-6' onClick={purchaseIncreaseByOne}>Buy</Button>
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