/*
 * @file pubsub.js
 * @author Ryan Lee
 */

'use strict';
/*jshint node:true*/

var redis = require("redis");
var subscriber = redis.createClient();
var publisher  = redis.createClient();

subscriber.subscribe("channel 1");
subscriber.subscribe("channel 2");
subscriber.on("message", function (channel, message) {
  console.log("message on %s: %s", channel, message);
});

publisher.publish("channel 1", "Hello Edinburgh.js");
publisher.publish("channel 2", "Hello Edinburgh.js");
