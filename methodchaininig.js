// method chaining is a technique that lets you call multiple methods on one object one after another:
// get the first letter of a string and make it uppercase:
// chaining:
let uname = "    jmiller@youtube.con     ";
// method chaining:
let fl = uname.trim().charAt(0).toUpperCase();
console.log(fl);

//Logical operators:
//
//AND
console.log(true && false); // false
//OR
console.log(true || false); // true
//NOT:
console.log(!false); //true

//equality and strict equality:
console.log("equality");
console.log(5 == "5"); //true (regular equality) //ignores the data type
console.log(5 != "5"); //false (regular equality) //ignores the data type
console.log(5 + "5"); //55
console.log(5 + Number("5")); //55
//strict equality:
console.log(5 === "5"); //false (strict equality) //compares data type as well
console.log(5 !== "5"); //true
