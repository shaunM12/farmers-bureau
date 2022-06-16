import { useState} from 'react'
import ArticleService from '../services/ArticleService'
import { Formik} from 'formik'
import axios from 'axios'


const AddArticle = () => {
    // const initialArticleState = {

    //     id: null,
    //     author: "",
    //     content: "",
    //     image: ""

    // }

    // const [article, setArticle] = useState(initialArticleState)
    // const [submitted, setSubmitted] = useState(false)

    const [file, setFile ] = useState()
    const [description, setDescription] = useState("")
    const [image, setImage] = useState()

    const submit = async event => {
        event.preventDefault()
    
     

    const formData = new FormData()
    formData.append('image', file)
    formData.append('description', description)

    const result =  axios.post('/articles', formData, {
        headers: {'Content-Type': 'multipart/form-data'
        }})
        setImage(result.data.imagePath)
    
}


    return (
        <div>
            <h1>Add a New Article</h1>
            <form onSubmit={submit}>
                <input 
                filename={file}
                onChange={ e => setImage(e.target.files[0])}
                type="file"
                accept="image/*"
                ></input>
                {/* <input 
                onChange={e => setDescription(e.target.value)}
                type="text"
                ></input> */}
                <button type='submit'>Submit</button>
            </form>
                 {image && <img src={image}></img>}


    
        </div>
    )
    
}


export default AddArticle