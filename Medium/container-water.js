// Two pointer approach _ BRUTFORCE - Time Complexity O(n2)

// var maxArea = function (height) {
//     var area = 0;
//     for (i = 0; i < height.length; i++) {
//         for (j = height.length; j >= i; j--) {
//             const minNum = Math.min(height[i],height[j]);
//             const distance = j - i;
//             let newArea = minNum * distance;
//             if(newArea > area){
//                 area = newArea;
//             }
//         }
//     }
//     return area;
// };

// console.log(maxArea([3, 1, 2, 4, 5]));

// Efficient way -- Can we do this in O(n)
// Two Pointer approach (Can do it in more effective way)

var maxArea = function (height) {
    if (height.length === 1) {
        return height[1]
    }
    else {
        let p1 = 0;
        let p2 = height.length - 1;
        var area = 0;
        while (p1 <= p2) {
            // console.log(area)
            const smallBar = Math.min(height[p1],height[p2]);
            const lengthBtw = p2 - p1;
            const newArea = smallBar * lengthBtw;
            if(newArea > area){
                area = newArea;
            }
            height[p1] <= height[p2] ? p1++ : p2--
        }
        return area;
    }
}

console.log(maxArea([2,3,4,5,18,17,6]));