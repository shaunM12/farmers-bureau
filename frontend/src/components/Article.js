import {useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {getArticle} from '../functions'
import ArticleService from '../services/ArticleService'



const Article = props => {

    const {id} = useParams()
    let navigate = useNavigate()

    const [article, setArticle] = useState({ id: null, title: "", author: "", content: "", image: "", snippet: ""})
    const [message, setMessage] = useState('')
    const [currentArticle, setCurrentArticle] = useState(article)


    const getCurrentArticle = id => {
        ArticleService.get(id)
        .then(response => {
            setCurrentArticle(response.data)
            console.log(response.data)
        })
        // const result = getArticle()
        // setCurrentArticle(currentArticle)
    }
    useEffect(() => {
        // const fetchData = async () => {
        //     const result = await getArticle()
        //     console.log("fetch data", result)
        //     setArticle(result)
        if(id) {

            getCurrentArticle(id)
        }
        // fetchData()
    }, [id])



    return (
        <div>
           
           {currentArticle ? (
               <div className="card" key={currentArticle._id}>
                    <span className="card"><strong>{currentArticle.title}</strong></span>
                    <br/>
                    <br />
                   <img style={{width:"70%"}} src={currentArticle.image} />
                   <div className="card-content">
                    <div>
                    <div>
                   
                  </div>
                  <div>
                    <span className="card-content">{currentArticle.author}</span>
                  </div>
                  <br/>
                  <br />
                  <div>
                    <span className="card-content">{currentArticle.content}</span>
                  </div>
                    </div>
                </div>
                </div>

           ) : (
               <p>Pick another article</p>
           )}

        </div>
    )
        

}


export default Article