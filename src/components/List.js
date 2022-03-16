import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "../redux/productsSlice";
import { Row, Col, Card, ButtonToolbar, Button, ButtonGroup, InputGroup, FormControl } from 'react-bootstrap'

import Loading from './Loading';
import Error from './Error';


function List() {
    const products = useSelector((state) => state.products.items);
    const budget = useSelector((state) => state.products.budget);
    const items_maxStorage_quantity = useSelector((state) => state.products.items_maxStorage_quantity);
    const items_purchased_quantity = useSelector((state) => state.products.items_purchased_quantity);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') dispatch(fetchProducts());
    }, [dispatch, status])

    if (status === 'failed') {
        return <Error message={error} />
    }

    return (
        <>
            <Row>
                {products.map((product, index) => (
                    <Col md={4} className='my-2' >
                        <Card key={product.id} className='listCard mt-5 pt-3 d-flex align-items-center h-100 '>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body className='d-flex flex-column align-items-center w-100 '>
                                <Card.Title as="h5" className="listCardTitle">{product.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
                                <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                                    <ButtonGroup className="me-2" aria-label="First group">
                                        <Button size="sm" variant="secondary">Sell</Button>

                                        <InputGroup size="sm" className="w-50">
                                            <FormControl
                                                type="text"
                                                placeholder="1"
                                                aria-label="1"
                                                aria-describedby="btnGroupAddon"
                                            />
                                        </InputGroup>
                                        <Button size="sm" variant="secondary" className=''>Buy</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default List