import React, { Component } from 'react';
import './card.css';

export class card extends Component {
    state={
        heading1:'stock total',
        price1:'$150000',
        increment1:' Increased by 60%',
        heading2:' total profit',
        price2:'$25000',
        increment2:' Increased by 30%',
        heading3:'unique visitors',
        price3:'$250000',
        increment3:' Increased by 80%'
    }
    render() {
        return (
            <div className="cards">
                    <div className="card card-1">
                    <i className="fa fa-square-o" aria-hidden="true"></i>
                    <h4>{this.state.heading1}</h4>
                    <h2>{this.state.price1}</h2>
                    <p>{this.state.increment1}</p>
                    </div>

                    <div className="card card-2">
                    <i className="fa fa-square-o" aria-hidden="true"></i>
                    <h4>{this.state.heading2}</h4>
                    <h2>{this.state.price2}</h2>
                    <p>{this.state.increment2}</p>
                    </div>

                    <div className="card card-3">
                    <i className="fa fa-square-o" aria-hidden="true"></i>
                    <h4>{this.state.heading3}</h4>
                    <h2>{this.state.price3}</h2>
                    <p>{this.state.increment3}</p>
                    </div>
            </div>
        )
    }
}

export default card;
