const mongoose = require('mongoose');

const researchSchema = new mongoose.Schema({
    researchSubject : String,
    author : String,
    dateofpublish : Date,
    researchIntro: String,
    categories :String,
    user:[{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }]
},{timestamps: true})

const Research = mongoose.model("Research", researchSchema)
module.exports = Research