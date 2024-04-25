const mongoose =  require('mongoose')

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: String,
        required: true
    },

    species: {
        type: String,
        required: true
    },

    id: {
        type: Number,
        required: false
    }

})

module.exports = mongoose.model('Dog', dogSchema)