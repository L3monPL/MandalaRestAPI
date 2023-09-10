const express = require('express');

const controllerUser = express.Router();

const getUsersList = require('./routes/getUsersList')
const postLoginUser = require('./routes/postLoginUser')



controllerUser.use('/', getUsersList)
controllerUser.use('/', postLoginUser)


module.exports = controllerUser;