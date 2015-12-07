/*
 * @file promises.js
 * @author Ryan Lee
 */

'use strict';
/*jshint node:true*/

var redisDriver = require('redis');
var redis = redisDriver.createClient();

redis.setex("expires", 1, "seconds", function (err) {
  redis.get("expires", function (err, val) {
    console.log(val);
  });

  setTimeout(function () {
    redis.get("expires", function (err, val) {
      console.log(val);
      redis.end();
    });
  }, 1500);
});
