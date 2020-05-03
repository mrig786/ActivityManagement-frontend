import React,{Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: 'mrig.b',
            password: '',
            hasSuccess: false,
            hasFailed: false
        }
        // this.setComingUserName=this.setComingUserName.bind(this)
        // this.setComingPassword=this.setComingPassword.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.checkCredentials=this.checkCredentials.bind(this)
    }

    handleChange(event){
        //  console.log(this.state)
        this.setState({[event.target.name]: event.target.value})
    }
    checkCredentials(){
        
        // if(this.state.username==="mrig.b" && this.state.password==="password"){
        //     // this.setState({hasSuccess: true} )
        //     // this.setState({hasFailed: false} )
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //     // console.log(this.state)
            
        // }else{
        //     // console.log(this.state.username)
        //     // console.log(this.state.password)
        //     this.setState({hasSuccess: false} )
        //     this.setState({hasFailed: true} )
            
        // }
        // AuthenticationService.executeBasicAuthenticationService(this.state.username,this.state.password)
        // .then(()=>{
        //     console.log("then")
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`) 
        // }).catch(() => {
        //     this.setState({hasSuccess: false})
        //     this.setState({hasFailed:true})
        // })

        AuthenticationService.executeJwtAuthenticationService(this.state.username,this.state.password)
        .then((response)=>{
            console.log("then")
            console.log(response.data.token)
            AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,response.data.token)
            this.props.history.push(`/welcome/${this.state.username}`) 
        }).catch(() => {
            this.setState({hasSuccess: false})
            this.setState({hasFailed:true})
        })
    }
    render(){
        return(
            <>
            <h2>Login</h2>
            <div className="container">
            {/* <ShowFailed ifFailed={this.state.hasFailed}/> */}
            {this.state.hasFailed && <div className="alert alert-warning">Invalid  Credentials</div>} 
            {this.state.hasSuccess && <div>Login Succeesful</div>}
            {/* <ShowSuccess ifSuccess={this.state.hasSuccess} /> */}
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
            <button className="btn btn-success" onClick={this.checkCredentials}>Login</button>
            </div>
            </>
        )
    }
}
// function ShowFailed(props){
//     if(props.ifFailed){
//         return <div>Invalid  Credentials</div>
//     }else return null
    
// }

// function ShowSuccess(props){
//     if(props.ifSuccess){
//         return <div>Login Succeesful</div>
//     }else return null
    
// }

export default LoginComponent