//es5
function fn(ary) {
    var name = ary[0];
    var age = ary[1];
    console.log(name, age);
}
fn(["John", 30]);
//es6
{
    function fn([name, age]) {
        console.log(name, age);
    }
    fn(["John", 30]);
}