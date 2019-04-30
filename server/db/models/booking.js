const mongoose = require("mongoose");
const validator = require("validator");

var bookingSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email"
    }
  },
  phone: {
    type: Number,
    required: true
  },
  showId: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  }
});

var Booking = mongoose.model("Booking", bookingSchema);
module.exports = { Booking };
