var fs = require('fs')

var raw = fs.readFileSync('./dict.txt').toString();
var formatted = raw.toLocaleLowerCase();

fs.writeFileSync('./dict2.txt', formatted)