// calling function default and constructor mode
//Typical way of creating object using function

// create objects (literal)
var student1 = {
    "name": "Nitin",
    "rollNo":21,
    "marks": 99,
    "company": "headrun"
}

var student2 = {
    "name": "Ranjan",
    "rollNo": 15,
    "marks": 100,
    "company": "headrun" //duplicated for each entry
}

// functional way
function createStudent(name,rollNo, marks){
    var student = {};
    student.name = name;
    student.rollNo = rollNo;
    student.marks = marks;
    student.company = "headrun"
    return student;
}

var s1 = createStudent("nitin", 21, 99);
s1.age = 23;
console.log(s1);

// using constructor
function Student(name, rollNo, marks){
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
}

var s2 = new Student("Nitin", 16, 98); // new keyword creates object, which will bound to "this" (object)
console.log(s2);

//*************************************************/

//behaviour and methods 

function Vehicle(numWheels, price){
    this.numWheels = numWheels;
    this.price = price;
    this.getPrice = function(){
        return this.price;
    }
}

var v1 = new Vehicle(4, 5000);
console.log(v1) // function getPrice is a part of vehicle object, which is memory heavy
// prototype if the solution to this