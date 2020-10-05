import mongoose from 'mongoose';
const {Schema} = mongoose;
const Each_over = new Schema({
    team: String,
    over_number :{type:Number,min:1,max:20},
    bowler: {type:Schema.Types.ObjectId, ref:'Bowler'},
    total_runs: Number,
    des:[
        {ball:Number,
        ball_type:String,enum:['b1','b2','b3','b4']}
        ],
})

const Bowler= new Schema({
    name: String,
    Team: String,
    runs: Number,
})