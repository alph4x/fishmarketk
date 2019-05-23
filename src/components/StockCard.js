import React from 'react';

import {Card, ListGroup, ListGroupItem, Row, Col} from 'react-bootstrap';
import { Stock } from './Stock';

export const StockCard = (props) => {
    console.log(props.stock);
    return (

        <ul>
            <Row>
                {
                    props
                        .stock
                        .map((fish, index) => {
                            return (

                                <li key={index}>
                                    <Col>
                                        <Card
                                            style={{
                                                width: '18rem'
                                            }}>
                                            <Card.Img variant="top" src={fish.image}/>
                                            <Card.Body>
                                                <Card.Title>{fish.species}</Card.Title>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroupItem>Amount: {fish.amount}
                                                </ListGroupItem>
                                                <ListGroupItem>Price: {fish.price}
                                                </ListGroupItem>
                                            </ListGroup>
                                        </Card>
                                    </Col>
                                    <br></br>
                                </li>

                            )
                        })
                }
            </Row>
        </ul> 

    )
}