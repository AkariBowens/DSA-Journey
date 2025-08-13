var maxSubArray = function(nums) {
    
    let largestSum = nums[0];
    let windowTotal = nums[0];

    for(i=1;i<nums.length;i++){
        
        //Checks if window is negative before increasing windowTotal
        if(windowTotal < 0 ){
            windowTotal = nums[i];
        } else {
            windowTotal += nums[i];
        }


        if(windowTotal > largestSum){largestSum = windowTotal};
        
    }

    
    return largestSum;
};
