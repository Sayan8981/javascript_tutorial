'use strict';


// How 'this' keyword works.

function test(){
    // this.name = 'Ranjan';
    console.log(this); // depends on where this function is being called
}

test();


// calling via object
var obj = {
    'prop1': 12,
    'print': function(){
        this.prop1 = 20;
        console.log(this);
    }
}
// obj.print(); // this inside print property is refering to current object i.e. obj

// binding this value (using call)
test.call(obj);
