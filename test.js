// const myLoggers = require('log4js');

// myLoggers.configure({
//     appenders: { mylogger: { type:"file", filename: "log.txt" } },
//     categories: { default: { appenders:["mylogger"], level:"ALL" } }
// });
// const logger = myLoggers.getLogger("default");
var sprintf = require("sprintf-js").sprintf

let current_date = new Date().toUTCString()
debugger;
// create logs 
var util = require('util');
var fs = require('fs');
var log_file=sprintf('./log/log_%s.txt',[current_date]);

// Use the 'a' flag to append to the file instead of overwrite it.
var ws = fs.createWriteStream(log_file, {flags: 'w'});

// Monkey patch the console.log function to write to our through
// stream instead of stdout like default.
console.log = function () {
  var text = util.format.apply(this, arguments) + '\n';
  ws.write(text);
  process.stdout.write(text);
};
//end 

function myfunc(){
    var x, y, z;       // How to declare variables
    x = 5; y = 6;      // How to assign values
    debugger;
    z = x + y; 
    return z
}

var result = myfunc();
console.log("myfunc function result: "+result.toString());

console.log("Date:"+ current_date);
console.log("\n");

class math{
    constructor(){   //#using constructor
        this.num1=5;
        this.num2=65;
        this.num3=45;
    }
    addition(){
        return this.num1+this.num2;
    }
    substarction(){
        return this.num2-this.num3
    }
    multiplication(){
        return this.num3*this.num2*this.num1
    }
    division(){
        return this.num3/this.num1
    }
}

object_= new math();

console.log("result addition: "+ object_.addition().toString());
console.log("result substarction: "+ object_.substarction().toString());
console.log("result multiplication: "+ object_.multiplication().toString());
console.log("result division: "+ object_.division().toString());

console.log("\n");

console.log("Date:"+ current_date);
console.log("\n");

class math_ops{  // using staic function
    init(){
        this.num1=5;
        this.num2=65;
        this.num3=45;
    }
    addition(){
        return this.num1+this.num2;
    }
    substarction(){
        return this.num2-this.num3;
    }
    multiplication(){
        return this.num3*this.num2*this.num1;
    }
    division(){
        return this.num3/this.num1;
    }
}

object_= new math_ops();
object_.init();
console.log("result addition: "+ object_.addition().toString());
console.log("result substarction: "+ object_.substarction().toString());
console.log("result multiplication: "+ object_.multiplication().toString());
console.log("result division: "+ object_.division().toString());

console.log("\n");

var mysql = require('mysql');
class mysql_connection{

    connection_details(){
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root@123",
            database: "branch_service"
        });

        con.connect(function(err){
        if (err) throw err;
        con.query("SELECT * FROM starz_programs", function (err, result, fields) {
            if (err) throw err;
            var i;
            for (i=0; i<result.length; i++){
                console.log("\n");
                console.log(JSON.stringify(result[i]));
            }
            con.end();
          });
        });   
    }
}

new mysql_connection().connection_details()

class mongodb_connection{

    connection_details(){
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/";

        MongoClient.connect(url, function(err, db){
            if (err) throw err;
            var database = db.db("qadb");
            database.collection("starz").find({}).limit(1000).toArray(function(err,result){
            if (err) throw err;
            console.log(JSON.stringify(result));
            db.close(); 
            });       
       });
    }
}

new mongodb_connection ().connection_details()

//Pass variables to string :

class module1{
    constructor(str1,str2,str3){
        this.string1=str1;
        this.string2=str2;
        this.string3=str3;    
    }

    pass_parameter(){
        debugger;
        console.log("this is my name %s " , this.string1);
        console.log("staying at %s " , this.string2);
        console.log("favourite place %d : %s " , 1,this.string3);
    }
}

new module1("Saayan","Kolkata","London").pass_parameter()