// rest parameters allow functions to accept a variable number of arguments:
// (eg. Math.max)

// rest and spread both use ...
// rest: found in function parameters - bundles multiple values into an array
// spread: found anywhere with an array - makes the values into separate parts.

function myFunc(name, ...values) {
    console.log(name);
    console.log("You passed in: ");
    for (let val of values) {
        console.log(val);
    }
}

myFunc("klins", 4, 6, 8, 12);

function sum(...nums) {
    let total = 0;
    for (let val of nums) {
        total += val;
    }
    return total;
}

console.log(sum(4, 5, 6, 7, 8, 9, 10));
