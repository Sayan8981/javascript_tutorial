// how asynchronous programming works. 
// Please read about event loop for indepth understanding 
// https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5

function a(){
    setTimeout(()=> {
        console.log('inside a');
    }, 1000);
}

function b(){
    setTimeout(() => {
        console.log('inside b');
    }, 2000);
}

function c(){
    setTimeout(()=>{
        console.log('inside c');
    }, 3000);
}

var fs = require('fs');

var myFile = '/home/nitin/Documents/KT-Headrun/javaScript/temp.txt';
fs.readFile(myFile, 'utf8', function(err, txt) {
    if (err) return console.log(err);

    txt = txt + '\nAppended something!';
    fs.writeFile(myFile, txt, function(err) {
        if(err) return console.log(err);
        console.log('Appended text!');

        fs.readFile(myFile, 'utf8', function(err, txt) {
            if(err) return console.log(err)
            console.log('file content', txt);
        })
    });
});
