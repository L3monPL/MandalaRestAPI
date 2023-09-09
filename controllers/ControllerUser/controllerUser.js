const express = require('express');

const controllerUser = express.Router();

const getUsersList = require('./routes/getUsersList')



controllerUser.use('/', getUsersList)


module.exports = controllerUser;