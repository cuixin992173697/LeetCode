/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let arr = new Set(nums);
  nums.length = 0;
  nums.push(...arr);
  return nums.length
};

console.log(removeDuplicates(nums = [1,1,2]))