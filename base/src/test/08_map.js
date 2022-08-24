Array.prototype.mapFn = function(fn) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    // console.log(i,this[i], this)
    arr.push(fn(this[i], i, this))
  }
  return arr
}

let a = [1,2,3]
// let fn = (item, index, array) => {
//   return item * 2
// }
// let b = a.map(fn)

// Array.prototype.mapFn.call(a, (aitem, index, arr) => {
//   console.log(aitem, index, arr)
// })

let b = a.mapFn((item, index, arr) => {
  console.log(item, index, arr)
  return (item + 3) * 2
})
console.log(b, 'b')
a.some(i => {
  
})
