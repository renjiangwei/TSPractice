"use strict";
// let myBind = (fn:Function, thisArg: any, args: any[]) =>{
//   return () => {
//     fn.apply(thisArg, args)
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
Function.prototype.myBind = function (thisArg, args) {
    return () => {
        return this.apply(thisArg, args);
    };
};
let sum = (a, b) => {
    return a + b;
};
console.log(sum.myBind(null, [2, 4])());
console.log(sum.bind(null, 2, 4)());
console.log(sum.apply(null, [2, 3]));
