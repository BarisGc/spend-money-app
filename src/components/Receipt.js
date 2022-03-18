import React from 'react'
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

function Receipt() {
    return (
        <Row>
            <Col md={4} className='my-2' >
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Your Receipt</Card.Title>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>asd</ListGroupItem>
                            <ListGroupItem>qweqweqe</ListGroupItem>
                            <ListGroupItem>zxcxzcxzczczxcxzczcx</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>asd</ListGroupItem>
                            <ListGroupItem>qweqeqeqe</ListGroupItem>
                        </ListGroup>
                    </Card.Footer>
                </Card>
            </Col>
        </Row >
    )
}

export default Receipt