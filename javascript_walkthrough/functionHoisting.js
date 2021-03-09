//How function and variable hoisting works

// 1. Throws error
function hoistDemo(){
    console.log(i);
}

// hoistDemo();

//****************************/
// 1. Does not throw error, due to variable hoisting (declaration moved up by javaScript interpreter)
function hoistDemo(){
    console.log(i); //undefined
    var i = 10;
}

hoistDemo();

//****************************/

console.log(j);

// const j = 10;
// let j = 10;
var j = 10;


//**************************/
//function hoisting

hoistDemo2();

function hoistDemo2(){
    console.log(i);
    var i = 10;
}

//********************************************** */
// function declaration vs function expression (hoisting)

console.log(fact(5)); // works fine because function get hoisted
// console.log(factorial(4)); // gives error, because factorial variable is hoisted, which is null

// function declaration
function fact(n){ 
    var ans = 1;
    for(var i = 1; i <= n; i++){
        ans *= i;
    }
    return ans;
}


// function expression
var factorial = function (n){
    var ans = 1;
    for(var i = 1; i <= n; i++){
        ans *= i;
    }
    return ans;
}