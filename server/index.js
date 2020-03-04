const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')

app.use(express.static(path.join(__dirname, '..', 'build')))

app.get('/ping', (req, res) => {
    return res.send('Hello World')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

app.listen(process.env.PORT || 8080, () => {
    console.log("Server started in http://localhost:8080")
})