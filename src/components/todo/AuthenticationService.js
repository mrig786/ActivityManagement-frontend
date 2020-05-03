import axios from 'axios'
import {API_URL} from '../../Constants.js'

export const USER_SESSION_ATTRIBUTE_NAME='authenticatedUser'
class AuthenticationService {
    
    executeBasicAuthenticationService(username,password){
        return axios.get(`${API_URL}/basicauth`,
        { headers: {authorization: this.getBasicAuthToken(username,password)}})
    }
    executeJwtAuthenticationService(username,password){
        console.log(username +" "+ password)
        return axios.post(`${API_URL}/authenticate`,{ 
            username,
            password
        })
    }
    getBasicAuthToken(username, password){
        return 'Basic ' + window.btoa(username + ":" + password)
    }
    getJwtAuthToken(token){
        return 'Bearer ' + token
    }
    registerSuccessfulLogin(username,password) {
        sessionStorage.setItem("USER_SESSION_ATTRIBUTE_NAME", username)
        this.setAxiosInterceptor(this.getBasicAuthToken(username,password))
    }

    registerSuccessfulLoginForJwt(username,token){
        sessionStorage.setItem("USER_SESSION_ATTRIBUTE_NAME", username)
        this.setAxiosInterceptor(this.getJwtAuthToken(token))
    }
    logout() {
        sessionStorage.removeItem("USER_SESSION_ATTRIBUTE_NAME")
    }
    isLoggedIn() {
        let user = sessionStorage.getItem("USER_SESSION_ATTRIBUTE_NAME")
        if (user === null)
            return false
        return true
    }

    getLoggedInUser() {
        let user = sessionStorage.getItem("USER_SESSION_ATTRIBUTE_NAME")
        if (user === null)
            return ''
        return user
    }
    setAxiosInterceptor(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isLoggedIn) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }

}

export default new AuthenticationService()