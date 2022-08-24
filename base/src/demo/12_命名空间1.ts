/// <reference path="12_命名空间2.ts" />
import * as d from './12_命名空间2'
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
namespace Demo {
  let a = 123
  export interface TaskType {
    name: string,
    age: number,
  }
}
let a:Demo.TaskType = {
  name: 'qwe',
  age: 123
}
// let b:Demo.Peo = {
//   name: 'asd'
// }
let b: d.Demo.Peo = { // 注意这里的使用d.Demo.Peo  d是模块对象 Demo是命名空间 Peo是命名空间的interface，可以看出很繁琐
  name: 'aaa'
}
console.log(a);
console.log(b);
export {}