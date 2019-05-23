import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class addHarvest extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div>
                <Link to='/addToExisting'>
                    Add to existing fish stock
                </Link>
                <Link to='/addToNew'>
                    Add new fish types
                </Link>
            </div>
        )
    }
}