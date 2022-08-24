interface Function {
  _call: (obj: any, ...args: any[]) => any,
  _apply: (obj: any, ...args: any[]) => any,
}
type a = typeof Function.prototype.call
type b = ( this: {a: number}, thisArg: any, ...argArray: any[]) => any

Function.prototype._call = function (obj: any = {}, ...args: any[]) {
  obj.fn = this
  return obj.fn(...args)  
}

let sum:b = function(a: number, b: number) {
  if (this.a) {
    return this.a + a + b
  }
  return a + b
}

console.log(sum._call({a: 123}, 2,3))

Function.prototype._apply = function(obj: any = {}, args: any[]) {
  obj.fn = this
  return obj.fn(...args)
}
console.log(sum._apply({b: 1}, [1,2]))
