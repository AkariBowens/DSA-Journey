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

//Notes:

/* 
1. The first thing to do is set largestSum and the windowTotal to the first index of nums
2. The next is to decide whether to keep the current value of windowTotal and add the number at the new index or to reset the windowTotal to the current value at num[i]
3. Check if the window total is greater than the current largestSum
-- Exit Loop --
4. Return largesSum



*/
