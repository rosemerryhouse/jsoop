(function (window, document) {
  console.log(window, document);
  window.onerror = function () {
    console.log('error');
  };

  document.querySelector('body').addEventListener('click', function () {
    console.log('click');
  });
})(window, document);

// minify:
// !function(o,n){console.log(o,n),o.onerror=function(){console.log("error")},n.querySelector("body").addEventListener("click",function(){console.log("click")})}(window,document);

// 優先查找 ：立即函式內的 fn
(function () {
  function Array() {}
  console.log(new Array()); //這裡不是內建的 Array
})();
