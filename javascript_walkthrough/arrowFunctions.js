// Arrow function and this binding

var multiply = (x, y) => x * y;
// console.log(multiply(2, 4));

/******************************** */

// this binding (arrow function do not have their own binding, they will lookup for outer function for binding)

function Person(name) {
  this.name = name;
  setTimeout(function () {
    console.log(this.name); // undefined becuase the normal function will have its own binding for this (from where its being called)
  }, 1000);
}

var p = new Person("Nitin");

function ArrowPerson(name) {
  this.name = name;
  setTimeout(
    () => console.log(this.name), // name will be printed, becuase arrow function will lookup this in outer function
    1000
  );
}

var p = new ArrowPerson("Rajan");
