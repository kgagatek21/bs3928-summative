const express = require("express")
const router = express.Router()
const Dog = require('../models/dog.js')

//Getting all
router.get('/', async (req, res) => {
    try{
        const dogs = await Dog.find()
        res.send(dogs)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

//Creating One
router.post('/', async (req, res) => {
    const dog = new Dog({
        name: req.body.name,
        age: req.body.age,
        species:  req.body.species,
        id: req.body.id
    })
    try{
        const newDog = await dog.save()
        res.status(201).json(newDog)

    } catch (err) {
        res.status(400).json({message: err.message})
    }
})



module.exports = router