"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
let a = true;
a = false;
function sum(a, b) {
    return a + b;
}
let sum2;
sum2 = function (a, b) {
    return a + b;
};
console.log(sum2(2, 4));
console.log(sum(123, 4));
let b = 10;
let c = '';
let d = {}; //很少用
c = 'hello';
let e;
e = [123];
let ee;
ee = ['sad', 'sadf', 'zxc'];
let eee;
eee = [true, false];
let f;
f = { name: 'rjw', age: 23 };
let g;
//指定对象name为string,后面的[propName:string]:any 是指其他的键为string,值为any,个数不限制
//不这样指定的话,只能规定什么键,有且只有这些键
let h;
//类似箭头函数的写法指定参数个数、类型返回值
h = function (n1, n2) {
    return n1 + n2;
};
let i;
i = function (arg1) {
    return arg1;
};
i('a', 'b');
console.log('---------enum----------');
var type;
(function (type) {
    type[type["male"] = 1] = "male";
    type[type["famale"] = 2] = "famale";
})(type || (type = {}));
let j = type.male;
console.log(j);
console.log(type[j]);
let k = 'qweasd';
console.log(k.toString); //断言（告诉跳过检测，程序员已经断定这就是对的，不要再帮我检测了）
console.log('----------------------');
//数组解构
let l;
l = ['zxc', 23];
let [m, n] = l;
//注意上面的类型是放在解构后面的[m,n]:[string,number]
let other = __rest(f, []);
console.log(other);
/*
  interface
*/
{
    function abc(obj) {
        console.log(obj);
    }
    abc({ color: 'blue', Number: 1, number: 2 });
    let a = [{
            color: 'qwe',
            number: 123
        }];
}
/*
  enum
*/
{
    let SkuType;
    (function (SkuType) {
        SkuType[SkuType["asset"] = 1] = "asset";
        SkuType[SkuType["con"] = 2] = "con";
    })(SkuType || (SkuType = {}));
    let s1;
    s1 = 1;
    console.log(SkuType[s1]);
}
/*
  type
*/
{
}
{
    let a = {
        a: false
    };
}
