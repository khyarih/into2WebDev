var express = require('express');
var cors = require('cors');
var app = express();
const port = 3000

// Add CORS middleware
app.use(
    cors({
        origin: 'http://127.0.0.1:5500'
    })
);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/projects', (req, res) => {
    //read file
    const fs = require('fs')
    const data = fs.readFileSync('data/projects.json', 'utf8')
    //parse file
    const projects = JSON.parse(data)
    //send response
    res.send(projects)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })