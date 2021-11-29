

var ary1 = new Array(12, 55, 43, 32, 44);
var ary2 = new Array(12, 33, 1);
Array.prototype.sum = function() {
    var output = 0;
    for (var i = 0; i < this.length; i++) {
        output += this[i];
    }
    return output;
};
ary1.sum = function() {
    return "nothing";
};
console.log(ary1.sum()); // 'nothing'
console.log(ary2.sum());

function Foo() {} 
console.log(typeof Foo.prototype) // object

var a = new Foo();
console.log(a.prototype);
console.log(a.__proto__ === Foo.prototype); // true