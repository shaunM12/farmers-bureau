const db = require('../models')
const Article = db.articles


exports.findAll = async (req, res) => {
    console.log('get articles')
    try {
        const article = await Article.find()
        res.status(200).json(article)
    }
    catch (error) {
        res.status(404).json({message: error.message})
    }
}

exports.create = async (req, res) => {
    console.log('create article', req.body)
    const article = new Article(req.body)
    try {
        await article.save()
        res.status(201).json(article)
    }
    catch (error) {
        console.log(error)
    }
}

exports.findOne = async (req, res) => {
    const id = req.params.id
    console.log(id)

    try {
        const article = await Article.findById(id)
        res.status(200).json(article)
    }
    catch(error) {
        console.log(error)
    }
    
}
