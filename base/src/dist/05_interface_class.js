"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(`我是${this.name}`);
    }
}
let s = new Student('zcv');
s.say();
