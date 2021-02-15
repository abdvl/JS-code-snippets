//https://leetcode.com/problems/maximum-subarray/discuss/?currentPage=1&orderBy=most_votes&query=
var maxSubArray = function(nums) {
    const dp = [nums[0]];
    // let max = dp[0];
    for(let i = 1; i< nums.length; i++){
        dp[i] = Math.max(nums[i], nums[i] + dp[i-1]);
        // max = Math.max(max, dp[i]);
    }
    
    // return max;
    return Math.max(...dp)
};
