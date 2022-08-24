"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
  命名空间
  namespace name{
    export interface
    export class
    export function
    export let a
  }
  使用时 name.interface
  命名空间本来就是用来解决多文件的问题
  在模块中导入导出不需要使用命名空间了，等于多套了一层使用时更麻烦
  所以直接使用模块导入即可
*/
var Demo;
(function (Demo) {
    let a = 123;
})(Demo || (Demo = {}));
let a = {
    name: 'qwe',
    age: 123
};
// let b:Demo.Peo = {
//   name: 'asd'
// }
let b = {
    name: 'aaa'
};
console.log(a);
console.log(b);
