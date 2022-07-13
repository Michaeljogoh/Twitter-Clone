const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types
const TweetSchema = new mongoose.Schema({
    
    content:{
        type: String,
        required: true,
    },
    likes:[
        {
        type:ObjectId, 
        ref:"Users"
        }
        ],
    postBy:{
        type: ObjectId,
        ref:"Users"

    }
})

const Tweet = mongoose.model('Tweet', TweetSchema)
module.exports = Tweet;