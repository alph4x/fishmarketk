import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Stock} from './Stock';

import {Container, Button} from 'react-bootstrap';

export class Market extends React.Component {
    constructor(props) {
        super();
        this.state = {
            fishStock: [
                {
                    species: "Tuna",
                    image: "https://5.imimg.com/data5/UE/XF/MY-60738954/fresh-tuna-fish-250x250.jpg",
                    price: 100,
                    amount: 50,
                    fishes: ["a", "b"]
                }, {
                    species: "Cod",
                    image: "https://4.imimg.com/data4/EY/IM/MY-5559191/reef-cod-fish-500x500.jpg",
                    price: 200,
                    amount: 20,
                    fishes: ["a", "b"]
                }
            ]
        }
        const stock = this.state.fishStock;

    }

    componentDidMount(){
        //fetch stock here then setState
    }

    render() {
        return (
            <div>
                <br/><br/>
                <Container>
                    <Link to='/addHarvest'>
                        <Button size='lg' block="block">
                            Add Harvest
                        </Button>
                    </Link>
                    <br/>
                    <Link to='/sellFish'>
                        <Button size='lg' block="block">
                            Sell Fish
                        </Button>
                    </Link>
                </Container>

                <br/><br/><br/>

                <Stock fishStock = {this.state.fishStock}/>
            </div>
        )
    }
}