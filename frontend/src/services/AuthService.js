import http from '../http-common'

const create = data => {
    return http.post('/auth', data)
}



const AuthService = {
    create
}

export default AuthService