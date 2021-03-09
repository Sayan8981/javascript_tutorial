// How to set the this of inner function to its outer function (this of innner == this of outer)

//There's a difference between enclosure variables and "this". "this" is actually defined by the invoker of the function
function myFirstObject(){
    var _this = this;
    this.name = "myFirstObject";
    this.getName = function(){ 
        // this.name = "Nitin"
       console.log("_this.name = " + _this.name + " this.name = " + this.name);   
    }

    /* arrow function will not have its own binding for this, so this will be same as this of myFirstObject() function */

    // this.getName = () => {
    //     // this.name = "Nitin"
    //    console.log("_this.name = " + _this.name + " this.name = " + this.name);   
    // }
}

function mySecondObject(){
    var _this = this;
    this.name = "mySecondObject";
    var firstObject = new myFirstObject();
    this.getName = firstObject.getName
}

var secondObject = new mySecondObject();


// secondObject.getName(); // calling the inner method from secondObject

// new secondObject.getName(); // constructor mode, and 'this' binding of inner function 
secondObject.getName.call(myFirstObject); // binding 'this' of innerFunction to myFirstObject
