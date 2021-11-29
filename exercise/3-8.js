var upperCase = 1;
//放在立即函式裡面(Good)
(function() {
    var upperCase = 2;
    var _upperCase =3; // 用底線表示是私有的變數
    console.log(upperCase) // 2 會找最近的函數值
})();