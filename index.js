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
    
}

else {
    fs.appendFileSync('goatnotes.txt', timeStamp() + ' ' + entry + '\n\n');
}
console.log('Entry added');


function timeStamp() {
    var now = new Date();
    return now.toISOString().replace(/T/, ' ').replace(/\..+/, '').slice(0, -3);
  }
