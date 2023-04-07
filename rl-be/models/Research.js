const mongoose = require('mongoose');

const researchSchema = new mongoose.Schema({
    researchSubject : {String,required: true},
    author : {String,required: true},
    dateofpublish : {Date,required: true},
    researchIntro: {String,required: true},
    categories :{String,required: true},
    user:[{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }]
},{timestamps: true})

module.exports = mongoose.model("Research", researchSchema)