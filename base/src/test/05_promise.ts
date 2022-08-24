const sss = new Promise((resolve, reject) => {
  resolve('123')
})

interface PromiseThis {
  status: string,
  data: any,
  onFulfilledCallback: Function[],
  onRejectedCallback: Function[]
}
interface _Promise {
  new (fn: (resolve: Function, reject: Function) => any) : any
}
let _Promise = function(this: PromiseThis,fn: (resolve: Function, reject: Function) => any) {
  this.status = 'pending'
  this.data = undefined
  this.onFulfilledCallback = []
  this.onRejectedCallback = []
  const resolve = (data: any) => {
    if (this.status == 'pending') {
      this.status = 'fulfilled'
      this.data = data
      setTimeout(() => {
        this.onFulfilledCallback.forEach(f => {
          f(data)
        })
      })
    }
  }
  const reject = (data: any) => {
    if (this.status == 'pending') {
      this.status = 'rejected'
      this.data = data
      setTimeout(() => {
        this.onRejectedCallback.forEach(f => {
          f(data)
        })
      })
    }
  }
  fn(resolve, reject)
}
_Promise.prototype.then = function(onResovleCallback: Function, onRejectCallback: Function) {
  onResovleCallback = typeof onResovleCallback == 'function' ? onResovleCallback : () => {}
  onRejectCallback = typeof onRejectCallback == 'function' ? onRejectCallback : () => {}
  this.onFulfilledCallback.push(onResovleCallback)
  this.onRejectedCallback.push(onRejectCallback)
  if (this.status == 'pending') {
    return new _Promise((resolve, reject) => {
      
    })
  }
  if (this.status == 'fulfilled') {
    return new _Promise((resolve, reject) => {
      
    })
  }
  if (this.status == 'rejected') {
    return new _Promise((resolve, reject) => {
      
    })
  }
}
let p = new _Promise((resolve, reject) => {
  reject(321)
  resolve(123)
})
console.log(p instanceof _Promise)

p.then(res => {
  console.log(res)
}, err => {
  console.log('err', err)
})