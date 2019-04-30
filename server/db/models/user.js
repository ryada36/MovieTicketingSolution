const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

var userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "{VALUE} is not a valid email"
      }
    },
    password: {
      type: String,
      require: true,
      minlength: 6
    },
    name: {
      type: String,
      trim: true,
      required: true
    },
    phoneNumber: {
      type: Number
    },
    tokens: [
      {
        access: {
          type: String,
          required: true
        },
        token: {
          type: String,
          required: true
        }
      }
    ],
    role: {
      type: String,
      required: true
    }
  },
  {
    usePushEach: true
  }
);

userSchema.methods.generateAuthToken = function() {
  var user = this;
  var access = "auth";
  var token = jwt
    .sign({ _id: user._id.toHexString(), access }, process.env.SECRET)
    .toString();
  user.tokens.splice(0, user.tokens.length);
  user.tokens.push({ access, token });

  // console.log("\n");
  // console.log("Token", user.tokens);
  // console.log("\n");
  return user.save().then(() => {
    return token;
  });
};

userSchema.methods.removeToken = function(token) {
  var user = this;
  return user.update({
    $pull: {
      tokens: { token }
    }
  });
};

userSchema.statics.findByToken = function(token) {
  var User = this;
  var decoded;
  try {
    decoded = jwt.verify(token, process.env.SECRET);
  } catch (e) {
    return Promise.reject();
  }
  return User.findOne({
    _id: decoded._id,
    "tokens.token": token,
    "tokens.access": "auth"
  });
};

userSchema.statics.findByCredentials = function(email, password) {
  var User = this;
  return User.findOne({ email }).then(user => {
    if (!user) return Promise.reject();

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (err) return reject();
        if (!res) return reject();

        resolve(user);
      });
    });
  });
};

userSchema.statics.findByEmailId = function(email) {
  var User = this;
  return User.findOne({ email })
    .then(user => {
      if (!user) return Promise.reject();

      return Promise.resolve(user);
    })
    .catch(err => {
      console.error(err);
    });
};

userSchema.pre("save", function(next) {
  var user = this;

  if (user.isModified("password")) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

var User = mongoose.model("User", userSchema);
module.exports = { User };
