var mongoose = require ('mongoose');
const {Schema} = mongoose;
const Bowler= new Schema({
    name: String,
    Team: String,
    runs: Number,
})
mongoose.model('Bowl', Bowler);
module.exports = mongoose.model('Bowl');
// module.exports= mongoose;