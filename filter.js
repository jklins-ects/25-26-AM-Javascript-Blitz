//use filter to pick specific elements from an array
//write a boolean callback

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function isEven(element) {
    return element % 2 === 0;
}

const evens = numbers.filter(isEven);
console.log(evens);

const people = [
    { name: "Bryan", age: 17 },
    { name: "Jackson", age: 17 },
    { name: "Mr. KLins", age: 45 },
    { name: "Mr. Josh", age: 87 },
    { name: "Josh", age: 18 },
    { name: "Kerry", age: 13 },
    { name: "TJ", age: 21 },
];

function canVote(person) {
    return person.age >= 18;
}

const voters = people.filter(canVote);

//example of an anonymous callback function.
voters.forEach((elem) => {
    console.log(`${elem.name} can vote`);
});

/*
voters.forEach(function(elem){
    console.log(`${elem.name} can vote`)
});
*/
