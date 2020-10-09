const overInput = require('../Models/overModel');

module.exports.showOver = async function(req,res){
    try{
        let data = await overInput.find().populate("Bowl")
        res.send(data)
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}
