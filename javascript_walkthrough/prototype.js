// Prototype and its usage
function Vehicle(numWheels, price){
    this.numWheels = numWheels;
    this.price = price;
    /*this.getPrice = function(){
        return this.price;
    }*/
}

var v1 = new Vehicle(2, 5000);
var v2 = new Vehicle(4, 40000);

Vehicle.prototype.getPrice = function(){
    return this.price; // this refers to calle object 
}
console.log(v1.getPrice());
console.log(Vehicle.prototype);

// adding memebers to object and prototype (adding members at run time)
v1.color = "white"; // this only adds color property to v1 object
Vehicle.prototype.color = "black"; // this adds property to all the vehicle objects

console.log(v2.color, v1.color); // member resolution order: object > prototype 

// getting prototype from object
console.log(Object.getPrototypeOf(v1) === Vehicle.prototype);