var iterator = (function() {
    var index = 0,
        data = [1, 2, 3, 4, 5], // 使用者無法知道知道
        length = data.length;
    return {                   // 使用者由以下的方法來知道資料
        next: function() {
            index = index + 1;
        },
        hasNext: function() {
            return index < length;
        },
        first: function() {
            index = 0;
        },
        current: function() {
            return data[index];
        }
    };
})();
iterator.first();
while (iterator.hasNext()) {
    console.log(iterator.current());
    iterator.next();
}