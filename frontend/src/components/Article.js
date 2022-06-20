import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getArticle } from "../functions";
import ArticleService from "../services/ArticleService";
import '../styles/Article.style.css'

const Article = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [article, setArticle] = useState({
    id: null,
    title: "",
    author: "",
    content: "",
    image: "",
    snippet: "",
  });
  const [message, setMessage] = useState("");
  const [currentArticle, setCurrentArticle] = useState(article);

  const getCurrentArticle = (id) => {
    ArticleService.get(id).then((response) => {
      setCurrentArticle(response.data);
      console.log(response.data);
    });
  };
  useEffect(() => {
    if (id) {
      getCurrentArticle(id);
    }
  }, [id]);

  return (
    <div className="conatiner">
      {currentArticle ? (
        <div className="acard" key={currentArticle._id}>
          
            <h1>{currentArticle.title}</h1>
         
          
          
          <img src={currentArticle.image} />
          <div className="card-content">
            <div>
            <br />
              <div>
                <span className="aauthor">{currentArticle.author}</span>
              </div>
              <br />
              <br />
              <div>
                <span className="acontent">{currentArticle.content}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Pick another article</p>
      )}
    </div>
  );
};

export default Article;
