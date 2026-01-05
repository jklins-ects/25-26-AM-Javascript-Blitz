// a callback is a function that is passed as an argument to another function
// "when you are done this task, run this function next"
// callbacks are commonly used with asynchronous operations (tasks that take time to run, like fetch, reading files etc)

function hello(callback) {
    //simulate a delay (as if we were waiting on a server)
    setTimeout(() => {
        console.log("Hello");
        callback(); //call the function we passed in
    }, 3000); //wait 3 seconds
}

function goodbye() {
    console.log("Goodbye");
}

function leave() {
    console.log("I'm leaving now.");
}

hello(goodbye);
hello(leave);

//passing functions that accept parameters:
function displayToConsole(result) {
    console.log("The result is " + result);
}

function sum(x, y, functionToPrint) {
    let result = x + y;
    functionToPrint(result);
}

sum(3, 4, displayToConsole);

