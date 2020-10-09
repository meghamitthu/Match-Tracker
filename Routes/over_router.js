const express = require('express');
var over_router = express.Router();
// var bodyParser = require('body-parser');

const nextover = require('../Controllers/newOver');
over_router.post('/over/next',nextover.newOver);

const showover = require('../Controllers/showOver');
over_router.get('/over/show',showover.showOver);

const updateover = require('../Controllers/update');
over_router.put('/over/update',updateover.update);

const eco = require('../Controllers/economy');
over_router.get('/over/economy',eco.economy);

module.exports = over_router;