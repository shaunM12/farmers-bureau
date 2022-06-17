import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";
import { useEffect, useState } from "react";
// import ArticleService from '../services/ArticleService'
// import { Formik} from 'formik'
// import axios from 'axios'
import FileBase64 from "react-file-base64";
import { createArticle, getArticles } from "../functions";
const AddArticle = () => {
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
  };
//   const fetchData = async () => {
//     const result = await getArticles();
//     console.log("fetch data", result);
//     setArticles(result);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
  return (
    <div>
      <h1>Add a New Article</h1>
      <div className="container">
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

// import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";
// import { useEffect, useState } from "react";
// // import ArticleService from '../services/ArticleService'
// // import { Formik} from 'formik'
// // import axios from 'axios'
// import FileBase64 from "react-file-base64";
// import { createArticle, getArticles } from "../functions";

// const AddArticle = () => {
//   const [article, setArticle] = useState({
//     id: null,
//     title: "",
//     author: "",
//     content: "",
//     image: "",
//   });
//   const [articles, setArticles] = useState([]);
//   // const [submitted, setSubmitted] = useState(false)

//   // const submit = async event => {
//   //     event.preventDefault()
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     const result = await createArticle(article);

//     setArticles(articles, result);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await getArticles();
//       console.log("fetch data", result);
//       setArticles(result);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Add a New Article</h1>
//       <div className="container">
//         <pre>{JSON.stringify(article, null, "\t")}</pre>
//         <form action="" onSubmit={onSubmitHandler}>
//           <input
//             type="text"
//             className="input-field"
//             onChange={(e) => setArticle({ ...article, title: e.target.value })}
//           />
//           <input
//             type="text"
//             className="input-field"
//             onChange={(e) => setArticle({ ...article, author: e.target.value })}
//           />
//           <input
//             type="text"
//             className="input-field"
//             onChange={(e) =>
//               setArticle({ ...article, content: e.target.value })
//             }
//           />

//           <FileBase64
//             type="file"
//             multiple={false}
//             onDone={({ base64 }) => setArticle({ ...article, image: base64 })}
//           />
//           <button type="submit">Submit New Article</button>
//         </form>
//       </div>
//        {articles ?
//       <div>

//       {articles.map((article) => {
//         <div className="card" key={article.id}>
//           <div className="card-image waves-effect waves-block waves-light">
//             <img
//               className="activator"
//               style={{ widht: "100%", height: 300 }}
//               src={article.image}
//             />
//           </div>
//           <div className="card-content">
//             <span className="card-title activator grey-text text-darken-4">
//               {article.title}
//             </span>
//             <span className="card-title activator grey-text text-darken-4">
//               {article.author}
//             </span>
//             <span className="card-title activator grey-text text-darken-4">
//               {article.content}
//             </span>
//           </div>
//         </div>;
//       })}
//     </div>
//   :
//       <div>
//           <h2>Loading...</h2>
//       </div>
// }
// </div>
//   )
// }

// export default AddArticle;
