const expect = require('expect');
const request=require('supertest');
const {ObjectID}=require('mongodb');

const {app}=require('./index');

/** import collections */
const { User } = require('./db/models/user');
const { Roles } = require('./db/models/roles'); 
const { Theater } = require('./db/models/theaters'); 
const { Movie } = require('./db/models/movie');
const { Show } = require('./db/models/show');  


var { user, roles, theater, movie, show } = require('./db/seed/seed');

console.log('what the hehll')

/** seeding users */
beforeEach((done)=>{
    User.remove({}).then(()=>{
        var userOne=new User(user).save();
        return Promise.all([userOne])
    }).then(()=>done()).catch((e)=>{done(e);})

});
/** seeding roles */
beforeEach((done)=>{
    Roles.remove({}).then(()=>{
        new Roles(roles).save()
    }).then(()=>done()).catch((e)=>{done(e);})
});

/** seeding Theater */
beforeEach((done)=>{
    Theater.remove({}).then(()=>{
        new Theater(theater).save()
    }).then(()=>done()).catch((e)=>{done(e);})
})

/** seeding Movie */
beforeEach((done)=>{
    Movie.remove({}).then(()=>{
        new Movie(movie).save()
    }).then(()=>done()).catch((e)=>{done(e);})
})

/** seeding Show */
beforeEach((done)=>{
    Show.remove({}).then(()=>{
        new Show(show).save()
    }).then(()=>done()).catch((e)=>{done(e);})
})


/** ============================ test suit starts here ========================== */

describe('dummy test suit',()=>{
    it('dummy test case',(done)=>{
        expect(1).toBe(1);
        done();
    })
})