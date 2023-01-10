const express = require('express')
const index = express()
const parser = require('body-parser')
const singnups = require('./auth')
const app = require('./app')
const connect = require('./db')
index.use(parser.json())

index.use("/studentportal", app)
index.use("/auth", singnups.routing)

connect.mongoose()
    .then(() => {
        index.listen(8117)
    }).catch((err) => {
        console.log("mongo db not connected")
    })
