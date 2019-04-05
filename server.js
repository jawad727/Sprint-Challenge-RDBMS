const express = require('express')
const helmet = require('helmet')

const ProjectTrackerDB = require('./routers/project-tracker-router')

const server = express();


server.use(helmet())
server.use(express.json())


server.get('/', (req, res) => {
   res.send(
       `<h1>working</h1>`
   )
})

//Routes

server.use('/api', ProjectTrackerDB)


module.exports = server;
