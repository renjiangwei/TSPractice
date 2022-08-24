/*
  interface，相当于定义了一个结构，这个类型的变量必须按照这个结构定义
*/
{
  enum Gender{
    male,
    female
  }
  interface Person {
    name: string,
    age: number,
    readonly gender: Gender, // 必填，只读，且是Gender枚举
    job?: string, // 可选
    [propName: string]: any // 可选任意name的属性，此时该接口必填项有三个，一个可选项，还可以添加任意类型的任意属性
  }
  let a: Person = { // 规定很严格，多了少了，都不行。必须一一对应，这可能不好用，所以有可选属性
    name: 'r',
    age: 24,
    gender: Gender.female,
    job: 'web'
  }
  let b: Person = { // 没有可选属性job也不会报错，但是还是不好用，如果有不可预测的属性怎么办
    name: 'r',
    age: 24,
    gender: 2,
  }
  console.log(a);
  console.log(b);

  /*
    接口描述函数类型
  */
  interface Api{
    (obj: object): number
  }
  let getByPage: Api // 声明变量
  getByPage = function() { // 给变量赋值函数，好像不能用function funcname (){} 这种形式定义函数
    console.log('ad');
    return 2 // 必须返回规定的类型，不能写别的类型 
  }
  getByPage({})
}

{
  /*
    可索引的类型，前面[propName: string]: any 定义了任意可选数量的key，可能太宽松了？
    [index: number]: string
  */
  interface NameArray {
    [propName:string]: string
  }
  let arr: NameArray
  // arr = ['123','daf'] // 报错，因为数组中key是number类型
  interface NameArray2 {
    [propName:number]: string,
    length?: number
  }
  let obj:NameArray2 = {
    0: 'nadf',
    1: 'adav',
    length: 2
  }
  console.log(obj);
  let arr2:NameArray2
  arr2 = ['23','gaf','fdag']
  console.log(arr2);
}
{
  interface NameArray {
    [index:number]: string,
    // [propName: string]: number // 报错，索引类型可以是number，string，number索引返回值必须是string索引返回值的*子类型*
  }
  let arr: NameArray
  arr = ['dasd','gg']
  console.log(arr);
}

/*
  类类型接口，和Java类似，类实现接口，必须实现内部的属性和方法

*/
{
  interface P { // 接口P指定了属性name和say方法
    name: string,
    say(label: string): string
  }
  class Person implements P { // 实现了P接口，一定要定义接口中的内容，缺少就会报错
    name: string
    say (label: string):string {
      return label
    }
    constructor (name: string) {
      this.name = name
    }
  }
}

/*
  类实现一个接口时，只检查类的*实例的类型*，不检查*静态部分*的类型，constructor方法是静态部分，不检查就导致无法实现接口中定义的方法
*/
{
  // interface ClockConstructor {
  //   currentTime: Date;
  //   new (hour: number, minute: number): void;
  // }
  // class Clock implements ClockConstructor { // 报错 类“Clock”错误实现接口“ClockConstructor”。
  //   currentTime: Date;
  //   constructor(h: number, m: number) { 
  //     this.currentTime = new Date(h,m)
  //   }
  // }
  
  /*
    做了些什么呢？上面的例子类直接实现接口，但是constructor方法不会被检测到，则会报错
    下面的例子，参数类型指定为接口，传入的参数是class constructor符合接口，则不会报错
  */
  interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
  }
  interface ClockInterface {
    tick():void;
  }

  function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
      return new ctor(hour, minute);
  }

  class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
      console.log("beep beep");
    }
  }
  class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
      console.log("tick tock");
    }
  }

  let digital = createClock(DigitalClock, 12, 17);
  let analog = createClock(AnalogClock, 7, 32);
  console.log(digital,analog); 

  /*
    自己写一点
    注意class e不写constructor竟然不报错，只是在指定constructor的形参类型不符合接口时报错
    注意new关键字的作用
  */
  interface demo {
    new (a: number,b:string):void
  }
  // class A implements demo { // 报错
  //   constructor (a:number,b: number) {}
  // }
  let func: (a: demo, b:boolean) => boolean = (a,b)=>{
    return b
  }
  class e{
    constructor (a:number,b:string){
    }
    tick(){
      console.log('tick');
    }
  }
  func(e, false)
}

/*
  接口继承，拆分接口然后更好组织
*/
{
  interface a {
    color: string
  }
  interface b extends a{
    weight: string | number
  }
  let c = <b>{}
  c.color = '#fff000'
  c.weight = 123

  type A = 'J' | 'K'
  interface B { name: string}
  
}

export {}