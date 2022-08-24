"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("person的构造函数调用了");
    }
}
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
        console.log("stu的构造函数调用了");
    }
    say() {
        console.log("woshi" + this.name + this.age + "sui major:" + this.major + '!');
    }
}
let s = new Student('zcv', 20, 'mg');
s.say();
let stu = new Student('rjw', 25, '');
