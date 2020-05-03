import React, { Component } from 'react'
import './Counter.css'
import PropsType from 'prop-types'


class CounterButtom extends Component {
  constructor() {
    super()
    // this.increment = this.increment.bind(this)
    // this.decrement = this.decrement.bind(this)
  }
  render() {
    //render = () => {  if we use arrow (lambda function) then not need to bind it
    //const stl={fontSize: "medium", padding: "10px 15px", color: "rgb(17, 17, 24)"}
    return (
      <div className="counterButtom">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
      </div>
    )
  }
  // increment() {
  //   this.props.incrementMethod(this.props.by)
  // }

  // decrement() {
  //     this.props.decrementMethod(this.props.by)
  //   }
}

CounterButtom.defaultProps={
  by:1
}

CounterButtom.PropsTypes={
  by: PropsType.number
}


export default CounterButtom