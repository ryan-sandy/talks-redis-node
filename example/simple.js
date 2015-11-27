/*
 * @file simple.js
 * @author Ryan Lee
 */

'use strict';
/*jshint node:true*/

var redisDriver = require('redis');
var redis = redisDriver.createClient();

//avoid callback hell using promises or async lib
redis.set("forever", "forever-value", function (err) {
  redis.get("forever", function (err, val) {
    console.log(val);
    redis.end();
  });
});
