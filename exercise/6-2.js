function Cat() {
  if (typeof Cat.instance === 'object') {
    // 如果再 new 一次新的，就回傳即有的物件
    return Cat.instance;
  }
  this.name = 'kitty';
  Cat.instance = this;
}
Cat.prototype.move = function () {
  return this.name + ' move';
};
var cat1 = new Cat();
var cat2 = new Cat();
console.log(cat1 === cat2); //true
cat1.name = 'coco';
console.log(cat2.name()); //"coco"
