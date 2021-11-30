// 靜態方法

//es5
function Rectangle() {}
Rectangle.getMaxRadius = function (width, height) {
  return Math.min(width, height) / 2;
};
function Circle() {}
Circle.getPerimeter = function (radius) {
  return radius * 3.1415926;
};
var maxRadius = Rectangle.getMaxRadius(40, 80);
console.log(maxRadius);
var perimeter = Circle.getPerimeter(30);
console.log(perimeter);
//es6
{
  class Rectangle {
    // 距形 如果沒有加 static就是原形方法
    static getMaxRadius(width, height) { // 定義靜態方法，不需要 new 即可使用
      return Math.min(width, height) / 2;
    }
  }
  class Circle {
    static getPerimeter(radius) {
      return radius * 3.1415926;
    }
  }
  let maxRadius = Rectangle.getMaxRadius(40, 80);
  console.log(maxRadius);
  let perimeter = Circle.getPerimeter(30);
  console.log(perimeter);
}
