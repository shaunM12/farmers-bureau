const db = require('../models')
const Event = db.events


exports.create = (req, res) => {
    const {name, location, start, end, month, day, description, sponsoredBy} = req.body
    if(!req.body) {
        res.send('Please fill in the name of event')
        return
    }

    const event = new Event({
        name: req.body.name,
        location: req.body.location,
        start: req.body.start,
        end: req.body.end,
        month: req.body.month,
        day: req.body.day,
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
    console.log("req.body for update", req.body)
    Event.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data) {
            res.send("Couldn't update your event")
        } else {
            res.send({message: "Event has been updated"})
        }
    })
    .catch(err => {
        res.send('Error trying to update')
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