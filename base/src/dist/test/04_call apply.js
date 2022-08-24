"use strict";
Function.prototype._call = function (obj = {}, ...args) {
    obj.fn = this;
    return obj.fn(...args);
};
let sum = function (a, b) {
    if (this.a) {
        return this.a + a + b;
    }
    return a + b;
};
console.log(sum._call({ a: 123 }, 2, 3));
