const express = require('express')
const app = express()

app.post('*', (req, res) => {
    res.write(req.body.username)
    res.end()
})

module.exports = app
