const express = require("express");
const bodyParser = require("body-parser");
// const multer = require('multer')
const { ObjectID } = require("mongodb");
const _ = require("lodash");

require("./config");

const { mongoose } = require("./db/mongoose");
const { User } = require("./db/models/user");
const { Movie } = require("./db/models/movie");
const { Theater } = require("./db/models/theaters");
const { Show } = require("./db/models/show");
const { Roles } = require("./db/models/roles");
const { authenticate } = require("./middleware/authenticate");
const { upload } = require("./mutiUpload");

const app = express();
const port = process.env.PORT || 3200;

app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/** ===================== User Authentication Routes ======================= */

app.get("/test", (req, res) => {
  res.send({ test: "ok" });
});

//POST /users
app.post("/auth/register", (req, res) => {
  var body = _.pick(req.body, ["email", "password", "name", "role"]);
  if (!body.role) {
    body.role = "User";
  } else {
    //validate role against master roles
    Roles.find({}).then(role => {
      if (!role.roles.includes(body.role)) return res.status(400).send(e);
    });
  }
  var user = new User(body);
  user
    .save()
    .then(user => {
      // need to set the role
      return user.generateAuthToken();
    })
    .then(token => {
      res.header("x-auth", token).send(user);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

//GET /auth/profile to get user profile
app.get("/auth/profile", authenticate, (req, res) => {
  res.send(req.user);
});

//POST /users/login
app.post("/auth/login", (req, res) => {
  var body = _.pick(req.body, ["email", "password"]);

  User.findByCredentials(body.email, body.password)
    .then(user => {
      return user.generateAuthToken().then(token => {
        console.log(token);
        res.header("authorization", "Bearer " + token).send(user);
      });
    })
    .catch(e => {
      console.log(e);
      res.status(401).send(e);
    });
});

//DELETE /users/me/token
app.delete("/auth/me/token", authenticate, (req, res) => {
  req.user
    .removeToken(req.token)
    .then(() => {
      res.send();
    })
    .catch(e => {
      res.status(401).send();
    });
});

/** ===========================movie routes ====================== */

// show all the movies released in last weak and movies releasing in next weak
app.get("/movies", (req, res) => {
  let date = Date.now();
  let sevenDaysAfter = new Date(date + 7 * 24 * 60 * 60 * 1000);
  console.log("7 days after ", sevenDaysAfter.toDateString());
  let sevenDaysBefore = new Date(date - 7 * 24 * 60 * 60 * 1000);
  Movie.find({
    $and: [
      { releaseDate: { $lte: sevenDaysAfter } },
      { releaseDate: { $gte: sevenDaysBefore } }
    ]
  })
    .then(movies => {
      res.send({ movies });
    })
    .catch(e => res.status(500).send(e));
});

// post a movie to your website , would be curatd by admin
app.post("/movies", authenticate, (req, res) => {
  upload(req, res, function(err) {
    if (req.fileValidationError) {
      // res.status(500).send(err);
      return res.end(req.fileValidationError);
    }
    console.log(req.file);
    let body = _.pick(req.body, [
      "name",
      "description",
      "duration",
      "releaseDate"
    ]);
    body.image = "/" + req.file.filename;

    // need to save the movie in the database
    let movie = new Movie(body);
    movie
      .save()
      .then(movie => {
        res.send(movie);
      })
      .catch(e => res.status(400).send(e));
  });
});

/** ===========================theater routes ====================== */

//show theaters based on the movie
app.get("/theaters/:movieName", (req, res) => {
  let movieName = req.params.movieName;
  Movie.find({ name: movieName })
    .then(movies => {
      return new Promise((resolve, reject) => {
        if (!movies && !movies.length) reject(null);
        else resolve(movies[0]);
      });
    })
    .then(movie => {
      Show.find({ movieId: new ObjectID(movie._id) })
        .then(shows => {
          return new Promise((resolve, reject) => {
            console.log("shows found ", shows);
            if (!shows && !shows.length) reject(null);
            else resolve(shows[0]);
          });
        })
        .then(show => {
          Theater.findById(show.theaterId)
            .then(theater => {
              if (!theater) return res.status(404).end();
              res.send(theater);
            })
            .catch(e => res.status(500).send(e));
        })
        .catch(e => res.status(500).send(e));
    })
    .catch(e => res.status(500).send(e));
});

// POST to a theater aka adding new theater curated by theater owner
app.post("/theaters", authenticate, (req, res) => {
  var userId = req.user._id;
  var body = _.pick(req.body, ["name", "location"]);
  console.log("Registering a new theater", req.body);
  body.owner = new ObjectID(userId);

  var theater = new Theater(body);
  theater
    .save()
    .then(theater => {
      res.send(theater);
    })
    .catch(err => res.status(500).send(err));
});

/** ===========================Show routes ====================== */

//get shows of a particular movie
app.get("/shows/:movieId/:date", (req, res) => {
  var movieId = req.params.movieId;
  var date = req.params.date;
  // date need to be in yyyy-MM-dd format
  var selectedDate = new Date(date);

  // TODO :  need to limit the shows to currently selected date
  Show.find({ movieId: new Object(movieId) })
    .then(shows => {
      res.send(shows);
    })
    .catch(err => res.status(500).send());
});

// POST adding shows for movie and theater
app.post("/shows", authenticate, (req, res) => {
  var movieId = req.body.movieId;
  var theaterId = req.body.theaterId;
  var startTime = req.body.startTime;

  var body = _.pick(req.body, ["price", "totalSeats"]);
  body.movieId = new Object(movieId);
  body.theaterId = new Object(theaterId);
  body.startTime = new Date(startTime);

  body.availableSeats = body.totalSeats;

  var show = new Show(body);
  show
    .save()
    .then(show => {
      res.send(show);
    })
    .catch(err => res.status(400).send(err));
});

app.listen(port, () => {
  console.log("API server running at ", port);
});
