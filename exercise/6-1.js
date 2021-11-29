//忘記new
function CreateNumber(n) {
  this.number = n;
}
var obj = CreateNumber(55); //這裡忘記new
// 污染全域變數，改變了 全域number
console.log(obj.number); //Cannot read property 'number' of undefined
console.log(number); //55 全域

//防止忘記new
function CreateNumber(n) {
  if (this instanceof CreateNumber) {
    // this 是 CreateNumber 產生
    this.number = n;
  } else {
    return new CreateNumber(n);
  }
}
var obj = CreateNumber(55); //這裡忘記new
console.log(obj.number); //55
console.log(number); //number is not defined
