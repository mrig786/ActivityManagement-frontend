import React, { Component } from 'react'
import './Counter.css'
import CounterButtom from './CounterButtom'


class Counter extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }
    render() {
        //render = () => {  if we use arrow (lambda function) then not need to bind it
        //const stl={fontSize: "medium", padding: "10px 15px", color: "rgb(17, 17, 24)"}
        return (
            <div className="counter">
                <CounterButtom by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButtom by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButtom by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <div><span className='increment' >{this.state.counter}</span></div>
                <div><button className='reset' onClick={this.reset}>Reset</button></div>
            </div>
        )
    }

    increment(by) {
        console.log('Increment from parent')
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            })
    }

    decrement(by) {
            this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            })
    }
    reset() {
        this.setState(
            () => {
                return { counter: 0 }
            }
        )
    }
}
export default Counter