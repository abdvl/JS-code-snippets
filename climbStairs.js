// https://leetcode.com/problems/climbing-stairs/

var climbStairs = function(n) {
    // dp[i] represents # of ways to reach i-th floor
    let dp = new Array(n+1); // size is n+1 because array is zero-indexed
    dp[0] = 1, dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
    // Time Complexity: O(N)
    // Space Complexity: O(N)
};

// # of ways to reach i-th floor = # of ways to reach i-1 floor + # of ways to reach i-2 floor
// base cases: 
// 1. # of ways to reach 0-th floor is 1
// 2. # of ways to reach 1-st floor is 1

var climbStairs = function(n) {
    let a = 1, b = 2, next;
    
    for(let i = 3; i <= n; i++) {
        next = a + b;
        a = b;
        b = next;
    }
    return n === 1 ? a : b;
};
