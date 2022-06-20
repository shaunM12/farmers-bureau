import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";
import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router";
import { createArticle, getArticles } from "../functions";
import '../styles/AddArticle.style.css'

const AddArticle = () => {

  const navigate = useNavigate()
  const [article, setArticle] = useState({
    id: null,
    title: "",
    author: "",
    content: "",
    snippet: "",
    image: "",
  });
  const [articles, setArticles] = useState([]);
  // const [submitted, setSubmitted] = useState(false)
  // const submit = async event => {
  //     event.preventDefault()
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await createArticle(article);
    setArticles(articles, result);
    navigate('/articles')
  };

  return (
    <div className="container">
      <h1>Add a New Article</h1>
      <div className="form">
        <pre>{JSON.stringify(article, null, "\t")}</pre>
        <form action="" onSubmit={onSubmitHandler}>
          <input
            type="text"
            className="input-field"
            onChange={(e) => setArticle({ ...article, title: e.target.value })}
          />
          <input
            type="text"
            className="input-field"
            onChange={(e) => setArticle({ ...article, author: e.target.value })}
          />
          <input
            type="text"
            className="input-field"
            onChange={(e) =>
              setArticle({ ...article, content: e.target.value })
            }
          />
          <input
            type="text"
            className="input-field"
            onChange={(e) =>
              setArticle({ ...article, snippet: e.target.value })
            }
          />
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) => setArticle({ ...article, image: base64 })}
          />
          <button type="submit">Submit New Article</button>
        </form>
      </div>
      
    </div>
  );
};
export default AddArticle;

