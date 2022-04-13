const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

const PORT = 3000

require('dotenv').config()


let db,
dbConnectionStr = process.env.SECRET_KEY,
dbName = 'todo'

// CONNECTING TO THE DATABASE

MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

    app.set('view engine', 'ejs')
    app.use(express.static('public'))
    app.use(express.json())


app.get('/', async (req, res) =>{
    res.render('view/index.ejs')
})






app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})