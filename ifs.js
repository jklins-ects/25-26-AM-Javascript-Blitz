let age = 19;
let allowed = false;
if (age < 18 || !allowed) {
    console.log("You cannot vote");
}

allowed = true;
if (age >= 18 && allowed) {
    console.log("You can vote");
}

let myname = "klins";
myname = myname.toLowerCase();
if (myname == "kerry") {
    console.log("I'm sorry I post brainrot all the time");
} else if (myname == "bryan") {
    console.log(
        "I'm only moderately concerned I will cause a fire with electronics"
    );
} else {
    console.log("I don't know who you are");
}

let num1 = 5;
let num2 = "5";
console.log(num1 == num2); //true == checks only value
console.log(num1 === num2); //false - === compares value AND type
num2 = 6;
console.log(num1 === num2); //false - === compares value AND type

//ternary example
let message = age >= 18 ? "allowed to vote" : "not allowed to vote";
console.log(message);

const DAY = "Mons";

if (DAY == "Mon") {
} else if (DAY == "Tues") {
} //.........

//switch statement:

switch (
    DAY //the subject we are interested in
) {
    case "Mon":
        console.log("5 days to go");
        break;
    case "Tues":
        console.log("4 days to go");
        break;
    case "Wed":
        console.log("3 days to go");
        break;
    default:
        console.log("I don't know what day that is");
}

console.log("Hello".padStart(15, "*").padEnd(25, "*"));
