import React from 'react'
import { Row, Col, Card, Stack, ListGroup, ListGroupItem } from 'react-bootstrap'

function Receipt() {
    return (
        <Row className='mb-5'>
            <Col md={{ span: 6, offset: 3 }} className='' >
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title as="h3" className='fw-bolder fs-3 mb-3'>Your Receipt</Card.Title>
                        <Row className=' border-1 border-bottom border-dark pb-2'>
                            <Col md={{ span: 6, offset: 0 }} className='text-start' >Opna Women's Short Sleeva </Col>
                            <Col md={{ span: 3, offset: 0 }} className='text-center'>x1</Col>
                            <Col md={{ span: 3, offset: 0 }} className='text-end'>$7.95</Col>
                        </Row>
                        <Row className='pt-2'>
                            <Col className='text-start fw-bold'>TOTAL :</Col>
                            <Col className='text-end'>3 of 3</Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row >
    )
}

export default Receipt