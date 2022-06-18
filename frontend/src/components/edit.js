<div>
        {articles ? (
          <div>
            {articles.map((article) => {
              <div className="card" key={article.id}>
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    className="activator"
                    style={{ widht: "100%", height: 300 }}
                    src={article.image}
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    {article.title}
                  </span>
                  <span className="card-title activator grey-text text-darken-4">
                    {article.author}
                  </span>
                  <span className="card-title activator grey-text text-darken-4">
                    {article.content}
                  </span>
                </div>
              </div>;
            })}
          </div>
        ) : (
          <div>
            <h2>Loading...</h2>
          </div>
        )}
      </div>



<div>
{articles.map((article) => (
  <div className="card" key={article._id}>
    <img style={{ width: "50%" }} src={article.image} />
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
))}
</div> 