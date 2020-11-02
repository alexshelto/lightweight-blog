

const express = require('express')
const app = express()
const path = require('path')
const connection = require('./models/db');

const port = 3000




app.use(express.static(__dirname + '/public')); //for style sheet?




//home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
