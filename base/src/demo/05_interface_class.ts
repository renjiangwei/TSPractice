//interface定义接口，接口的属性不能赋值，接口的方法都是抽象方法，
//相当于定义了一个类的模板，里面必须实现方法，继承属性
interface myInterface {
  name:string
  say():void
}
class Student implements myInterface{
  name:string
  constructor(name:string){
    this.name = name
  }
  say(){
    console.log(`我是${this.name}`);
  }
}
let s = new Student('zcv');
s.say()
export {}