import React from 'react';
import {Stock} from './Stock';

import {Row, Col, Form, Button} from 'react-bootstrap';

export class sellFish extends React.Component {
    constructor(props) {
        super();
        this.state={
            fishCounter:1,
        }
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
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress">
                                    <Form.Label>To</Form.Label>
                                    <Form.Control placeholder="Sender's Algo Addres"/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFish">
                                    <Form.Label>Fish</Form.Label>
                                    <Form.Control as="select">
                                        <option>Choose Fish...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridAmount">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control placeholder="Amount of fishes"/>
                                </Form.Group>
                            </Form.Row>
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