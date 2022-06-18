import http from '../http-common'

const create = data => {
    return http.post('/user', data)
}


const UserService =  {
    create,

}

export default UserService