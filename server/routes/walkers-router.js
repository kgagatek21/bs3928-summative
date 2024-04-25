const express = require("express")
const router = express.Router()
const Walker = require('../models/walker.js')

//Getting all
router.get('/', async (req, res) => {
    try{
        const walkers = await Walker.find()
        res.send(walkers)
    } catch (err) {
        res.status(500).json({ message: err.message + 'something'})
    }
})

//Creating One
router.post('/', async (req, res) => {
    const walker = new Walker({
        name: req.body.name,
        age: req.body.age,
        email:  req.body.email,
        phone: req.body.phone
    })
    try{
        const newWalker = await walker.save()
        res.status(201).json(newWalker)

    } catch (err) {
        res.status(400).json({message: err.message})
    }
})



module.exports = router