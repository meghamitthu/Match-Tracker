const express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var overInput = require('../Models/overModel');
var bowler = require('../Models/bowlermodel');
const overModel = require('../Models/overModel');
// var economy = require('../Models/overmodel');
router.post('/overModel/update',async function(req,res){
    try{
    let again = await overInput.updateOne({
        "over_number":req.body.over_number},
        {$push:{des:
            {"ball":req.body.ball,"ball_type":req.body.ball_type},
        }    
        }); 
    res.send(again)
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})
router.post('/overModel/input',async function(req,res){
  try{
    let _nextOver = new overInput({
        "team" : req.body.team,
        "over_number" : req.body.over_number,
        "bowler": req.body.id,
        "total_runs": req.body.total_runs,
    })
    let data = await _nextOver.save()
    res.send(data)
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})
router.post('/bowlerModel/bowler',async function(req,res){
    try{
    let bowlerInput = new bowler({
        "name": req.body.name,
        "Team": req.body.Team,
        "runs": req.body.runs
    })
    let data = await bowlerInput.save()
    res.send(data)
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})
router.get("/overModel/showOver",async function(req,res){
    try{
        let data = await overInput.find().populate("bowler")
        res.send(data)
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})
router.get("/bowlerModel/showBowler",async function(req,res){
    try{
        let data = await bowler.find()
        res.send(data)
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})
router.get("/overModel/economy",async function(req,res){
    try{
        let overCount = await overModel.aggregate(
            [
                {
                    $match : {bowler: req.body.bowler},
                },
                {
                    $group : { _id : "$over_number"},
                },
                { $count : "over_number"},
            ]
        )
        // overCount = overCount[0].count;
        let bowlerRuns = await overModel.aggregate(
            [
                {
                    $match : {bowler: req.body.bowler},
                },
                {
                    $group : {_id :"$over_number",sum: {$sum: "$total_runs"},}
                },     
            ]
        )
        bowlerRuns = bowlerRuns[0].sum;
        let economy = (bowlerRuns)/(overCount)
        res.json(economy)
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
})
module.exports = router;