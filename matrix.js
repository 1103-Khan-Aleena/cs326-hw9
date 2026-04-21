const readline = require("readline");
const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout });

//rotates the matrix 90 degrees clockwise
function rotateClockwise(matrix) {
    var R = matrix.length;
    var C = matrix[0].length;

    //makes a new empty matrix with the flipped rows and columns
    var newMatrix = []; 
    for (var i = 0; i < C; i++) {
        var row = [];
        for (var j = 0; j < R; j++) {
            row.push(0);
        }
        newMatrix.push(row);
    }

    //copy values into new spots
    for (var i = 0; i < R; i++) {
        for (var j = 0; j < C; j++) {
            newMatrix[j][R - 1 - i] = matrix[i][j];
        }
    }
    return newMatrix;
}
//prints each row of the matrix
function printMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
    }
}
rl.question("Press enter to rotate: ", function(answer) {
    var original = [
        [1, 2, 3],
        [4, 5, 6]
    ];

    console.log("original matrix:");
    printMatrix(original);

    var rotated = rotateClockwise(original);
    console.log("Rotated matrix:");
    printMatrix(rotated);

    rl.close();
});