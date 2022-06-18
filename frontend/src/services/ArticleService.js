import http from '../http-common'


const get = id => {
    return http.get(`/articles/${id}`)
}

const ArticleService = {
    // create,
    get,
    
}







export default ArticleService 