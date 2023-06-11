/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let nums = [0]
  let num = 0
  let sum = 0

  for( let i = 0; i < s.length; i++ ) {
    switch(s[i]) {

      case 'M':
        num = 1000;
        nums[i] = num
        break;
      case 'D': 
        num = 500;
        nums[i] = num
        break;
      case 'C':
        num = 100;
        nums[i] = num
        break;
      case 'L':
        num = 50;
        nums[i] = num
        break;
      case 'X':
        num = 10;
        nums[i] = num
        break;
      case 'V':
        num = 5;
        nums[i] = num
        break;
      case 'I':
        num = 1;
        nums[i] = num
        break;  
    }
  }

  for( let j = 0; j < nums.length; j++) {
    if(nums[j] < nums[j+1]) {
      nums[j] = - nums[j];
    }
  }

  for( let m = 0; m < nums.length; m++) {
    sum = sum + nums[m]
  }

  return sum
};



console.log(romanToInt('"MCMXCIV"'))