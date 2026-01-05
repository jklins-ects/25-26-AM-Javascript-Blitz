//the spread operator is written as ...
//it allows you to expand (or unpack) an iterable (something you can loop through)

let numbers = [1, 2, 3, 4, 5];

let max = Math.max(1, 2, 3, 4, 5);
max = Math.max(numbers); //NaN - because numbers are in an array.
max = Math.max(...numbers); //unpacks the array
console.log(max);

//make each letter of a string an element in an array:
let uname = "space unicorn";
let letters = [...uname];
console.log(letters);

//copying an array:
let morenums = numbers; //not a copy! This is a pointer to the same collection.
morenums[0] = 55;
console.log(morenums);
console.log(numbers);

let copynums = [...numbers]; //makes an actual copy by unpacking the elements and then surrounding with []
copynums[0] = 99;
console.log(copynums);
console.log(numbers);

//combining arrays into one array:
let combinednums = numbers + morenums; //made a string?
console.log(combinednums[0]);
//how to actually combine
combinednums = [...numbers, ...morenums, 27];
console.log(combinednums);

[val1, val2, val3] = combinednums;
console.log(val1);
console.log(val2);
console.log(val3);
