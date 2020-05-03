import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';
import AuthenticationService from './AuthenticationService.js'

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn=AuthenticationService.isLoggedIn();
        console.log(isUserLoggedIn);
        return (
            <>
                <header>
                    
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        { <div><a href='https://www.facebook.com/mrigendrakumar.bharti' className="navbar-brand">Profile</a></div>}
                        <ul className="navbar-nav">
                            {isUserLoggedIn && <li> <Link className="nav-link" to="/welcome/mrig">Home</Link> </li>}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/todos">ToDo</Link></li>}
                        </ul>

                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                            {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        </ul>
                    </nav>
                </header>
            </>
        )
    }
}
export default withRouter(HeaderComponent)