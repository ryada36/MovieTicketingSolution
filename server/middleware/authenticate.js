var { User } = require('./../db/models/user');

var authenticate = function(req, res, next){
    var token = req.headers['authorization'];
    token = token ? token.split(' ')[1] : '';
    console.log('Auth token ', token);
    User.findByToken(token).then((user) =>{
        if(!user)
            return Promise.reject();

        req.user=user;
        req.token=token;
        next();
    }).catch(e => res.status(401).send(e))
}

module.exports = { authenticate }