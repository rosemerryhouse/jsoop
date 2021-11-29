function CreatePerson() {
  Object.defineProperty(this, 'name', {
    value: 'Mark', //值也可是function
    enumerable: true, //是否可已被列舉for in
    writable: false, //是否可已被修改值
    configurable: true, //是否可刪除屬性或修改特性的enumerable、writable、configurable屬性
  });
}
CreatePerson.prototype.getName = function () {
  console.log(this.name);
};
var p1 = new CreatePerson();
p1.getName(); //Mark
p1.name = 'John';
p1.getName(); //Mark

// ※ 如果定義 get、set，表示要自行控制屬性存取，就不能再去定義 value 和 writable 屬性。

// ※ Vue.js 就是利用 get 與 set 去監聽屬性的異動，並即時反應在 DOM 上面。

var obj = {};
(function(){
    var _name;
    Object.defineProperty(obj, 'name', {
        get : function(){
            console.log("讀取 _name");
            return _name;
        },
        set: function(value){
            console.log("寫入_name");
            _name = value;
        }
    })
})

obj.name // 取值

obj.name = "MARK" // 寫入值