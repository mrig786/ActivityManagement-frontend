import React, {Component} from 'react'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import './TodoApp.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListTodoComponent from './ListTodoComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import TodoComponent from './TodoComponent'

class TodoApp extends Component{
render(){
    return(
        <>
        <Router>
            <>
            <HeaderComponent/>
            <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
            <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
            <AuthenticatedRoute path="/todos" component={ListTodoComponent} />
            <Route path="/logout" component={LogoutComponent} />
            <Route component={ErrorComponent}/>
            </Switch>
            <FooterComponent/>
            </>
        </Router>
        {/* <LoginComponent/>
        <WelcomeComponent/> */}
        </>
    )
}
}
function ErrorComponent(){
    return <div>An error occured. Contact support at support@mkb.com</div>
}



export default TodoApp