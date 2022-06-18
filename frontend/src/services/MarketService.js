import http from '../http-common'

const getAll = () => {
    return http.get('/markets')

}

const create = data => {
    return http.post('/markets', data)
}

const remove = id => {
    return http.delete(`/markets/${id}`)
}


const MarketService = {
    getAll,
    create,
    remove
}

export default MarketService