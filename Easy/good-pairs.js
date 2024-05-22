var numIdenticalPairs = function (nums) {
    let hashmap = new Map();
    var occurence = 0;
    for (i = 0; i < nums.length; i++) {
        let found = hashmap.get(nums[i]);
        if (found === undefined) {
            hashmap.set(nums[i], 1);
        }
        else {
            hashmap.set(nums[i], found + 1);
        }
    }
    for (let [key, value] of hashmap.entries()) {
        // console.log(value)
        while (value > 1) {
            occurence = occurence + value - 1;
            value--;
        }
    }

    return occurence;
};

console.log(numIdenticalPairs([1, 1, 1, 1]));

/**
 * get frequency
 */

// ----> Faster than 27% -- Need improvement