function run() {
    try {
        return "abc";
    } finally{
        console.log("xyz");
    }
}
console.log(run());
// 先跑 finally, 再跑 try

//"xyz"
//"abc"


/*
finally (不一定要有catch)
也可以有try catch

*/