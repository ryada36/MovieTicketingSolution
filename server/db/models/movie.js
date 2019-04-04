const mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration:{
        type: String
    },
    image:{
        type:String,
        required: true
    },
    releaseDate:{
        type: Date, //date should be in ISO format YYYY-MM-DD
        required: true
    }
});

var Movie = mongoose.model('Movie',movieSchema);
module.exports = { Movie }
