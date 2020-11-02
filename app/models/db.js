
const mysql = require('mysql')
const dbConfig = require('../config/db.config')

// creating a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  insecureAuth : true
})

//open the MySQL connection
connection.connect(err => {
  if(err){
    console.log(err)
    
  }
  else {
    console.log("Sucsessfully connected to the database!")
  }
})

module.exports = connection;