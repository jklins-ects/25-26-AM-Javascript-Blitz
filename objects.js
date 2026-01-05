//to create an object in js use {}

//here's an object
const person = {
    firstName: "Jackson",
    lastName: "Brink",
    "favorite color": "blue",
    age: 16,
    isEmployed: false,
    siblings: ["Dom"],
};

//accessing values of an object (dot notation):
console.log(person.firstName); //Jackson
console.log(person.siblings[0]); //Dom

//sometimes dot notation will not work (if spaces in key):
//console.log(person.favorite color)

//you can also access properties using square brackets:
console.log(person["favorite color"]);

//imagine the user chose what property they wanted.
let targetProperty = "age";
console.log(person[targetProperty]);

//objects can also have methods:
const person2 = {
    firstName: "Bryan",
    lastName: "Burwell",
    "favorite color": "purple",
    age: 17,
    isEmployed: false,
    siblings: ["Mary-Kate", "Ashley"],
    //method
    sayHello: function () {
        console.log(`Hi, I'm ${this.firstName}`); //notice "THIS"
        //same as:
        console.log(`Hi, I'm ${person2.firstName}`); //same as above, but kind of weird.
    },
    sayGoodbye: () => {
        //arrow functions do not have access to THIS
        console.log(`Goodbye was said by ${this.firstName}`); //Goodbye was said by undefined
    },
};

//add properties or methods to an object
person.sayHello = function () {
    console.log("Hi, I'm Jackson");
};

person2.sayHello();
person2.sayGoodbye();
person.sayHello();
