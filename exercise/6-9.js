// 遊戲的 計分板 (中介者)

function Player(name) {
    this.points = 0;
    this.name = name;
}
Player.prototype.play = function() {
    this.points += 1;
    // 通知中介者，玩家已加 1 分
    mediator.played();
};

// ui 的呈現
var scoreboard = {
    el: document.body,
    update: function(score) {
        var msg = "";
        for (var i in score) {

            // 屬性是否來自物件本身
            if (score.hasOwnProperty(i)) {
                msg += "<p><b>" + i + "</b>:";
                msg += score[i];
                msg += "</p>";
            }
        }
        this.el.innerHTML = msg;
    }
};

// 中介者的物件
var mediator = {
    users: {},
    init: function() { // 初始化
        this.users.home = new Player("Home"); //莊家
        this.users.guest = new Player("Guest"); // 玩家
    },
    played: function() {
        var score = {
            Home: this.users.home.points,
            Guest: this.users.guest.points
        };
        scoreboard.update(score);
    },
    keypress: function(e) { // 得分的示範
        if (e.keyCode === 48) {  // 0 的按鍵。
            mediator.users.home.play();
            return;
        }
        if (e.keyCode === 49) { // 1 的按鍵
            mediator.users.guest.play();
            return;
        }
    }
};
mediator.init();
window.onkeypress = mediator.keypress;