var bowler = require('../Models/bowlermodel');

module.exports.newBowler = async function(req,res){
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
}