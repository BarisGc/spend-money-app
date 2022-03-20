import React from 'react'
import numeral from 'numeral';
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';

function BudgetBar() {
    const budget = useSelector((state) => state.products.budget);
    const budgetFormatted = numeral(budget).format('0,0');

    return (
        // .sticky-top will not work if it is inside any container. It must be the outside-most element inside <body>
        <Row className='BudgetBar justify-content-center align-items-center my-2 mx-0 h-100'>
            <Col className='budgetScore'>${budgetFormatted}</Col>
        </Row>
    )
}

export default BudgetBar