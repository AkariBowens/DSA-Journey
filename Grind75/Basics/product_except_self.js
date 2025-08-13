/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    
    // Starts at index 1 and calculates every thing to the leftt of i
    let newArray = [1];
    for (i = 1; i < nums.length; i++){
        
        // Left pass
        newArray[i] = nums[i - 1] * newArray[i - 1];
        
    } 
  
    // Starts at the final index and calculates every thing to the right of i
    let rightPass = 1;
    for (i = nums.length - 1; i >= 0; i--){
        newArray[i] = newArray[i] * rightPass;
        rightPass *= nums[i];
    }

    return newArray;

};

