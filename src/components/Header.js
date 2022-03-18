import React from 'react'
import { Row, Card } from 'react-bootstrap'

function Header() {
    return (
        <Row>
            <Card className='HeaderCard mt-5 pt-3 d-flex align-items-center '>
                <Card.Img variant="top" src="http://localhost:3000/assets/profilePhoto.jpeg" />
                <Card.Body className='d-flex flex-column align-items-center w-100'>
                    <Card.Title as="h1"> Spend Baris' Money </Card.Title>
                    <Card.Text className='w-100'>
                        $100.000
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default Header