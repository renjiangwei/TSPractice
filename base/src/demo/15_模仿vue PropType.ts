type Prop<T> = {():T}
let a:Prop<number> = function () {
  return 1
}
type P = {new(...args:any):void}
class c{
  constructor(){
    
  }
}
let b:P = c

console.log(b);

interface Demo {
  name: string,
  age?: number
}
let de: (arg:Demo)=>void = (arg)=>{
  console.log(arg);
}
/*
  1.可以强制类型转换
  2.赋值给变量然后传入de函数，此时避免了报错，相当于逃避检测
  最好是接口定义时添加[propName:string]: any
*/
let arg = {
  name: 'qwe',
  color: 'qwe'
}
de(arg)
de({
  name: 'qwe',
  // color: 'qwe' // 报错
})
export {}