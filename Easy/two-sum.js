
var twoSum = function (nums, target) {
    //Intilalizing hash map
    let targetMap = new Map();
    //Intilalizing Array
    let indexedArray = [];
    for(i=0;i<nums.length;i++){
        //if nums[i] and new nums[i] add to target than push both of there indexes
        let closeToTarget = target - nums[i];
        let foundInHash = targetMap.get(closeToTarget);
        if(foundInHash !== undefined){
            console.log(foundInHash)
            indexedArray.push(foundInHash);
            indexedArray.push(i);
        }
        else{
            targetMap.set(nums[i],i);
        }
    }
    return indexedArray;
};

console.log(twoSum([2,7,11,15], 9));

//Dry Run
/*
The solution can be done using hash map
*/