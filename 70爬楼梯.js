var climbStairs = function(n) {
  // dp[i] 为第 i 阶楼梯有多少种方法爬到楼顶
  // dp[i] = dp[i - 1] + dp[i - 2]
  let dp = [1 , 2]
  for(let i = 2; i < n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n - 1]
};


// 超出时间限制
// var climbStairs = function(n) {
//   if (n === 1) {
//     return 1;
//   }
//   if (n === 2) {
//     return 2
//   }
//   return climbStairs(n-1) + climbStairs(n-2)
// };


console.log(climbStairs(6));

