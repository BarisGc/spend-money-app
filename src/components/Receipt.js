import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

function Receipt() {
    return (
        <Row className='mb-5'>
            <Col md={{ span: 6, offset: 3 }} className='' >
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title as="h3" className='fw-bolder fs-3 mb-3'>Your Receipt</Card.Title>
                        <Row className='  pb-2 '>
                            <Col xs={{ span: 6, offset: 0 }} className='text-start' >Opna Women's Short Sleeva </Col>
                            <Col xs={{ span: 3, offset: 0 }} className='text-center'>x1</Col>
                            <Col xs={{ span: 3, offset: 0 }} className='text-end price fw-bold'>$7.95</Col>
                        </Row>
                        <Row className='  pb-2 '>
                            <Col xs={{ span: 6, offset: 0 }} className='text-start' >Opna Women's Short Sleeva </Col>
                            <Col xs={{ span: 3, offset: 0 }} className='text-center'>x1</Col>
                            <Col xs={{ span: 3, offset: 0 }} className='text-end price fw-bold'>$7.95</Col>
                        </Row>
                        <Row className='  pb-2 '>
                            <Col xs={{ span: 6, offset: 0 }} className='text-start' >Opna Women's Short Sleeva </Col>
                            <Col xs={{ span: 3, offset: 0 }} className='text-center'>x1</Col>
                            <Col xs={{ span: 3, offset: 0 }} className='text-end price fw-bold'>$7.95</Col>
                        </Row>
                        <Row className='  pb-2 '>
                            <Col xs={{ span: 6, offset: 0 }} className='text-start' >Opna Women's Short Sleeva </Col>
                            <Col xs={{ span: 3, offset: 0 }} className='text-center'>x1</Col>
                            <Col xs={{ span: 3, offset: 0 }} className='text-end price fw-bold'>$7.95</Col>
                        </Row>
                        <Row className='  pb-2 '>
                            <Col xs={{ span: 6, offset: 0 }} className='text-start' >Opna Women's Short Sleeva </Col>
                            <Col xs={{ span: 3, offset: 0 }} className='text-center'>x1</Col>
                            <Col xs={{ span: 3, offset: 0 }} className='text-end price fw-bold'>$7.95</Col>
                        </Row>
                        <Row className='  pb-2 '>
                            <Col xs={{ span: 6, offset: 0 }} className='text-start' >Opna Women's Short Sleeva </Col>
                            <Col xs={{ span: 3, offset: 0 }} className='text-center'>x1</Col>
                            <Col xs={{ span: 3, offset: 0 }} className='text-end price fw-bold'>$7.95</Col>
                        </Row>
                        <Row className='pt-2 border-1 border-top border-dark'>
                            <Col className='text-start fw-bold'>TOTAL :</Col>
                            <Col className='text-end price fw-bold'>$7.95</Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row >
    )
}

export default Receipt