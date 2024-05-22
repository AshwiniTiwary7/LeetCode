var finalValueAfterOperations = function (operations) {
    var x = 0;
    for (i = 0; i < operations.length; i++) {
        if (operations[i] === "--X" || operations[i] === "X--") {
            x = x - 1;
        }
        else {
            x = x + 1;
        }
    }
    return x;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));


//Accuracy ---> 62%