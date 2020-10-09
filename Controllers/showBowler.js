var bowler = require('../Models/bowlermodel');

module.exports.showBowler = async function(req,res){
    try{
        let data = await bowler.find()
        res.send(data)
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}