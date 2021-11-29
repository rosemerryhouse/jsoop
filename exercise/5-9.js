Function.prototype.inherits = function (superCtor) {
  // superCtor 父類別
  // 暫時類別
  function F() {}
  F.prototype = superCtor.prototype;
  this.prototype = new F();
  this.super = superCtor.prototype;
  this.prototype.constructor = this;
};
function A(abc) {
  this.abc = abc || 12;
  console.log('A class');
}
A.prototype.show = function () {
  console.log('a class show');
};
function B() {
  A.apply(this, arguments);
}
B.inherits(A);
var objB = new B();
B.prototype.square = function () {
  console.log(this.abc * this.abc);
};

B.prototype.show = function () {
  console.log('B class show');
};
objB.square(); //144
