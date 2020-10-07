const express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
const bodyparser=require("body-parser")
const router = require('./routes/over_controller')
const app=express()
app.use(bodyParser.json())
app.use(morgan('dev'))
mongoose.connect('mongodb://localhost:27017/assignment')
mongoose.connection.once('open',function(){
    console.log("DB Connection Established")
})
app.listen(5000,function(){
    console.log("EXPRESS RUNNING ON PORT 5000")
})
app.use("/api/v1", router)
