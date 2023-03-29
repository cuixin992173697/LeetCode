// lengthOfLongestSubstring = function(s) {
//   // minIndex: 字符串某字母的最小index
//   let minIndex = 0
//   // len: 不重复字符串的最大长度
//   let len = 0
//   for(let i = 0; i < s.length; i++) {
//       // for循环遍历每个字母
//       /**
//        * 如果字母的index小于当次循环i，
//        *  1.说明该字母前面有重复的字母，因此把该字母的第一个位置的index赋值给minIndex，
//        *  2.那么这时候的不重复长度为当前循环i - minIndex + 1，第0个字母的长度为1，而不是0，所以要加1
//        * 否则说明没有重复字母，当前循环就是最长的字符串长度；
//        *  1.也就是说当前循环的字母都没有重复的字母，那么此次循环能拿到当前循环的最大长度；
//        *  2.例如：如果循环到最后一轮，一直没有重复字母，那么minIndex为0；所以i - 0 + 1就是做大长度；
//        *  3.每次循环的时候都把最大的长度保存在len值，如果拿到当前的最大长度i - minIndex + 1是大于之前保存的len，则Math.max()替换掉，保留不重复字符串的最大长度
//        */ 
//       s.indexOf(s[i], minIndex) < i ? 
//       minIndex = s.indexOf(s[i], minIndex) + 1 :
//       len = Math.max(len, i - minIndex + 1)
//   }
//   return len
// };

lengthOfLongestSubstring = function(s) {
  let minindex = 0;
  let len = 0;
  for ( let i =0; i < s.length; i++ ) {
    s.indexOf(s[i], minindex) < i ?
    minindex = s.indexOf(s[i], minindex) + 1 :
    len =  Math.max(len, i + 1 - minindex )
  }
  return len;
};

console.log(lengthOfLongestSubstring("hhbdnffff"))
