
import http from '../http-common'

const getAll = () => {
    return http.get('/markets')

}
const get = id => {
    return http.get(`/markets/${id}`)
}

const create = data => {
    return http.post('/markets', data)
}

const remove = id => {
    return http.delete(`/markets/${id}`)
}

const update = (id, data) => {
    return http.put(`/markets/${id}`, data)
}

const MarketService = {
    getAll,
    get,
    create,
    remove,
    update
}

export default MarketService