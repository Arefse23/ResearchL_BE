const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : {String,required: true},
    lastName : {String,required: true},
    emailAddress : {String,required: true},
    password : {String,required: true},
    Research:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Research"
    }]
}, {timestamps: true});

// verifyPassword
userSchema.methods.verifyPassword = function(password){
    console.log(password);
    console.log(this.password);
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('Users', userSchema)