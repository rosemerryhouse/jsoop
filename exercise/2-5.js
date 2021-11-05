var g;
function outer() {
  var a = 100;
  function inner() {
    console.log(a);
  }
  g = inner; // 加上() 表示要立即執行，所以先不用加上 ()
}
outer();
console.log(g()); //100
