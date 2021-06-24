const mongoose = require('mongoose');

const ContenderSchema = new mongoose.Schema({
    plaatsnaam:{
        type: String,
        required: true
    },
    fotos:{
        type: Array,
        required: true
    }
})

const Contender = mongoose.model('Contender', ContenderSchema);

module.exports = { Contender }