import React from 'react';
import {StockCard} from './StockCard';

export class Stock extends React.Component {
    constructor(props) {
        super();
        this.state = {
            fishStock: [

            ],
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