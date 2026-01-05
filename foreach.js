// foreach allows you to iterate through every element in a collection (array)

let numbers = [1, 2, 3, 4, 5];

//create a callback for something we want to do to each element;
function display(num) {
    console.log(`The number is ${num}, and ${num} doubled is ${num * 2}`);
}

numbers.forEach(display); //pass in callback functions

//behind the scenes, foreach passes to the callback, the element, index, the array.

function tellMeMore(val, idx, arr) {
    //foreach always passes these three values, in this order.
    console.log(`The value is ${val}`);
    console.log(`The index is ${idx}`);
    console.log(`The Array: `, arr);
}
numbers.forEach(tellMeMore);

function doubleElementValues(val, idx, arr) {
    arr[idx] = val * 2;
}

numbers.forEach(doubleElementValues); //arr is a reference type - passed by reference. 
console.log(numbers);

//side note:
function double(val) {
    val = val * 2;
}
let n = 5;
double(n); //primitive type (number), passed by value (a copy is passed)
console.log(n);
