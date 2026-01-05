//2d arrays - 2 dimensional arrays.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

//display the 2d array:
matrix.forEach((value, index) => {
    //dealing with each row
    console.log("row ", index);
    for (let cell of value) {
        process.stdout.write("" + cell); //must pass a string to stdout
    }
    console.log();
});

for (let row of matrix) {
    const output = row.join(" "); //joins elements in array separated by a space
    console.log(output);
}

//accessing a specific element:
console.log(matrix[1][1]);
console.log(matrix[2][1]);

matrix[2][1] = "X";
console.log(matrix);
