import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getArticles } from "../functions";

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

  const navigate = useNavigate();

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
    <div>
      <div className="col-md-6">
        <h1>CURRENT PUBLICATIONS</h1>
        <div>
          {articles &&
            articles.map((article, index) => (
                <Link to={'/articles/' + article._id}>
              <div className={"card"}
              key={article._id}
              onClick={() => setActiveArticle(article, index)}>
                <img style={{ width: "20%" }} src={article.image} />
                <div className="card-content">
                  <div>
                    <span className="card">{article.title}</span>
                  </div>
                  <div>
                    <span className="card-content">{article.author}</span>
                  </div>
                  <div>
                    <span className="card-content">{article.snippet}</span>
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
