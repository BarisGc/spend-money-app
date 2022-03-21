import React from 'react'
import numeral from 'numeral';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { productSelectors }
    from "../redux/productsSlice";

function BudgetBar() {
    const productsPurchaseInfo = useSelector(productSelectors.selectAll)
    const initialBudget = useSelector((state) => state.products.initialBudget);
    // const initialValue = 0;
    // const sumWithInitial = array1.reduce(
    //     (previousValue, currentValue) => previousValue + currentValue,
    //     initialValue
    // );

    let consumedBudget = 0;

    productsPurchaseInfo.forEach((order) => {
        consumedBudget += order.purchasedValue
    })
    let currentBudget = initialBudget - consumedBudget
    const currentBudgetFormatted = numeral(currentBudget).format('0,0');

    console.log(currentBudget)

    // let consumedBudget = productsPurchaseInfo.reduce((previousValue, currentValue) =>
    //     previousValue.purchasedValue + currentValue.purchasedValue, 0)

    // let currentBudget = initialBudget - consumedBudget

    // console.log("header", currentBudget)

    return (
        // .sticky-top will not work if it is inside any container. It must be the outside-most element inside <body>
        <Row className='BudgetBar justify-content-center align-items-center my-2 mx-0 h-100'>
            <Col className='budgetScore'>${currentBudgetFormatted}</Col>
        </Row>
    )
}

export default BudgetBar