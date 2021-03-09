// converting asynchronous readFile and writeFile function to promises
var fs = require('fs');

var myFile = '/home/nitin/Documents/KT-Headrun/javaScript/temp.txt';

readFileAsync = function (filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8',(err, buffer) => {
            if (err) reject(err); else resolve(buffer);
        });
    });
};

writeFileAsync = function(filename, text){
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, text, (err, buffer) => {
            if (err) reject(err); else resolve('text appended!')
        });
    });
}

readFileAsync(myFile)
    .then(txt => writeFileAsync(myFile, txt + '\nnew text appended!!'))
        .then(msg => readFileAsync(myFile))
          .then(txt => console.log(txt))
            .catch(err => console.log('error', err));