"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
  interface，相当于定义了一个结构，这个类型的变量必须按照这个结构定义
*/
{
    let Gender;
    (function (Gender) {
        Gender[Gender["male"] = 0] = "male";
        Gender[Gender["female"] = 1] = "female";
    })(Gender || (Gender = {}));
    let a = {
        name: 'r',
        age: 24,
        gender: Gender.female,
        job: 'web'
    };
    let b = {
        name: 'r',
        age: 24,
        gender: 2,
    };
    console.log(a);
    console.log(b);
    let getByPage; // 声明变量
    getByPage = function () {
        console.log('ad');
        return 2; // 必须返回规定的类型，不能写别的类型 
    };
    getByPage({});
}
{
    let arr;
    let obj = {
        0: 'nadf',
        1: 'adav',
        length: 2
    };
    console.log(obj);
    let arr2;
    arr2 = ['23', 'gaf', 'fdag'];
    console.log(arr2);
}
{
    let arr;
    arr = ['dasd', 'gg'];
    console.log(arr);
}
/*
  类类型接口，和Java类似，类实现接口，必须实现内部的属性和方法

*/
{
    class Person {
        constructor(name) {
            this.name = name;
        }
        say(label) {
            return label;
        }
    }
}
/*
  类实现一个接口时，只检查类的*实例的类型*，不检查*静态部分*的类型，constructor方法是静态部分，不检查就导致无法实现接口中定义的方法
*/
{
    function createClock(ctor, hour, minute) {
        return new ctor(hour, minute);
    }
    class DigitalClock {
        constructor(h, m) { }
        tick() {
            console.log("beep beep");
        }
    }
    class AnalogClock {
        constructor(h, m) { }
        tick() {
            console.log("tick tock");
        }
    }
    let digital = createClock(DigitalClock, 12, 17);
    let analog = createClock(AnalogClock, 7, 32);
    console.log(digital, analog);
    // class A implements demo { // 报错
    //   constructor (a:number,b: number) {}
    // }
    let func = (a, b) => {
        return b;
    };
    class e {
        constructor(a, b) {
        }
        tick() {
            console.log('tick');
        }
    }
    func(e, false);
}
/*
  接口继承，拆分接口然后更好组织
*/
{
    let c = {};
    c.color = '#fff000';
    c.weight = 123;
}
