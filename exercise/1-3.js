/** https://262.ecma-international.org/5.1/#sec-11.9.3
 *  
 *  X == y
 *  2.If x is null and y is undefined, return true.
 *  3.If x is undefined and y is null, return true.
 * 
 */

 console.log(undefined == null); //true

/** https://262.ecma-international.org/5.1/#sec-11.9.6
 * 
 * If Type(x) is different from Type(y), return false.
 * x === y 
 * typeOf 相同則是 true, 若型別不同，則先回傳 false
 * 
 */


 console.log(undefined === null); //false