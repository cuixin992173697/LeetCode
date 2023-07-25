/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let length = nums.length
  let index = nums.indexOf(target)
  let result = 0
  if(index >= 0) {
    result = index
    return result;
  } else {
    for(let i = 0; i < length; i++) {
      if(target < nums[i]) {
        result = i
        return result
      }
    }
    return length
  }
};

console.log(searchInsert(nums = [1,3,5,6], target = 2))
