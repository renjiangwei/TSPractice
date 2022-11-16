"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAll = void 0;
const addAll = (...arg) => {
    console.log(arg, 'asad');
    return arg.reduce((a, b) => a + b);
};
exports.addAll = addAll;
