import axios from 'axios'
import {API_URL} from '../../Constants.js'
class TodoDataService{
    retriveAllTodos(name){
        // console.log("execute service")
        return axios.get(`${API_URL}/users/${name}/todos`)
    }

    retriveTodo(name,id){
        // console.log("execute service")
        return axios.get(`${API_URL}/users/${name}/todos/${id}`)
    }

    deleteTodo(name,id){
        // console.log("execute service")
        return axios.delete(`${API_URL}/users/${name}/todos/${id}`)
    }

    updateTodo(name,id,todo){
        // console.log("execute service")
        return axios.put(`${API_URL}/users/${name}/todos/${id}`, todo)
    }

    createTodo(name,todo){
        // console.log("execute service")
        return axios.post(`${API_URL}/users/${name}/todos`, todo)
    }

}
export default new TodoDataService()