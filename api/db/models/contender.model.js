const mongoose = require('mongoose');

const ContenderSchema = new mongoose.Schema({
    plaatsnaam:{
        type: String,
        required: true
    },
    fotos:{
        type: Array,
        required: true
    },
    interesses:{
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Contender', ContenderSchema);
