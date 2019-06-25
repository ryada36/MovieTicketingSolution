const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
DB_URL = process.env.MONGODB_URI;

console.log("Database url ", DB_URL);
mongoose.connect(DB_URL, { useNewUrlParser: true });
module.exports = { mongoose };
