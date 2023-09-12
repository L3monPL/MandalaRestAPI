const express = require('express');

const controllerUser = express.Router();

const getUsersList = require('./routes/getUsersList')
const getUser = require('./routes/getUserAuth')

const postLoginUser = require('./routes/postLoginUser')




controllerUser.use('/', getUsersList)
controllerUser.use('/', getUser)

controllerUser.use('/', postLoginUser)


module.exports = controllerUser;