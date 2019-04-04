const mongoose = require('mongoose');
const validator = require('validator');

var theaterSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    owner: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
    ]
});

var Theater = mongoose.model('Theater',theaterSchema);
module.exports = {Theater}