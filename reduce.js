//reduce can combine all elements in an array to a single value

//reduce automatically passes in an accumulator and an element

const numbers = [1, 2, 3, 4, 5];

function sum(accumulator, element) {
    return accumulator + element;
}

const total = numbers.reduce(sum);
console.log(total);

const names = ["Jackson", "Bryan", "Kerry"];
const smashem = names.reduce(sum);
console.log(smashem);

const people = [
    { name: "Bryan", age: 17 },
    { name: "Jackson", age: 17 },
    { name: "Mr. KLins", age: 45 },
    { name: "Mr. Josh", age: 87 },
    { name: "Josh", age: 18 },
    { name: "Kerry", age: 13 },
    { name: "TJ", age: 21 },
];

function sumAges(accumulator, element) {
    return { age: accumulator.age + element.age };
}

const totalAges = people.reduce(sumAges);
console.log(totalAges);
