"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let p1 = new Person('asd', 1);
p1.age;
let p2 = {
    name: 'asd',
    age: 2
};
class Student extends Person {
    constructor(name, age, m) {
        super(name, age);
        this.major = m;
    }
}
let s1 = new Student('qwe', 1, 'cs');
let s2 = {
    name: 'asd',
    age: 2,
    major: 'c'
};
