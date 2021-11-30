// 實做觀察者模式:
// 觀察者模式的物件核心
var messageCenter = {
  events: {
    // todo: [
    //     {
    //         obj: objA,
    //         callback: function (msg) {
    //             console.log('userA todo:' + msg);
    //         }
    //     },
    //     {
    //         obj: objB,
    //         callback: function (msg) {
    //             console.log('userB todo:' + msg);
    //         }
    //     }
    // ]
  },
  emit: function (type, message) {
    // 事件變化，觸發事件
    if (this.events[type]) {
      for (var i = 0; i < this.events[type].length; i++) {
        this.events[type][i].callback(message);
      }
    }
  },
  on: function (obj, type, callback) {
    // 綁定事件
    this.events[type] = this.events[type] || [];
    this.events[type].push({
      obj: obj,
      callback: callback,
    });
  },
  off: function (obj, type) {
    //移除事件
    if (this.events[type]) {
      for (var i = 0; i < this.events[type].length; i++) {
        if (this.events[type][i].obj === obj) {
          this.events[type].splice(i, 1);
          i--; // 移除時，要移掉i-- ，不然會多一個出來
        }
      }
    }
  },
};
// 建立 user 類別
function User(messageCenter) {
  this.messageCenter = messageCenter;
}

User.prototype.addEvent = function (type, callback) {
  this.messageCenter.on(this, type, callback);
};
User.prototype.removeEvent = function (type) {
  this.messageCenter.off(this, type);
};
var userA = new User(messageCenter);
userA.addEvent('todo', function (msg) {
  console.log('userA todo:' + msg);
});
userA.addEvent('test', function (msg) {
  console.log('userA test:' + msg);
});
var UserB = new User(messageCenter);
UserB.addEvent('todo', function (msg) {
  console.log('UserB todo:' + msg);
});
var UserC = new User(messageCenter);
UserC.addEvent('test', function (msg) {
  console.log('UserC test:' + msg);
});
messageCenter.emit('todo', 'News');
messageCenter.emit('test', 'Word');

// remove
userA.removeEvent('todo');
