const express = require('express')
const router = express.Router()
const { validate } = require('../controllers/auth')

router.post("/", validate)

module.exports = router