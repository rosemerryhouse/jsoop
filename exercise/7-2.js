//es5
// es5 用 defineProperty
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
    value: 3.1415926,
    enumerable: true,
    writable: false,
    configurable: false
});
console.log(PI); //3.1415926
PI = 100;
console.log(PI); //3.1415926
//es6
// 用 const
{
    const PI = 3.1415926;
    console.log(PI); //3.1415926
    PI = 100; //Assignment to constant variable.
    console.log(PI); //3.1415926
}