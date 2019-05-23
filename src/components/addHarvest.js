import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import {Row, Col, Button} from 'react-bootstrap';

export class addHarvest extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <br/><br/>
                <Row>
                    <Button variant='outline-dark' size='lg' block="block">
                        <Link to='/addToExisting'>
                            Add to existing fish stock
                        </Link>
                    </Button>
                </Row>
                <br/><br/>
                <Row>
                    <Button variant='outline-dark' size='lg' block="block">
                        <Link to='/addToNew'>
                            Add new fish types
                        </Link>
                    </Button>
                </Row>
            </div>
        )
    }
}