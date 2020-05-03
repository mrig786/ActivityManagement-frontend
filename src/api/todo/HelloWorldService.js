import axios from 'axios'
class HelloWorldService{
    executeHelloWorldService(){
        console.log("execute service")
        return axios.get("http://localhost:8080/hello")
    }
    executeHelloWorldBeanService(){
        console.log("execute service")
        return axios.get("http://localhost:8080/hellobean")
    }
    executeHelloWorldPathVariableService(name){
        // console.log("execute service")

        // let username='user'
        // let pass='password'
        // let basicAuthHeader= 'Basic ' +  window.btoa(username + ":" + pass)
        // Encoding done by btoa is on base 64 
        return axios.get(`http://localhost:8080/hello/path/${name}`,
        // {
        //     headers : {
        //         authorization: basicAuthHeader
        //     }
        // }
        )
    }
}
export default new HelloWorldService()