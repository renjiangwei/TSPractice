"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
  类
  js中声明类，类中的变量可以直接在构造函数中this.name = name这种方式赋值，
  但是ts中这样会报错，需要提前声明这个变量和类型，再进行构造函数操作
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("person的构造函数调用了");
    }
    say() {
        console.log("woshi" + this.name + this.age + "sui");
    }
}
let p = new Person('zxc', 24);
console.log(p.name);
p.say();
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
        console.log("stu的构造函数调用了");
    }
    say() {
        super.say(); // 父类的方法
        console.log("woshi" + this.name + this.age + "sui major:" + this.major + '!');
    }
}
let s = new Student('zcv', 24, 'sf');
s.say();
console.log('--------------------------------------');
/*
  public 公开 可以在类内部使用、可以在实例上调用
  protected 保护 可以在类内部使用、可以在子类内使用、不可以在实例上使用
  private 私有 只能在 类内部使用、不能在子类中以及实例中使用
  static 静态属性，只能类名.Key
  注意一点，class内的属性方法都放在了prototype上，实例可以继承
  static属性方法放在了function上，也就是说静态属性只能类名.property调用
*/
{ // 静态属性
    class Animal {
        constructor(name) {
            this.name = name;
            Animal.number++;
            this.no = Animal.number;
        }
        say() {
            console.log(`im ${this.name} my no is ${this.no} i have ${Animal.number - 1} friends`);
        }
    }
    Animal.number = 0;
    let aa = new Animal('aa');
    aa.say();
    console.log(Animal.number);
    let bb = new Animal('bb');
    bb.say();
    console.log(Animal.number);
    let cc = new Animal('cc');
    bb.say();
}
{ // private
    class Animal {
        constructor(name) {
            this.name = name;
        }
        say() {
            console.log('im ' + this.name);
        }
    }
    class Cat extends Animal {
        constructor(name) {
            super(name);
        }
        say() {
            // this.name // 报错
            console.log('cat say');
        }
    }
    let cat = new Cat('cat');
    cat.say();
    let ani = new Animal('snake');
    ani.say();
}
/*
  抽象类，抽象类中定义的抽象方法，不用实现、子类必须实现抽象方法，相当于父类给子类定义了一个模板，子类必须实现他，
  抽象类不能创建实例，只负责给子类规定结构？
  // 有点像什么呢？父亲想做一件事，但是自己做不到，就想儿子一定要完成
*/
{
    class Animal {
        constructor() {
        }
    }
    class Cat extends Animal {
        constructor() {
            super();
        }
        test() {
            console.log('test');
        }
    }
    let cat = new Cat();
    cat.test();
}
