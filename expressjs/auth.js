const express = require('express');
const authRouter = express.Router();
const authcontroller = require('./authcontroler')
authRouter.get('/singup',authcontroller.getdata)
authRouter.post('/singup',authcontroller.singnup)
authRouter.delete('/singup',authcontroller.trash)
authRouter.post('/login', authcontroller.login)
module.exports.routing = authRouter