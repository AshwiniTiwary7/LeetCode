var shuffle = function (nums, n) {
    let result = [];
    for (i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[n + i])
    }
    return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));

//Accuracy ----> 66%