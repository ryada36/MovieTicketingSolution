const mongoose = require('mongoose');
const validator = require('validator');


var rolesSchema = new mongoose.Schema({
    roles: {
        type: [ String ],
        requied: true
    }
})

var Roles = mongoose.model('Roles',rolesSchema);
module.exports = { Roles }