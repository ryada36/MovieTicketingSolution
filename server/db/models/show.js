const mongoose = require('mongoose');

var showSchema = new mongoose.Schema({
    movieId:[{
        type:mongoose.Schema.Types.ObjectId, ref:'Movie', required:true
    }],
    theaterId:[{
        type:mongoose.Schema.Types.ObjectId, ref:'Theater', required:true
    }],
    startTime: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    totalSeats: {
        type: Number,
        required: true
    },
    availableSeats: {
        type: Number
    }
});

var Show = mongoose.model('Show',showSchema);
module.exports = { Show }