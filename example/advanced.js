/*
 * @file advanced.js
 * @author Ryan Lee
 */

'use strict';
/*jshint node:true*/


var queue = require('bull');
var Promise = require('bluebird');

//Fake request
var sendEmail = function (job) {
  console.log('Sending email %s', job.data.emailId);
  return Promise.delay(500).then(function () {
    Promise.resolve(true);
  });
};

//this is our worker queue
var q = queue('advanced');

q.process(function (job) {
  return sendEmail(job);
});

q.on('completed', function (job) {
  console.log('Job(%s) completed: Email %s sent', job.jobId, job.data.emailId);
  job.remove();
});

console.log('Email worker on-line');
