import React from 'react'

import { Row, Card } from 'react-bootstrap'

function Header() {

    return (
        <Row className='mt-5 px-3 '>
            <Card className='HeaderCard pt-3 d-flex align-items-center justify-content-center '>
                <Card.Img variant="top" src="http://localhost:3000/assets/profilePhoto.jpeg" />
                <Card.Body className='d-flex flex-column justify-content-center align-items-center w-100'>
                    <Card.Title as="h1" className='headerCardTitle text-center'> Spend Baris' Money </Card.Title>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default Header