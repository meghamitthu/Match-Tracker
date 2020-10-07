var mongoose = require ('mongoose');
const {Schema} = mongoose;
const Each_over = new Schema({
    team: String,
    over_number :{type:Number,min:1,max:20},
    bowler: {type:Schema.Types.ObjectId, ref:'bowler'},
    total_runs: Number,
    des:[
        {ball: Number,
        ball_type: String}
        ],
})
mongoose.model('Over', Each_over);
module.exports = mongoose.model('Over');
// module.exports= mongoose;