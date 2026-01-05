//Function declarations vs Function Expressions:
sayHello();
//hello();
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

//invoked with
hello();

setTimeout(hello, 1000);
setTimeout(sayHello, 1000);

setTimeout(function () {
    console.log("expression inline Hello");
}, 2000);

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function (n) {
    return n * n;
});
console.log(squares);

const evens = numbers.filter(function (element) {
    return element % 2 === 0;
});

console.log(evens);

const total = numbers.reduce(function (accumulator, element) {
    return accumulator + element;
});
console.log(total);
