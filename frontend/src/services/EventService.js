import http from '../http-common'


const getAll = () => {
    return http.get('/events')
}

const findByEvent = searchEvent => {
    return http.get(`/events?searchEvent=${searchEvent}`)
}

const get = id => {
    return http.get(`/events/${id}`)
}

const update = (id, data) => {
    return http.put(`/events/${id}`, data)
}

const remove = id => {
    return http.delete(`/events/${id}`)
}

const create = data => {
    return http.post('/events', data)
}






const EventService = {
    getAll,
    findByEvent,
    get,
    update,
    remove,
    create,



}

export default EventService