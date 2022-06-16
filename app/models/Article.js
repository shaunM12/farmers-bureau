const mongoose = require('mongoose')

module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            title: String,
            author: String,
            content: String,
            image: String,
        }, {
            timestamps: true
        }
    )
    const Article = mongoose.model('article', schema)
    return Article
}