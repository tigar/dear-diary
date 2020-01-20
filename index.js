#!/usr/bin/env node

/*
- Add display grouping by days
*/

var program = require('commander');
var co = require('co');
var fs = require('fs');
var prompt = require('co-prompt');

const notesPath = './goatnotes.txt'

program
 .option('-l, --ls [n]', 'list n entries', parseInt)
 .arguments('<entry>')
 .parse(process.argv);

var entry = program.args.join(' ');
if (program.ls) {
    // var notes = fs.readFileSync(notesPath, 'utf8');
    var notes = getNotes();
    console.log(typeof notes);
    console.log(notes.length);
    console.log(notes);
    if (!isNaN(program.ls)) {
        var entries = [];
    }
    for (let k = 0; k <notes.length; k++)
        console.log(notes[k] + '\n');
        
} 
else {
    fs.appendFileSync('goatnotes.txt', timeStamp() + ' ' + entry + '\n');
    console.log('Entry added');
}



function timeStamp() {
    var now = new Date();
    return now.toISOString().replace(/T/, ' ').replace(/\..+/, '').slice(0, -3);
}

function getNotes() {
    var notes = fs.readFileSync(notesPath, 'utf8');
    var list_notes = notes.split(/\r\n|\n/);
    return list_notes;
}
