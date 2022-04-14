const express = require('express')
const app = express()

const elementControl = require('./element/elementControl')
app.use('/elements',elementControl)

module.exports=app;