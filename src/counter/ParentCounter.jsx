import React,{ Component } from "react";
import ChildComponent from "./ChildCounter";
import './counter.css'

class ParentCounter extends Component{

    constructor(){
        super()
        this.state = ({
            counter: 0
        })

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this) 
        this.reset = this.reset.bind(this)
    }
    render(){
        return(
            <div>
            <ChildComponent by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></ChildComponent>
            <ChildComponent by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></ChildComponent>
            <ChildComponent by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></ChildComponent>

            <span className="count">Count: {this.state.counter}</span>
            <div><button onClick={this.reset}className="reset">Reset</button></div>
            
            </div>
        )
        
    }

    increment(by){
        this.setState({
            counter: this.state.counter + by
        })

    }

    decrement(by){
        this.setState({
            counter: this.state.counter - by
        })
    }

    reset(){
        this.setState({
            counter: 0
        })
    }
}

export default ParentCounter