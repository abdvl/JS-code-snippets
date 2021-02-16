//https://leetcode.com/problems/maximum-subarray/discuss/?currentPage=1&orderBy=most_votes&query=
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const dp = [nums[0]];
    const max_subarr = [[nums[0]]]
    // let max = dp[0];
    for(let i = 1; i< nums.length; i++){
        if(dp[i-1] > 0) {
            dp[i] = nums[i] + dp[i-1]
            max_subarr[i] = [...max_subarr[i-1], nums[i]]
        }else{
            dp[i] = nums[i]
            max_subarr[i] = [nums[i]]
        }
        //dp[i] = Math.max(nums[i], nums[i] + dp[i-1]);
        // max = Math.max(max, dp[i]);
    }
    
    console.log(dp,max_subarr)
    
    // return max;
    return Math.max(...dp)
};
