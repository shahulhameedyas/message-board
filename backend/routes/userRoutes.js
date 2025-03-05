const express = require("express")
const { getMsg, postMsg } = require("../controllers/userControllers")
const route = express.Router()

route.get('/msg',getMsg)
route.post('/msg',postMsg)

module.exports = route;