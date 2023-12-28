const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./users')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/quick_pursuit')

app.listen(4000, ()=>{
    console.log("Running")
})

app.post('/register', (req,res)=>{
    userModel.create(req.body)
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err))
})

app.post('/login', (req,res)=>{
    const {email,password} = req.body
    userModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.status(200).json("success")
            }
            else{
                res.status(500).json("wrong password")
            }
        }
        else{
            res.status(500).json("user doesnt exists!")
        }
    })
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err))
})