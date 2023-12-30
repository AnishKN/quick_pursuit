const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    username: String,
    email: String,
    password: String 
})

const userModel = mongoose.model('users',userScheme)
module.exports = userModel