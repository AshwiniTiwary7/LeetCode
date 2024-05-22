var getConcatenation = function (nums) {
    let concatinatedArr = [...nums, ...nums];
    return concatinatedArr;
};

console.log(getConcatenation([1, 2, 1]));

//Accuracy ----> 66%