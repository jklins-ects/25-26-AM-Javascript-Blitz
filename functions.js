//functions - a reusable block of code:

function happyBirthday(name) {
    console.log("Happy Birthday to you");
    console.log("Happy Birthday to you");
    console.log(`Happy Birthday Dear ${name}`);
    console.log("Happy Birthday to you!");
}

happyBirthday("Bryan");

function greeting(name, age) {
    //name, age are "parameters" here
    console.log(`Hello ${name}. You are ${age} years old. You old dog. `);
}
greeting("Mr. Klins", 100); //"Mr. Klins", 100 are "arguments" here

//return statement:
function add(x, y) {
    return x + y;
}
console.log(add(4, 5)); //9

function isEven(num) {
    //using ternary operator!
    let even = num % 2 === 0 ? true : false;
    return even;
    //this could all be shorthanded to return num % 2 === 0
}

//scope:
// scope means: the area of a program where a variable is recognized and can be used.
// local scope, global scope:

function someFunc() {
    let myvar = "anything"; //local scope
}

//console.log(myvar); //error myvar is not defined

let song = "Merry Christmas"; //global scope (defined outside of any function):
function printSong() {
    //let song = "Happy Christmas"; //this would take precedence.
    console.log(song); //accessible because of global SCOPE
}
printSong();

function nestedStuff() {
    let myVar = "some val";
    function nested() {
        console.log(myVar);
    }
    nested();
}

nestedStuff();
