//es5
var x = 100;
var y = 200;
var obj = {
    x: x,
    y: y
};
console.log(obj);
//es6
{
    let x = 100;
    let y = 200;
    let obj = {    // 簡化寫法，屬性和變數名稱相同
        x,
        y
    };
    console.log(obj);
}