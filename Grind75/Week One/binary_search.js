/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// https://leetcode.com/problems/binary-search/submissions/1666551249

// First Solution
var search = function(nums, target) {
    // Create two pointers
    let left = 0;
    let right = nums.length - 1;

    // Stop when left pointer is less that right pointer
    while (left <= right){
        let midPoint = Math.floor((left + right) / 2);

        // Checks if midpoint is target
        if(nums[midPoint] === target){
            return midPoint;
        }else if (target < nums[midPoint]){
            right = midPoint - 1;
        } else {
            left = midPoint + 1;
        }
    
    
    return -1;
};
