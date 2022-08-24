// class EventBus {
//   constructor() {
//     this.taskMap = {}
//   }
//   emit (key, fn) {
//     if (this.taskMap[key]) {
//       this.taskMap[key].push(fn)
//     } else {
//       this.taskMap[key] = [fn]
//     }
//   }
//   on (key, ...args) {
//     this.taskMap[key] && this.taskMap[key].forEach(f => {
//       f(...args)
//     })
//   }
  
//   deleteFn(key, fn) {
//     if (this.taskMap[key]) {
//       for(let i = 0; i< this.taskMap[key].length; i++) {
//         if (this.taskMap[key][i] === fn) {
//           this.taskMap[key].splice(i, 1)
//         }
//       }
//     }
//   }

// }
// let e = new EventBus()
// let a = () => {
//   console.log('123a')
// }
// e.emit('a', a)
// e.emit('a', (a,b,c) => {
//   console.log('123b',a,b,c)
// })
// e.deleteFn('a', a)

// e.on('a', 1,2,3)


const evtBus = function () {
  this.taskMap = {}
  // this.on = function (key, fn) {
  //   this.taskMap[key] = this.taskMap[key] || []
  //   this.taskMap[key].push(fn)
  // }
  // this.emit = function(key) {
  //   if (this.taskMap[key]) {
  //     this.taskMap[key].forEach(f => {
  //       f()
  //     })
  //   }
  // }
}
evtBus.prototype.on = function (key, fn) {
  this.taskMap[key] = this.taskMap[key] || []
  this.taskMap[key].push(fn)
}
evtBus.prototype.emit = function(key) {
  if (this.taskMap[key]) {
    this.taskMap[key].forEach(f => {
      f()
    })
  }
}
let ee = new evtBus()
ee.on('a', () => {console.log('123a')})
ee.on('a', () => {console.log('123b')})
ee.emit('a')

console.log(ee, 'ee');