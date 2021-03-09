// Js classes
class Vehicle{
    constructor(numWheels, price){
        this.numWheels = numWheels;
        this.price = price;
    }
    getPrice(){ // es6 syntax
        return this.price;
    }
}

var v1 = new Vehicle(2, 4000);
console.log(v1.getPrice());

// class expressions
var Student = class {
    constructor(name, rollNo){
        this.name = name;
        this.rollNo = rollNo;
    }
}

// class inheritence
class Car extends Vehicle{
    constructor(price, numDoors){
        super(4, price); // parent class contructor (mandatory to call)
        this.numDoors = numDoors;
    }
}

var maruti = new Car(40000, 4);
console.log(maruti);