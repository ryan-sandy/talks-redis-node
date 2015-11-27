/*
 * @file advanced.js
 * @author Ryan Lee
 * @copyright 2015 ERAS/Educational Research and Services
 * Reproduction of this material strictly prohibited.
 */

'use strict';
/*jshint node:true*/


var queue = require('bull');
var Promise = require('bluebird');

//Fake request
var request = function () {
  return Promise.delay(500).then(function () {
    Promise.resolve(true);
  });
};

//this is our worker queue
var q = queue('advanced');

q.on('completed', function (job) {
  console.log('job with userId %s finished', job.data.userId);
  job.remove();
});

q.process(function (job, done) {
  request().then(function () {
    done();
  });
});

console.log('worker on-line');
