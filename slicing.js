//slicing is extracting a substring of a larger string

let str = "Vince Loves Pickles";
//extract just vince:
let v = str.slice(0, 5);
console.log(v);
let p = str.slice(12, str.length);
console.log(p);
let mp = str.slice(12);
console.log(mp);
let more_pickels = str.slice(-7);
console.log(more_pickels);
//get just the first word:
console.log(str.slice(0, str.indexOf(" ")));
//get everything after the first space:
console.log(str.slice(str.indexOf(" ") + 1));

//breaking apart an email:
//eg.
let email = "jklins@ects.org";
//get the username:
let un = email.slice(0, email.indexOf("@"));
console.log(un);
//get the extension (domain):
let domain = email.slice(email.indexOf("@") + 1);
console.log(domain);
