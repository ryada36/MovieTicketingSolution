const { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');
require('./../../config');
const userOneId = new ObjectID();
const theaterId = new ObjectID();
const movieId = new ObjectID();
const showId = new ObjectID();

const user = {
    _id: userOneId,
    email: 'clark@test.com',
    role: 'TheaterUser',
    name: 'Clark Kent',
    tokens: [
        {
            access: 'auth',
            token: jwt.sign({_id:userOneId, access: 'auth'}, process.env.SECRET)
        }
    ]
} 

const roles = {
    _id: new ObjectID(),
    roles: ["User","TheaterUser","Admin"]
}

const theater = {
    _id: theaterId,
    name:"Great India Place(GIP)",
    location: "Sector 18 Noida",
    owner: userOneId
}

const movie = {
    _id: movieId,
    name: "Kesari",
    description: "Set in the 19th century, Kesari recounts the story of Havildar Ishar SIngh who played a key role in the 1897 Battle of Saragarhi, in which an army of 21 Sikhs fought against a legion of Afghans in what is considered as one of the greatest last-stands in military history.",
    duration: "2hr, 30min",
    image: "/assets/poster.png",
    releaseDate: new Date("2019-04-10")
}

const show = {
    _id : showId,
    movieId : movieId,
    theaterId : theaterId,
    startTime : new Date("2019-04-10T14:30:00+05:30"),
    price : 200,
    totalSeats : 100
}


module.exports = { user,roles, theater, movie, show }