const db = require('../models')
const Event = db.events


exports.create = (req, res) => {
    if(!req.body.name) {
        res.send('Please fill in the name of event')
        return;
    }

    const event = new Event({
        name: req.body.name,
        location: req.body.location,
        time: req.body.time,
        date: req.body.date,
        description: req.body.description,
        sponsoredBy: req.body.sponsoredBy
    })

    event.save(event)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500)
        .send('Sorry there was an error trying to create a new event listing')
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    
    Event.findById(id).then(data => {
        console.log(id)
        if(!data) {
            res.send("Couldn't find that event")
        } else {
            res.send(data)
        }
    })
    .catch(err => {
        res.send("There was an error trying to find the event")
    })
}

exports.findAll = (req, res) => {
    const name = req.query.name
    
    let find = name ? { name: { $regex: new RegExp(name), $options: 'i'}} : {}

    Event.find(find)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(404).send("Sorry couldn't find any events")
    })
}

exports.update = (req, res) => {
    if(!req.body) {
        return res.send("Please fill in required fields")
    }
    const id = req.params.id

    Event.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data) {
            res.send("Couldn't update your event")
        } else {
            res.send(data)
        }
    })
    .catch(err => {
        res.send('Event has been updated')
    })
}

exports.delete = (req, res) => {
    const id = req.params.id

    Event.findByIdAndDelete(id, {useFindAndModify: false})
    .then(data => {
        if(!data) {
            res.send("Sorry couldn't delete event")
        } else {
            res.send(data)
        }
    })
    .catch(err => {
        res.send('Sorry there was and error trying to delete this event')
    })
}

exports.deleteAll = (req, res) => {
    Event.deleteMany({})
    .then(data => {
        res.send('Deleted all events in the database')
    })
    .catch(err => {
        res.send("There was an error trying to delete all events")
    })
}