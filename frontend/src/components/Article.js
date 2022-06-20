import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getArticle } from '../functions'
import ArticleService from '../services/ArticleService'
import '../styles/Article.style.js'
import {
  Acontainer,
  Acard,
  Title,
  Aauthor,
  Acontent,
  Img

} from '../styles/Article.style'

const Article = (props) => {
  const { id } = useParams()
  let navigate = useNavigate()

  const [article, setArticle] = useState({
    id: null,
    title: '',
    author: '',
    content: '',
    image: '',
    snippet: '',
  })
  const [message, setMessage] = useState('')
  const [currentArticle, setCurrentArticle] = useState(article)

  const getCurrentArticle = (id) => {
    ArticleService.get(id).then((response) => {
      setCurrentArticle(response.data)
      console.log(response.data)
    })
  }
  useEffect(() => {
    if (id) {
      getCurrentArticle(id)
    }
  }, [id])

  return (
    <Acontainer>
      {currentArticle ? (
        <Acard key={currentArticle._id}>
          <Title>{currentArticle.title}</Title>

          <Img src={currentArticle.image} />
          <div className="card-content">
            <div>
              <br />
              <div>
                <Aauthor>{currentArticle.author}</Aauthor>
              </div>
              <br />
              <br />
              <div>
                <Acontent>{currentArticle.content}</Acontent>
              </div>
            </div>
          </div>
        </Acard>
      ) : (
        <p>Pick another article</p>
      )}
    </Acontainer>
  )
}

export default Article
