import http from '../http-common'

const create = data => {
    return http.post('/user', data)
}

const get = id => {
    return http.get(`user/${id}`)
}





const UserService =  {
    create,
    get
}

export default UserService