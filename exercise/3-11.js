// if (true) console.log("a"); console.log("b"); //(Bad)
//原意可能是
// if (true) {console.log("a"); console.log("b");}
//實際執行是
// if (true) {console.log("a");} console.log("b");

// if (true) console.log('a'), console('b');

function run(){
    return 1;2,3;
}

function go(){
    return 1,2,3;
}

run();

go();