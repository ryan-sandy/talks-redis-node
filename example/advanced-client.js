/*
 * @file advanced-client.js
 * @author Ryan Lee
 */

'use strict';
/*jshint node:true*/

var queue = require('bull');
var Promise = require('bluebird');
var q = queue('advanced');

var array = new Array(10); 

Promise.each(array, function (val, i) {
  return q.add({'emailId' : i});
}).then(function () {
  console.log('all emails queued');
  q.close();
});
