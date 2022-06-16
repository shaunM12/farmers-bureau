import axios from 'axios'
import http from '../http-common'

const create = data => {
    return http.post('/user', data)
}

const get = async () => {

    // await axios.get('/user/')
    // return http.get(`user/${id}`)
}
const login = async (data) => {
    // await axios.post('/user', data)
    return http.post('/user', data)
}





const UserService =  {
    create,
    get,
    login

}

export default UserService