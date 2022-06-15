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

exports.findOne = (req, res) => {
    const id = req.params.id
    console.log(id)

    Article.findById(id).then(data => {
        console.log(id)
        if(!data) {
            res.send("Can't find article")
        } else {
            res.send(data)
        }
    })
    .catch(err => {
        res.json("Error getting the article you are looking for")
    })
}

exports.findAll = (req, res) => {
    const title = req.query.title
    console.log(title)

    let search = title ? { title: { $regex: new RegExp(title), $options: 'i'}} : {}

    Article.find(search)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send("Error trying to find all articles")
    })
}

exports.update = (req, res) => {

    if(!req.body) {
        return res.send("Please fill in the fields")
    }
    const id = req.params.id

    Article.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data) {
            return res.send("Couldn't edit the article")
        } else {
            return res.send("Article has been updated")
        }
    })
    .catch(err => {
        res.status(500).send("Sorry there has been an error trying to edit the article")
    })
}

exports.delete = (req, res) => {

    const id = req.params.id

    Article.findByIdAndDelete(id, {useFindAndModify: false})
    .then(data => {
        if(!data) {
            res.send("Article could not be deleted, possibly because article was not found")
        } else {
            res.send("Article has been successfully deleted")
        }
    })
    .catch(err => {
        res.send("There was an error trying to delete that particular article")
    }) 
}

exports.deleteAll = (req, res) => {

    Article.deleteMany({})
    .then(data => {
        res.send('All articles have been deleted from the database')
    })
    .catch(err=> {
        res.send("There was an error trying to delete all the articles")
    })
}