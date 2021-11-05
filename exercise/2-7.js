/** 新增 add 一個立即函式 (IIFE) 
 * (Immediately Invoked Function Expression)
 * 
*/

var add = (function () {
  var count = 0;
  return function () {
    return (count += 1); // += 1 會把數字加回 count
  };
})();
console.log(add()); //1
console.log(add()); //2
console.log(add()); //3
