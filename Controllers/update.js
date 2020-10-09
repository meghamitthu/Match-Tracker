const overInput = require('../Models/overModel');

module.exports.update = async function(req,res){
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
}