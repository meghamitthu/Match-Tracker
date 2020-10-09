const overInput = require('../Models/overModel');

module.exports.newOver = async function(req,res){
    try{
      let _nextOver = new overInput({
          "team" : req.body.team,
          "over_number" : req.body.over_number,
          "bowler": req.body.bowler,
          "total_runs": req.body.total_runs,
      })
      let data = await _nextOver.save()
      res.send(data)
      }
      catch(error){
          console.log(error);
          res.status(500).send(error);
      }
  }