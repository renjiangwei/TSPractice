"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
  函数，声明函数的两种方式
  let a = function(){}
  function a() {}
  ts
*/
// 一个完整的函数声明，声明变量 = function()
let a = function (num) {
    return num;
};
function b(num) {
    return num;
}
console.log(a(1));
console.log(b(4));
/*
  完整的声明可能重复有点多，假如只写了前半部分，function部分可以不写，反之也是
  这就是类型推断
*/
/*
  JS中函数的参数没有可选一说，可以传任意数量的任意值
  TS中需要指定可选参数，在调用时可以可选传入，可选参数必须放在最右侧。（像c++的函数默认参数，JS中默认参数行为还不太一样，主要是因为JS可传任意值）
*/
function c(name, age) {
    console.log(`${name} ${age ? age : ''}`);
}
c('adf');
c('adf', 203);
/*
  剩余参数 rest
*/
{
    let max = function (num, ...rest) {
        return Math.max(num, ...rest);
    };
    console.log(max(1, 2, 3));
}
/*
  函数重载，给函数多个类型定义，不是重新定义函数体
*/
{
    function a(arg) {
        if (typeof arg === 'object') {
        }
        if (typeof arg === 'number') {
        }
    }
}
