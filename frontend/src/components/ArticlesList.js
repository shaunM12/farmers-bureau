import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getArticles } from "../functions";
import '../styles/ArticlesList.style.css'

const ArticlesList = () => {
  const [article, setArticle] = useState({
    id: null,
    title: "",
    author: "",
    content: "",
    image: "",
    snippet: "",
  });
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);


  const fetchData = async () => {
    const result = await getArticles();
    console.log("fetch data", result);
    setArticles(result);
  };

  const setActiveArticle = (article, index) => {
    console.log(article);
    setCurrentArticle(article);
    setCurrentIndex(index);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="cardContainer">
        <h1>CURRENT PUBLICATIONS</h1>
        <br />
        <div className="articles">
          {articles &&
            articles.map((article, index) => (
                <Link to={'/articles/' + article._id}>
              <div className="card"
              key={articles._id}
              onClick={() => setActiveArticle(article, index)}>
                <img src={article.image} />
              <br />
            
                <div className="content">
                  <div className="title">
                   {article.title}
                  </div>
                  <br />
                  <div className="author">
                    {article.author}
                  </div>
                  <br />
                  <div className="snippet">
                    {article.snippet}
                  </div>
                </div>
              </div>
                </Link>
            ))}
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};
export default ArticlesList;
