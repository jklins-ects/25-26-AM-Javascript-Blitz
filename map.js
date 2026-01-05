// use map to transform arrays
// runs a function on each element of the array and returns a new array

const numbers = [2, 3, 4];
function square(element) {
    return element * element; //Math.pow(element, 2)
}

const squares = numbers.map(square);
console.log(numbers);
console.log(squares);

//map works the same as foreach (passes in element, index, and array)
function sanitize(element) {
    return element.trim().toUpperCase();
}

const names = ["   Joey   ", "sam  ", "  mEGan"];
const fixed = names.map(sanitize);
console.log(fixed);
