import http from '../http-common'

const getAll = () => {
    return http.get('/articles')
}

const create = () => {
    return http.post('/articles')
}


const ArticleService = {
    create,
}







export default ArticleService 