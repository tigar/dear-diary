#!/usr/bin/env node
console.log('Yes hi hello');

var program = require('commander');
var co = require('co');
var fs = require('fs');
var prompt = require('co-prompt');



program
 .option('-l, --ls [n]', 'list n entries', parseInt)
 .arguments('<entry>')
 .parse(process.argv);

var entry = program.args.join(' ');
if (program.ls) {
    console.log("ls is working")
}

else {
    fs.appendFileSync('mrbub.txt', timeStamp() + ' ' + entry + '\n\n');
}
console.log('Entry added');


function timeStamp() {
    var timestamp = new Date();
    var now = timestamp.getFullYear() + '-' + addZero((timestamp.getMonth() + 1)) + '-' + addZero(timestamp.getDate()) + ' ' + addZero(timestamp.getHours()) + ':' + addZero(timestamp.getMinutes());
    return now;
  }

function addZero(value) {
    value = value < 10 ? '0' + value : value;
    return value;
}
