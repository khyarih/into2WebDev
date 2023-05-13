var express = require('express') // import express
var cors = require('cors') // import cors

var app = express() // create express app

app.use(
    cors({
        origin: 'http://127.0.0.1:5500'
    })
) // use cors middleware

app.get('/', function (req, res) { 

    res.send('Hello World')

})

app.get('/projects', function (req, res) { 
    //read the json file data/projects.json
    var projects = require('./data/projects.json')
    //send projects as response
    res.send(projects)


})

//port
var port = 3000

app.listen(port, function () { 
    console.log('app running at port: ' + port)
})
