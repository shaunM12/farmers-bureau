import { getAppBarUtilityClass } from '@mui/material'
import * as api from '../api'


export const getArticles = async () => {
    try {
        const {data} = await api.getArticles()
        return data
    } catch (error) {
        console.log(error)
    }

}

export const createArticle = async(todo) => {
    try {
        const {data} = await api.createArticle(todo)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getArticle = async(id) => {
    try {
        const {data} = await api.getArticle(id)
        return data
    } catch (error) {
        console.log(error)
    }
}