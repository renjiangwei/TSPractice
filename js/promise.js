// 1.类,构造方法需要传一个函数、构造函数内部执行该回调、并传入内置的resolve、reject方法
// resolve将promise的状态由pending转为fulfilled，then第一个回调中的参数就是resolve的结果
// reject将promise的状态由pending转为rejected，then的第二个回调或者catch中的回调的参数是reject的结果
// 注意reject后 catch或者then中的回调只会执行一个，除非上一个catch中又抛出错
// 但是then可以链式调用很多次

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(1)
    reject(new Error(123))
  }, 1000)
})
// 两次catchd
p.then((a) => {
  console.log(a,'resolve')
}, (err) => {
  console.log(err, 'reject')
  throw new Error('new error')
}).catch((err) => {
  console.log('err2', err)
})

// 多次then
const p2 = new Promise((resovle, reject) => {
  setTimeout(() => {
    resovle('r1')
  }, 2000)
})
p2.then(res => {
  console.log(res, 'res')
  // return 'rt1' // 可以是字符串可以是promie，字符串的话就包装成fulfilled promise；
  return Promise.reject('rej') // 返回promise，此时整个promise的状态由返回的这个promise决定
}).then(res2 => {
  console.log(res2, 'res2')
}).catch(err => {
  console.log(err, 'err')
})

// finally类似trycatch的finally、不论状态变为fulfilled还是rejected都执行传入的回调

// 2.虽然是构造函数，但是函数上绑定了几个方法
// Promise.all // 参数为数组，数组项是promise，返回所有执行结果Promise<Array<unknown>>
// 如果有一个rejected则不会执行成功的回调函数，
const p3 = Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
  4,
  Promise.reject(5)
])
p3.then(res => {
  console.log(res, 'res3')
})
.catch(err => {
  console.log(err, 'err3')
})
// Promise.race([])数组是promise数组，但是这些promise最先resolve作为回调的结果

const p4 = Promise.race([
  Promise.reject(1),
  Promise.resolve(2),
  Promise.resolve(3),
]).then(res => {
  console.log(res, 'res4')
}).catch(err => {
  console.log(err, 'err4')
})

Promise.resolve
Promise.reject
