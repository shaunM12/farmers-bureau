const db = require('../models')
const Markets = db.markets

exports.findAll = async (req, res) => {
    const where = req.query.where

    let find = where ? { where: { $regex: new RegExp(where), $options: 'i'}} : {}
    console.log(find)
    Markets.find(find)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(404).send({message: "Sorry couldn't find any farmer's markets"})
    })  
}

exports.create = (req, res) => {
    console.log('create market', req.body)
    const { where, days, time, location } = req.body
    if (!req.body) {
        res.send({ message: "Please fill in required fields"})
    }

    const markets = new Markets({
        where: req.body.where,
        days: req.body.days,
        time: req.body.time,
        location: req.body.location
    })
    markets.save(markets)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status.send({ message: "Sorry there was an error trying to create a new farmer's market listing"})
    })
 }

exports.delete = (req, res) => {
    const id = req.params.id

    Markets.findByIdAndDelete(id, {useFindAndModify: false})
    .then(data => {
        if (!data) {
            res.send("Sorry couldn't delete event")
        } else {
            res.send(data)
        }
    })
    .catch(err => {
        res.send({message: 'Sorry error trying to delete this event'})
    })   
}

exports.update = (req, res) => {
    if(!req.body) {
        return res.send("Please fill in the required fields")

    }
    const id = req.params.id
    console.log('req.body for updating market', req.body)

    Markets.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data) {
            res.send({message: "Couldn't update this farmer's market"})
        } else {
            res.send({message: "This farmer's market has been updated"})
        }
    })
    .catch(err => {
        res.send({message: "Error trying to update"})
    })
}
