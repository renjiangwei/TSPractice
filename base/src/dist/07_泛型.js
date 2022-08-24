"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
  泛型，假如说函数可以传任意类型，返回对应的类型，如果写成function a(arg:any):any {}会理解为传入任意值，返回任意值，会丢失信息
  此时需要泛型，来表明：你可以传任意类型的值，返回的是相同类型的值
  就像c++的模板

  let a: <T>(arg: T) => T
  <T>类型参数 arg参数 =>T返回值
  => 为什么不用 ':' 整体看起来就是 ...:...:...
  调用函数时可以传递这个类型 a<boolean>(false)
*/
function echo(arg) {
    return arg;
}
console.log(echo(213));
console.log(echo([1, 2, 3]));
console.log(echo({}));
console.log(echo(() => { console.log('arrow function'); }));
{ // 注意形式
    let a = function (arg) {
        return arg;
    };
    let b;
}
{
    let a = function (a) { return a; };
    console.log(a(1)); // 注意这里调用时显式传递了参数类型
}
{
}
/*
  当然没这么死板，否则实用性太低，可以写多个类型
*/
console.log('-------------------');
function a(arg1, arg2) {
    console.log(arg1, arg2);
    return arg2;
}
a(1, '213');
/*
  还能写数组
*/
function b(arg) {
    return arg.length;
}
console.log(b(['adf', 213]));
/*
  类中使用
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let p = new Person('adf', 213);
console.log(p);
let p1 = new Person(false, 'zcv');
console.log(p1);
//注意上面的name和age的类型
let p2 = new Person("asd", "asdvc");
console.log(p2);
{
    let b = {
        daf: 1
    };
    console.log(b);
}
let inp = document.querySelectorAll('input');
inp.forEach(i => { i.addEventListener('input', console.log); });
