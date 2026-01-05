//Arrays - more or less just like Python lists

let fruits = ["apple", "orange", "banana"];

console.log(fruits[1]);

fruits[0] = "plum";

console.log(fruits);

//common methods:

//add to the end of an array:
fruits.push("strawberry");
console.log(fruits);

//remove from the end:
//can also assign the last element to another variable
let last_element = fruits.pop()
console.log(fruits);
console.log(last_element);

//add to the beginning:
fruits.unshift("pineapple");
console.log(fruits);

//remove from the beginning:
let first_element = fruits.shift();


//length

//indexOf (returns -1 if not found)

//looping through array

//for of:

//sorting


