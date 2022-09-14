// option 1: exporting the whole file
const Destination = require("./../models/destination.model")

// option 2: exporting the whole file as an object, with key/value pair
// const {Destination} = require("./../models/destination.model")


module.exports.testApi = (req, res) => {
    res.json({ Status: "ok", message: 'message from backend' })
}


// get all //this return an array of objects
module.exports.allDest = (req, res) => {
    Destination.find()
        .then(allDest => res.json(allDest))
        .catch(err => res.status(400).json(err))
}

// get one //this return a object
module.exports.oneDest = (req, res) => {
    const paramsId = req.params.id
    Destination.findOne({ _id: paramsId })
        .then(dest => res.json(dest))
        .catch(err => res.status(400).json(err))
}

// create
module.exports.addDest = (req, res) => {
    const newDest = req.body
    Destination.create(newDest)
        .then(dest => res.json(dest))
        .catch(err => res.status(400).json(err))
}

// update -- getOne + create
module.exports.updateDest = (req, res) => {
    const paramsId = req.params.id
    const updatedDest = req.body
    Destination.findOneAndUpdate(
        {_id: paramsId}, // criteria
        updatedDest, // update info
        {new: true, runValidators: true}
        // new : true --> return the updated object 
        // runValidation --> to run validations
    )
        .then(updatedDest => res.json(updatedDest))
        .catch(err => res.status(400).json(err))
 

}

// delete
module.exports.deleteDest = (req, res) => {
    Destination.findOneAndDelete({_id: req.params.id})
        .then(deletedDest=> res.json(deletedDest))
        .catch(err => res.status(400).json(err))
}