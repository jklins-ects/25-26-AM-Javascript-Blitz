//while loop:
let num = 0;
while (num < 10) {
    console.log(num);
    num++; //increment operator //like num+= 1 or num = num+1
}
num = 0;
let othernum = num++;
console.log(othernum, num); // 0 1

num = 0;
othernum = ++num;
console.log(othernum, num); // 1 1

//not found in python
// do while
// always executes at least once:
num = 5;
do {
    console.log(num);
    num++;
} while (num < 5);

// while loops : check condition before executing the block
// do...while loops : check the condition after executing the block

// for loops!
/*
for(start variable, condition, step){
    //code
}
*/

//count to 200 by 10s
for (let i = 0; i <= 200; i += 10) {
    console.log(i);
}
//count backwards:
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

//continue:
//count to 20, skip 13:
for (let i = 0; i < 20; i++) {
    if (i === 13) {
        continue; //just advances to the next iteration
    }
    console.log(i);
}

//break:
let num2 = 0;
while (num2 < 10) {
    console.log(num2);
    if (num2 === 6) {
        break; //exits the loop
    }
    num2++;
}
