// IMPORT DEPENDENCIES
require("dotenv").config()
const { DATABASE_URL } = process.env
const mongoose = require("mongoose")

// DATABASE CONNECTION

// Establish Connection
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

// Connection Events
mongoose.connection
    .on("open", () => console.log("Connected to Mongoose"))
    .on("close", () => console.log("Disconnected from Mongoose"))
    .on("error", (error) => console.log(error))


// EXPORT CONNECTION
module.exports = mongoose