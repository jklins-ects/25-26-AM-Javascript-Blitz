// Arrow functions are short easy ways to write function expressions:

//what we did:
/*
//Declaration example:
function sayHello() {
    console.log("Declaration Hello");
}

//that is called or INVOKED with
sayHello();

//Function Expression:
//stores a function in a variable:
const hello = function () {
    console.log("Expression Hello");
};
*/

//arrow function way:
const hello = () => {
    console.log("Hello");
};

//arrow function with parameters:
const greet = (name, age) => {
    console.log(`Hello ${name}`);
    let description = age > 40 ? "Old Dog" : "Young Pup";
    console.log(`You ${description}`);
};

greet("Mr. Klins", 45);

//using arrow functions as callbacks:
setTimeout(() => {
    console.log("One second has passed");
}, 1000);
