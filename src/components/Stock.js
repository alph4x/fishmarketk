import React from 'react';
import {StockCard} from './StockCard';

export class Stock extends React.Component {
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
    }

    componentDidMount(){
        //fetch stock and setState here
    }

    render() {
        return (
            <div>
                <h2>Current Stock:</h2>
                <StockCard stock={this.state.fishStock}/>
            </div>
        )
    }

}