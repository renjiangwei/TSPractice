"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = function () {
    return 1;
};
class c {
    constructor() {
    }
}
let b = c;
console.log(b);
let de = (arg) => {
    console.log(arg);
};
/*
  1.可以强制类型转换
  2.赋值给变量然后传入de函数，此时避免了报错，相当于逃避检测
  最好是接口定义时添加[propName:string]: any
*/
let arg = {
    name: 'qwe',
    color: 'qwe'
};
de(arg);
de({
    name: 'qwe',
    // color: 'qwe' // 报错
});
