import React, { Component } from "react";
import './counter.css'

class ChildComponent extends Component{
    constructor(){
        super()
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    render(){
        return(
            <div>
            <button onClick={this.decrement}>-{this.props.by}</button>
            <button onClick={this.increment}>+{this.props.by}</button>
            
            </div>
        )
    }

    increment(){
        this.props.incrementMethod(this.props.by)
    }
    decrement(){
        this.props.decrementMethod(this.props.by)
    }

}
export default ChildComponent