const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require("mongoose")
require('dotenv').config()
const app = express()
const apiPort = process.env.PORT
const localIp = require('local-ip');

const serverLocalIp = localIp();
console.log(serverLocalIp);

mongoose.connect(process.env.MONGO_CONNECTION_STRING )
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to database"))

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('../client/build'));


const walkersRouter = require('./routes/walkers-router')
app.use('/walkers-routes', walkersRouter)

const dogsRouter = require('./routes/dogs-router')
app.use('/dogs-routes', dogsRouter)

// const dogs = [
//   {
//     name: 'Johnny',
//     species: 'Labrador',
//     age: 25
//   },
//   {
//     name: 'Good Boy',
//     species: 'Golden Retrevier',
//     age: 30
//   },
//   {
//       name: 'Bob',
//       species: 'German Shephers',
//       age: 50
//   }
// ];


app.get('/dogWalkers', (req, res) => {
    res.json(dogWalkers)

})

app.get('/dogs', (req, res) => {
  res.json(dogs)

})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// console.log(dogs)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))




//docker run -it -p 8080:8080 -v $(pwd):/app bs3928-api


  // 'dogWalkers': [
            // {
            //     name: 'John Doe',
            //     email: 'john@example.com',
            //     phoneNumber: '123-456-7890',
            //     age: 25
            // },
            // {
            //     name: 'Jane Smith',
            //     email: 'jane@example.com',
            //     phoneNumber: '987-654-3210',
            //     age: 30
            // }
        // ]