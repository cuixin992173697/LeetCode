/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  str = "0123456789"
  s = s.trim()
  temp = ''
  index = 0
  res = 0
  

  for( let i = 0; i < s.length; i++ ) {
    if(str.includes(s[i])) {
      temp = temp + s[i]
    }
  }

  
  index = s.indexOf(temp[0]) - 1 
  

  if(s[index] === '-' && index == 0) {
    res = -Number(temp)
  } else if( index > 0) {
    res = 0
  } else {
    res = Number(temp)
  }
  

  return res;

};

console.log(myAtoi("-91283472332"))


// /**
//  * @param {string} s
//  * @return {number}
//  */
// var myAtoi = function(s) {
//   let sign = 0;
//   let num = 0;
//   let start,end;
//   start = s.search(/\d/);  // 查找出第一个数字位置 
//   function judge(s,index){ // 判断第一个数字前，是否含有非数字
//       for(let i = index; i >= 0; i--){
//           if(/[^0-9]/.test(s[i]) && s[i] !== " ") return 0;  // 判断不为数字且不为空返回0
//       }
//       return 1;
//   }
//   if(start!== 0){  // 当第一个数字下标不为0时判断
//       if(s[start-1] !== "-" && s[start-1] !== "+"){  // 判断数字前无符号位
//           if(s[start-1] !== " ") return 0;  // 数字前一位不为空返回0
//           if(!judge(s,start-1) && start-1 !== 0) return 0;  // 判断数字前是否含非数字，数字起始下标大于1
//       }else{
//           sign = s[start-1]  // 有符号位保存符号
//           if(!judge(s,start-2) && start-1 !== 0) return 0;
//       }
//   }
//   for(let i = start; i < s.length; i++){
//       if(!/\d/.test(s[i]) || i ===  s.length-1){
//           end = i;
//           return getNum(s,sign,start,end);
//       }
//   }
//   function getNum(s,sign,start,end){  // 获取数字
//       let _s = s.slice(start,end+1);  // 截取数字片段
//       num = parseInt(sign + _s);  // 拼接符号位
//       num < Math.pow(-2,31) ? num=Math.pow(-2,31) : num > Math.pow(2,31)-1 ? num = Math.pow(2,31)-1 : num;
//       return num;
//   }
// };



