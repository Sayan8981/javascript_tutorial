// How async function works
// for more detail 
// Please read about event loop for indepth understanding 
// https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5

function first() {
    console.log('first');
}
function second() {
    console.log('second');
}
function third() {
    console.log('third');
}

first();
setTimeout(second, 1000); // Invoke `second` after 1000ms
third();

// setTimeout(third, 1000);