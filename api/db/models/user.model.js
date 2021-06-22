const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 3,
    },
    password: {
        type: String, // should probably encrypt this somehow ;)
        required: true,
        minlength: 3,
    }
})

const User = mongoose.model('User', UserSchema);

module.exports= {User}