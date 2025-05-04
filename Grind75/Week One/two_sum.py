# Goal: The goal of the two sum algorithm is to return two indices of two numbers in a given array that add up to target.

# First Solution:
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        loopedNums = []
        for i in range(len(nums)):
            if(len(loopedNums) > 0):
                expectedNum = target - nums[i]
                if (expectedNum in loopedNums):
                    return [i, loopedNums.index(expectedNum)]

            loopedNums.insert(len(nums), nums[i])
        
# Notes:
# First Attempt:
# I knew that I could create a history, basically, of the numbers I had already looped through as I looped nums. This way the algorithm only has to loop through nums for its length. The algorithm could then test if the next number at the index in nums subtracted from the target number is in the previously looped numbers.
