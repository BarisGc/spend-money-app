import React from 'react'
import numeral from 'numeral';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { productSelectors }
    from "../redux/productsSlice";

function BudgetBar() {
    const productsPurchaseInfo = useSelector(productSelectors.selectAll)
    const initialBudget = useSelector((state) => state.products.initialBudget);

    let spendedBudget = productsPurchaseInfo.reduce(
        (previousValue, currentValue) => {
            return (previousValue + currentValue.purchasedValue)
        }, 0)

    let currentBudget = initialBudget - spendedBudget
    const currentBudgetFormatted = numeral(currentBudget).format('0,0');

    return (
        // .sticky-top will not work if it is inside any container. It must be the outside-most element inside <body>
        <Row className='BudgetBar justify-content-center align-items-center my-2 mx-0 h-100'>
            <Col className='budgetScore'>${currentBudgetFormatted}</Col>
        </Row>
    )
}

export default BudgetBar