/*
  装饰器？干嘛的
*/

// {
//   function a() {
//     console.log('a');
//     return function (t:object, key: string, des: PropertyDescriptor) {
//       console.log(t, key, des);
//     }
//   }
//   class C {
//     @a()
//     method () {

//     }
//   }
//   let c = new C()
//   console.log(c);
// }

/*
  方法装饰器 三个参数 target propertyKey成员名字 descriptor成员描述
*/
function f(arg: {data?: Function}) {
  console.log("f(): evaluated");
  return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(arg);
    console.dir(target);
    console.dir(propertyKey);
    console.dir(descriptor);
    console.log("f(): called");
  }
}

function g() {
  console.log("g(): evaluated");
  return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    console.log("g(): called");
  }
}
class C {
  @f({
    data () {
      return {

      }
    }
  })
  @g()
  say() {}
} 

/*
  类装饰器 只有一个参数constructor 类的构造函数
*/
{
  console.log('-----------------');
  function a() {
    return function (constructor: Function) {
      console.dir(constructor);
    }
  }
  @a()
  class A {
    name: string
    constructor (arg: string) {
      this.name = arg
    }
  }
  let ia = new A('ad')
  console.log(ia);
}

/*
  属性装饰器 两个参数 target key
*/
{
  console.log('---属性装饰器');
  function a(){
    return function(target: object, key: string) {
      console.log(target, key);
    }
  }
  class A{
    @a()
    name: string
    constructor (name: string) {
      this.name = name
    }
  }
  let b = new A('qwe')
  console.log(b);
}

/*
  参数装饰器 三个参数 target key index
*/
export {}