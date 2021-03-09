'use strict!';

function a(callback){
    console.log('a');
    callback();
}

function b(){
    console.log('b')
}


function first(callback){
    setTimeout(()=>a(callback), 2000);
}

function second(){
    setTimeout(b, 1000);
}

first(second);

console.log('hey');