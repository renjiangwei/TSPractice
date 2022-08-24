"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Door {
    alert() {
        return 'qwe';
    }
}
class D {
    constructor(demo, a, d) {
        this.demo = demo;
        this.a = a;
        this.d = d;
    }
    alert() {
        return 'ad';
    }
}
let d = new Door();
d.alert();
let d2 = {
    a: 'asd',
    d: 'd',
    alert: () => {
        return 'sad';
    }
};
let d3 = {
    alert() {
        return 'ad';
    },
    off() {
    },
    open() {
    }
};
