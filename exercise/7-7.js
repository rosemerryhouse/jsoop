//es5
document.show = function () {
  var that = this; // 必須先指定 this是此function
  ['how', 'are', 'you'].forEach(function (value) {
    var h2 = document.createElement('h2');
    h2.innerText = value;
    that.body.appendChild(h2);
  });
};
document.show();
//es6
document.show = function () {
  ['how', 'are', 'you'].forEach((value) => {
    let h2 = document.createElement('h2');
    h2.innerText = value;
    this.body.appendChild(h2); // this 指 function 裏的thia
  });
};
document.show();
