import React from 'react';
import {Stock} from './Stock';

import {Row, Col, Form, Button} from 'react-bootstrap';

export class addToExisting extends React.Component {
    constructor(props) {
        super();

    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Stock/>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group as={Col} controlId="formGridFish">
                                <Form.Label>Fish</Form.Label>
                                <Form.Control as="select">
                                    <option>Choose fish...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAmount">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control placeholder="Amount of fishes"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPrice">
                                <Form.Label>Update price</Form.Label>
                                <Form.Control placeholder="Price of each fish" />
                            </Form.Group>
                            

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}