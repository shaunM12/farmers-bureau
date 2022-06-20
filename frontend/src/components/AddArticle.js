import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";
import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router";
import { createArticle, getArticles } from "../functions";
// import '../styles/AddArticle.style.css'
import {
  AddArticleContainer,
  AddArticleButton,
  Header,
  AddArticleForm,
  AddButtonContainer
} from '../styles/AddArticle.style'

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
    <AddArticleContainer>
      <Header>Add a New Article</Header>
      <div className="form">
        {/* <pre>{JSON.stringify(article, null, "\t")}</pre> */}
        {/* <form action="" onSubmit={onSubmitHandler}> */}<AddArticleForm>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="input-field"
            onChange={(e) => setArticle({ ...article, title: e.target.value })}
          />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            className="input-field"
            onChange={(e) => setArticle({ ...article, author: e.target.value })}
          />
          <label htmlFor="content">Content</label>
          <input
            type="text"
            className="input-field"
            onChange={(e) =>
              setArticle({ ...article, content: e.target.value })
            }
          />
          <label htmlFor="snippet">Snippet:</label>
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
        </AddArticleForm>
          <br />
          <br/>
          <AddButtonContainer>
          <AddArticleButton type="submit">Submit New Article</AddArticleButton>
          </AddButtonContainer>
        {/* </form> */}
      </div>
      
      </AddArticleContainer>
  );
};
export default AddArticle;

