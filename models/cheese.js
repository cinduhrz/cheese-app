// IMPORT DEPENDENCIES
const mongoose = require("./connection") // import db connection
const { Schema, model } = mongoose

// Create Schema
const CheeseSchema = new Schema({
    name: String,
    countryOfOrigin: String,
    image: String
})

// Create model
const Cheese = model("Cheese", CheeseSchema)

// EXPORT MODEL
module.exports = Cheese