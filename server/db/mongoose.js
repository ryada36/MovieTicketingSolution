const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const REMOTE_MONGO = '';
if(process.env.PORT){
    DB_URL=REMOTE_MONGO
    console.log('rreeer ',process.env.PORT)
}
else{
    DB_URL=process.env.MONGODB_URI;
}

console.log('adasd',DB_URL);
mongoose.connect(DB_URL,{useNewUrlParser: true});
module.exports = { mongoose }