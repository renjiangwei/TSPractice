setTimeout(() => {
  let p = new Promise((resolve, reject) => {
    console.log('promise 1')
    resolve(123)
  })
  p.then(res => {
    console.log(res, 'res 1');
  })
  console.log('time out1');
}, 1000)

setTimeout(() => {
  let p = new Promise((resolve, reject) => {
    console.log('promise 2')
    resolve(123)
  })
  
  p.then(res => {
    console.log(res, 'res 2');
  })
  console.log('time out2');
}, 400)
// setInterval()
let a = 1
let b = 2
console.log(a);
console.log(b);

let p = new Promise((resolve, reject) => {
  console.log('promise')
  resolve(123)
})

p.then(res => {
  console.log(res, 'res');
})