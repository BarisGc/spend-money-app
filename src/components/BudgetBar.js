import React from 'react'
import { Row, Col } from 'react-bootstrap'

function BudgetBar() {
    return (
        // .sticky-top will not work if it is inside any container. It must be the outside-most element inside <body>
        <Row className='BudgetBar justify-content-center align-items-center my-2 mx-0'>
            <Col className='budgetScore'>$10,000</Col>
        </Row>
    )
}

export default BudgetBar