import React from 'react'
import numeral from 'numeral';
import { Row, Col, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { productSelectors }
    from "../redux/productsSlice";

function Receipt() {


    const products = useSelector((state) => state.products.items);
    const productsPurchaseInfo = useSelector(productSelectors.selectAll)

    const productAndPurchaseInfoMergedObjects = products.map(item1 => {
        return ({
            ...item1,
            ...productsPurchaseInfo.find(item2 => {
                return item1.id == item2.id
            })
        })
    })


    console.log("productAndPurchaseInfoMergedObjects", productAndPurchaseInfoMergedObjects)

    let spendedBudget = productsPurchaseInfo.reduce(
        (previousValue, currentValue) => {
            return (previousValue + currentValue.purchasedValue)
        }, 0)

    const spendedBudgetFormatted = numeral(spendedBudget).format('0,0.00');

    return (
        productAndPurchaseInfoMergedObjects.some((element) => element.purchased > 0) && <Row className='mb-5'>
            <Col md={{ span: 8, offset: 2 }} className='' >
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title as="h3" className='fw-bolder fs-3 mb-3'>Your Receipt</Card.Title>
                        {productAndPurchaseInfoMergedObjects.map((element) =>
                            element.purchased > 0 &&
                            (<Row key={element.id} className='  pb-2 '>
                                <Col xs={{ span: 6, offset: 0 }} className='text-start' > {`- ${element.title}`} </Col>
                                <Col xs={{ span: 3, offset: 0 }} className='text-center'>{`x${element.purchased}`}</Col>
                                <Col xs={{ span: 3, offset: 0 }} className='text-end price fw-bold'>{`$${element.purchasedValue.toFixed(2)}`}</Col>
                            </Row>)
                        )}
                        {spendedBudgetFormatted &&
                            <Row className='pt-2 border-1 border-top border-dark'>
                                <Col className='text-start fw-bold'>TOTAL :</Col>
                                <Col className='text-end price fw-bold'>${`${spendedBudgetFormatted}`}</Col>
                            </Row>
                        }
                    </Card.Body>
                </Card>
            </Col>
        </Row >
    )
}

export default Receipt