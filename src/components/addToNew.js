import React from 'react';

import {Form, Button, Col} from 'react-bootstrap';

export class addToNew extends React.Component {
    constructor(props) {
        super();

    }
    render() {
        return (
            <div>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter the fish name"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control placeholder="Enter the fish image URL"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control placeholder="Enter the amount of fishes to add" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control placeholder="Enter the price of this fish" />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}