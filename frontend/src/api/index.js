import axios from 'axios'
const url = "http://localhost:8081/articles"
export const getArticles = () => axios.get(url)
export const createArticle = (article) => axios.post(url, article)
export const getArticle = (id) => axios.get(url, id)