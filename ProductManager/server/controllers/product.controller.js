// option 1: exporting the whole file
const Destination = require("../models/product.model")

// option 2: exporting the whole file as an object, with key/value pair
// const {Destination} = require("./../models/destination.model")


module.exports.testApi = (req, res) => {
    res.json({ Status: "ok", message: 'message from backend' })
}


// get all //this return an array of objects
module.exports.allProd = (req, res) => {
    Destination.find()
        .then(allProd => res.json(allProd))
        .catch(err => res.status(400).json(err))
}

// get one //this return a object
module.exports.oneProd = (req, res) => {
    const paramsId = req.params.id
    Destination.findOne({ _id: paramsId })
        .then(prod => res.json(prod))
        .catch(err => res.status(400).json(err))
}

// create
module.exports.addProd = (req, res) => {
    const newProd = req.body
    Destination.create(newProd)
        .then(prod => res.json(prod))
        .catch(err => res.status(400).json(err)) //this will return status 400 you can see more statuses and meanings
}

// update -- getOne + create
module.exports.updateProd = (req, res) => {
    const paramsId = req.params.id
    const updatedProd = req.body
    Destination.findOneAndUpdate(
        {_id: paramsId}, // criteria
        updatedProd, // update info
        {new: true, runValidators: true}
        // new : true --> return the updated object 
        // runValidation --> to run validations
    )
        .then(updatedProd => res.json(updatedProd))
        .catch(err => res.status(400).json(err))
 

}

// delete
module.exports.deleteProd = (req, res) => {
    Destination.findOneAndDelete({_id: req.params.id})
        .then(deletedProd=> res.json(deletedProd))
        .catch(err => res.status(400).json(err))
}