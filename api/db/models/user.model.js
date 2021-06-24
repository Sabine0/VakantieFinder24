const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    voornaam:{
        type: String,
        required: true
    },
    achternaam:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minlength: 3,
        unique: true
    },
    wachtwoord: {
        type: String,
        required: true,
        minlength: 3,
    }
})

const User = mongoose.model('User', UserSchema);

module.exports= {User}