// IMPORT DEPENDENCIES
require("dotenv").config() // load env variables
const { PORT, DATABASE_URL } = process.env // destructure variables
const express = require("express")
const mongoose = require("./models/connection") // connects to db
const cors = require("cors")
const morgan = require("morgan")


// CREATE EXPRESS APP OBJECT
const app = express()


// MIDDLEWARE
app.use(cors())
app.use(morgan("dev"))


// ROUTES
app.get("/", (req, res) => {
    res.send("Hello World")
})


// TURN ON SERVER
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})