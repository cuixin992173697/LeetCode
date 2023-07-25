/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxRes = 0;
  let temp = 0;
  if (height.length === 0) {
    return 0;
  }
  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < i; j++) {
      let minHeight = Math.min(height[i], height[j]);

      console.log(minHeight);

      temp = minHeight * minHeight;

      if (temp > maxRes) {
        maxRes = temp;
      }
    }
  }
  return maxRes;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
