import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
    constructor(){
        super()
        this.state={
            welcomeMessage:'',
            errorMessage:''
        }
        this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this)
        this.successResponseHandler=this.successResponseHandler.bind(this)
        this.errorResponseHandler=this.errorResponseHandler.bind(this)
    }
    render() {
        return (
            <>
                <h2>Welcome to Jungle!!</h2>
                <div className="container">
                    Welcome To {this.props.match.params.name} Page.
                    You can manage todos <Link to="/todos">here.</Link>
                </div>
                <div className="container">
                    Click here to get customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
                <div className="container">
                    {this.state.errorMessage}
                </div>
            </>
        )


    }
    retrieveWelcomeMessage(){
        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => console.log(response.data.message))
        // .then(response => this.successResponseHandler(response))

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        // .then(response => console.log(response.data.message))
        .then(response => this.successResponseHandler(response))
        .catch(error => this.errorResponseHandler(error))
    }
    successResponseHandler(response){
        this.setState({welcomeMessage: response.data.message})
    }
    errorResponseHandler(error){
        let errorMessage=''
        if(error.message!=null){
            errorMessage+=error.message
        }
        if(error.response!=null){
            errorMessage+=error.response.data.message
        }
        this.setState({errorMessage: errorMessage})
    }
}

export default WelcomeComponent