const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    emailAddress : String,
    password : String,
    Research:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "research"
    }]
}, {timestamps: true});

// verifyPassword
userSchema.methods.verifyPassword = function(password){
    console.log(password);
    console.log(this.password);
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model('User', userSchema);
module.exports =  User;