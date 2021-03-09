// Please read about event loop for indepth understanding 
// https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5


// event loop will wait for the call stack to be empty before pushing the callback in call stack
console.log('first');
setTimeout(function cb1(){
    console.log('second');
}, 0);
console.log('third');