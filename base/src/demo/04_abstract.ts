abstract class Person{//抽象类，不能创建对象，只能被继承，同时子类必须实现所有的抽象方法
  name:string
  age:number
  constructor(name:string,age:number){
    this.name = name;
    this.age = age
    console.log("person的构造函数调用了");
    
  }
  abstract say():void//抽象方法
}
class Student extends Person{//student继承自person 里面可以super调用父类构造函数，同时进行自己的属性定义
  major:string
  constructor(name:string,age:number,major:string){
    super(name,age)
    this.major = major
    console.log("stu的构造函数调用了");
    
  }
  say(){
    console.log("woshi"+this.name+this.age+"sui major:" +this.major+'!');
  }
}
let s = new Student('zcv',20,'mg');
s.say()
let stu:Person = new Student('rjw',25,'');

export {}