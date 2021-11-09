// (function() {
//     "use strict";
//     console.log(Date.now());
//     setTimeout(arguments.callee, 1000);
// })();


(function run() {
    "use strict";
    console.log(Date.now());
    setTimeout(run, 1000);
})();

// run() 只能在裏面使用，外面無法呼叫