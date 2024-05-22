var buildArray = function (nums) {
    let result = [];
    for (i = 0; i < nums.length; i++) {
        const numberToFind = nums[nums[i]];
        result.push(numberToFind);
    }
    return result;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));