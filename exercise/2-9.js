for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  })(i);
}

//除了使用閉包，這個範例也可使用 setTimeout 傳入參數、函式 bind 方法或 ES6 的 let
//來解決此問題。
/**除了使用閉包，這個範例也可使用 
 * setTimeout 傳入參數、
 * 函式 bind 方法或 ES6 的 let
 * 來解決此問題。 
 
 */

/** setTimeout 傳入參數、 */
for (var i = 0; i < 5; i++) {
  setTimeout(
    function (a) {
      console.log(a);
    },
    i * 1000,
    i
  );
}
