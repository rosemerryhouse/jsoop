//es5
// 大寫為類別，this設定屬性
function Shape(id, x, y) {
  this.id = id;
  this.move(x, y);
}

// 原型方法 
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

// 透過 new 產生新的類別
var shape = new Shape('a', 0, 0);
console.log(shape);
//es6
{
  class Shape {
    constructor(id, x, y) {
      this.id = id;
      this.move(x, y);
    }
    move(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  let shape = new Shape('a', 0, 0);
  console.log(shape);
}
