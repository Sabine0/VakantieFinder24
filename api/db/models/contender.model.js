const mongoose = require('mongoose');

const ContenderSchema = new mongoose.Schema({
    plaatsnaam:{
        type: Array,
        required: true
    }
})

const Contender = mongoose.model('Contender', UserSchema);

module.exports= { Contender }