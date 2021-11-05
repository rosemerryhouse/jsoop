function build() {
  var args = new Array();
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  args.forEach(function (item) {
    console.log(item);
  });
}

build(10, 20, 30);

// ※ 另外一種寫法 [].slice.call(arguments); 也可轉成標準陣列，後面會再介紹。
