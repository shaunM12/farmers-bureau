import http from '../http-common'

// const getAll = () => {
//     return http.get('/articles')
// }

// const create = () => {
//     return http.post('/articles')
// }

const get = id => {
    
    return http.get(`/articles/${id}`)
}


const ArticleService = {
    // create,
    get,
}







export default ArticleService 