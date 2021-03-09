// How scoping works in nested function
var globalVal = 20;

function outer(){
    var outerVal = 10;
    function inner(){
        var innerVal = 40;
        console.log(outerVal);
        // console.log(globalVal);
    }
    inner();
    // console.log(innerVal);
}

// outer.inner() // gives error, cannot access the inner

outer();

//****************************************/

// Inner variable cannot be access from outer function

function outer2(){
    function inner(){
        var innerVar = 10;
    }
    console.log(innerVar); // gives error
}

// outer2();

//**************************************/

// name variable in different execution context is created
var name = "global";

function outer3(){
    var name = "outer";
    function inner(){
        var name = "inner";
        console.log(name);
    }
    inner();
    console.log(name);
}

outer3();
console.log(name);

//*************************************** */
// same variable altered
var combinedString = "";
function a() {
    var combinedString = "Inside a";

    function b() {
        var combinedString = combinedString + " Inside b";
        console.log(combinedString)
    }

    b();
}

a();
console.log(combinedString); // global variable modified