const mongoose = require("mongoose");

var notificationSubscriberSchema = new mongoose.Schema({
  subscriber: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
});

var NotificationSubscriber = mongoose.model(
  "NotificationSubscriber",
  notificationSubscriberSchema
);
module.exports = { NotificationSubscriber };
