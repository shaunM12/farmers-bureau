import http from '../http-common'


const create = data => {
    
    return http.post('/registration', data)
}



const RegistrationService = {
    create
}


export default RegistrationService