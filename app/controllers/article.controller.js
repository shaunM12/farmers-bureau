const db = require('../models')
const Article = db.articles




exports.create = async (req, res) => {

    if(!req.body.title) {
        res.status(400).send({ message: "Please fill in title"})
        return;
    }

    const article = new Article({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content
    })

    article.save(article).then(data => { res.send(data)})
    .catch(err => {
        res.status(500).send({ message: err.message || "Some error occurred while creating a new article"})
    })

}
