// asynchronous function callback and callback hell problem

// Define three functions
function a() {
  console.log(1);
}

function b(callback) {
  setTimeout(() => {
    console.log(2);
    callback();
    // Execute the callback function
    // callback();
  }, 50);
}

function c() {
  console.log(3);
}

// a();
// b(c);
//******************************************************************* */
// Define three functions
function third() {
  console.log(3);
}

function second(callback) {
  setTimeout(() => {
    console.log(2);
    // Execute the callback function
    callback();
  }, 0);
}

function first(callback) {
  var inner = function (secondCallback) {
    setTimeout(() => {
      console.log(1);
      callback(secondCallback);
    }, 20);
  };
  return inner;
}

// function first(callback1, callback2){
//     setTimeout(() => {
//         console.log(1);
//         callback1(callback2);
//     }, 20);
// }
// first(second)(third)(fourth);

// first(second, third);
// second(third);

function pyramidOfDoom() {
  setTimeout(() => {
    console.log(1);
    setTimeout(() => {
      console.log(2);
      setTimeout(() => {
        console.log(3);
      }, 500);
    }, 2000);
  }, 1000);
}

pyramidOfDoom();