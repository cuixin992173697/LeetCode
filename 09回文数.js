/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = x.toString()

  const stack = []

  if ( x < 0 ) {
    return false
  }

  if ( x == 0 ) {
    return true
  }

  if ( x.length % 2 == 0 ) {
    for( let i =0; i < x.length / 2; i++ ) {
      stack.push(x[i])
    }
    for (let j = x.length / 2; j < x.length; j++) {
      if ( x[j] != stack.pop() ) {
        return false
      }
    }
  } else {
    for( let k =0; k < (x.length - 1)/ 2; k++ ) {
      stack.push(x[k])
    }
    for (let l = (x.length+1) / 2; l < x.length; l++) {
      if ( x[l] != stack.pop() ) {
        return false
      }
    }
  }

  return stack.length == 0
};

console.log(isPalindrome(-123321))