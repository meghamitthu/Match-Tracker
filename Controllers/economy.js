var overInput = require('../Models/overModel');

module.exports.economy = async function(req,res){
    try{
        let overCount = await overInput.aggregate(
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
        overCount = overCount[0].count;
        let bowlerRuns = await overInput.aggregate(
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
}