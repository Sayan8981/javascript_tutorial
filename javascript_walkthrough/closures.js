// inner function preserved the variables of its outer function even if outer function is deleted
// closure = function + its lexical environment (inner function preserve the scope chain of outer function)
var i = 10;

function outer(){
    var j = 20;
    console.log(i, j);
    var inner = function () {
        var k = 30;
        console.log(j, k);
    }
    return inner;
}

// execution stack [global, outer]
var inner = outer();
//execution stack [global, inner]
inner();

//******************************* */

var i = 10;

function outer2(){
    var j = 20;
    // console.log(i, j);
    var inner = function () {
        var k = 30;
        console.log(i, j, k);
        k++;
        j++;
        i++;
    }
    return inner;
}

// execution stack [global, outer]
var inner1 = outer2();
//execution stack [global, inner]

// making multiple call to inner function will create new execution context every time,
// hence new inner variable will be created each time, but outer variable will change
inner1();
inner1(); // both call to inner function shares the same variable j  

//
var inner2 = outer2();
inner2();
inner2 = outer2(); // seperate execution context is created for outer again
inner2(); // both call to inner2 function does not share the same variable j

