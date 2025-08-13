// New O(n) solution
var containsDuplicate = function(nums) {
   
    let register = new Set();

    if(nums == null || nums.length < 2)return false;

    for(let i = 0; i < nums.length; i++){
        if(register.has(nums[i])){
            return true;
        } else {
            register.add(nums[i]);
        }
    }

    return false;
    
};



// Old O(n log n) solution
var containsDuplicate = function(nums) {
   
    if(nums == null || nums.length < 2)return false;

    nums.sort((a,b)=>{return a - b});
    
    let currentNum = nums[0];
    for(let i=1;i<nums.length;i++){
        
        if(nums[i] === currentNum){
            return true;
        } else {
            currentNum = nums[i];
        }
    };
    return false;
    
};
