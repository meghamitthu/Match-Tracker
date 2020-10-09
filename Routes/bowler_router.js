const express = require('express');
var bowler_router = express.Router();

const nextbowler = require('../Controllers/newBowler');
bowler_router.post('/bowler/next',nextbowler.newBowler);

const bowler = require('../Controllers/showBowler');
bowler_router.get('/bowler/show',bowler.showBowler);

module.exports = bowler_router;