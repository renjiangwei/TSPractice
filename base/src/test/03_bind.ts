// let myBind = (fn:Function, thisArg: any, args: any[]) =>{
//   return () => {
//     fn.apply(thisArg, args)
//   }
// }

Function.prototype.myBind = function(thisArg: any, args: any[]) {
  return () => {    
    return this.apply(thisArg, args)
  }
}
let sum = (a: number, b:number) => {
  return a + b
}
console.log(sum.myBind(null, [2,4])());
console.log(sum.bind(null, 2,4)());
console.log(sum.apply(null, [2,3]));

export {}