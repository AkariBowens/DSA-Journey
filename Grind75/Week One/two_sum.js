// Goal: 
//  The goal of the two sum algorithm is to return two indices of two numbers in a given array that add up to target.

// My first solution: /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indicesArray = [];
    let loopedNums = []
    // Loops through nums, tests target - current index, when loopedNums length > 0, checks if loopedNums has target - number at current index
    for (i = 0; i < nums.length; i++){
        // Test if the current index = Target - num
        if(loopedNums.length > 0){
            let expectedNum = target - nums[i];
            if(loopedNums.includes(expectedNum)){
                indicesArray = [i, loopedNums.indexOf(expectedNum)];
                return indicesArray;
            };
        } 
        
        loopedNums.push(nums[i]);

    }
};


// NOTES
// 1. Loop nums by 2, start at index: 1
// 2. Test current index plus index - 1 and test current index plus index + 1
// 3. If not, increase index by 2

// First attempt passed 43/63 tests
// It looped through nums, started on index 1, added the previous index to the current index to test for target, then added the next index to the current index to test for equivalence target
// What went wrong: It did not test the previous index plus the next index to see what would reach target

// Second and third attempt 53/63
// It did the same as the first attempt, but I added a third if option that tested the next index + previous index to see if the result equaled target
// What went wrong: It did not test, let's say, if the number at index 0 + the number at index 3 equaled target. I realized the algorithm I created skipped a lot of possible combinations. I needed to figure out how to check every number without making too many loops or defining a bunch of variables

// Final Attempt
// It looped the nums array, when looped numbers array has more than 0 length, it checked if the looped numbers in nums were equal to target - the current number at index in nums, if not it added the number at index in nums to the looped number array
