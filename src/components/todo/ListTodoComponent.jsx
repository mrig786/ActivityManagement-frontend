import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import TodoDataService from '../../api/todo/TodoDataService.js'
import moment from 'moment'

class ListTodoComponent extends Component {
    constructor(props) {
        console.log("constructor")
        super(props)
        this.state = {
            todos: [],
            message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)    
        this.refreshToDo = this.refreshToDo.bind(this)
    }
    componentDidMount() {
        console.log("componentDidMount")
        this.refreshToDo()
    }

    refreshToDo() {
        let username = AuthenticationService.getLoggedInUser()
        // console.log(username)
        TodoDataService.retriveAllTodos(username)
            .then(response => {
                this.setState({ todos: response.data })
                console.log(response)
            })
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUser()
        console.log(id + " " + username)
        TodoDataService.deleteTodo(username, id)
            .then(response => {
                this.setState({ message: `Delete of Todo ${id} is successful` })
                this.refreshToDo()
            })

    }
    updateTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUser()
        console.log(id + " " + username)
        this.props.history.push(`/todos/${id}`)
    }
    addTodoClicked(){
        let username = AuthenticationService.getLoggedInUser()
        this.props.history.push(`/todos/-1`)
    }
    // componentWillUnmount(){
    //     console.log("componentWillUnmount")
    // }
    // componentWillMount(){
    //     console.log("componentWillMount")
    // }
    // shouldComponentUpdate(nextprops, nextState){
    //     console.log("shouldComponentUpdate")
    //     console.log(nextprops)
    //     console.log(nextState)
    //     return true
    // }

    render() {
        // console.log("render")
        return (
            <>
                <div>
                    <h1>Todos List</h1>
                    {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Target Date</th>
                                    <th>Is Completed?</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.todos.map(todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.desc}</td>
                                            <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <button className="btn btn-success" onClick={() => this.addTodoClicked()}>Add</button>
                    </div>
                </div>
            </>
        )
    }


}

export default ListTodoComponent