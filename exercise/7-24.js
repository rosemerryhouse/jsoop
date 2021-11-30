//es5
Function.prototype.inherits = function (superCtor) {
  Object.setPrototypeOf(this.prototype, superCtor.prototype);
  this.super = superCtor.prototype;
};
function Shape(id, x, y) {
  this.id = id;
  this.move(x, y);
}
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};
function Rectangle(id, x, y, width, height) {
  Shape.call(this, id, x, y);
  this.width = width;
  this.height = height;
}
Rectangle.inherits(Shape);
function Circle(id, x, y, radius) {
  Shape.call(this, id, x, y);
  this.radius = radius;
}
Circle.inherits(Shape);
var rectangle = new Rectangle('a', 0, 0, 100, 100);
console.log(rectangle);
var circle = new Circle('b', 0, 0, 100);
console.log(circle);
//es6
{
  class Shape {
    constructor(id, x, y) {
      this.id = id;
      this.move(x, y);
    }
    move(x, y) {
      console.log('Shape move')
      this.x = x;
      this.y = y;
    }
  }
  // 繼承 Shape 類別
  class Rectangle extends Shape {
    constructor(id, x, y, width, height) { // 增加參數
      super(id, x, y); // super 指的是父類別的建構函式，基於父類別的功能
      this.width = width;
      this.height = height;
    }
  }
    // 繼承 Shape 類別
  class Circle extends Shape {
    constructor(id, x, y, radius) {
      super(id, x, y);
      this.radius = radius;
    }
    move(x,y){
        super.move(x,y);
        console.log('Circle move')
    }

  }
  let rectangle = new Rectangle('a', 0, 0, 100, 100);
  console.log(rectangle);
  let circle = new Circle('b', 0, 0, 100);
  console.log(circle);
}
