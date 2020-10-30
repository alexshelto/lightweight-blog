
const e = require('express')
const mysql = require('mysql')
const dbConfig = require('../config/db.config')

// creating a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
})

//open the MySQL connection
connection.connect(err => {
  if(err){
    console.log(`Error: ${err}\nCreating database`)
    let sql = 'CREATE TABLE posts (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, date Date() NOT NULL'
    connection.query(sql, (err, result) => {
      if(err) throw err;
      console.log('table created')
    })
  }
  else {
    console.log("Sucsessfully connected to the database!")
  }
})

