let a = {
  b: {
    c: {
      d: 1
    }
  },
  say: () => {
    console.log('a.say');
  }
}

let cloneDeep = (objOrArray) => {
  console.log(objOrArray, 'objOrArray');
  if (objOrArray.toString() == '[object Object]') {
    let temp = {}
    Object.keys(objOrArray).forEach(k => {
      if (objOrArray[k].toString() == '[object Object]') {
        temp[k] = cloneDeep(objOrArray[k])
      }
      else if (Array.isArray(objOrArray[k])) {
        temp[k] = cloneDeep(objOrArray[k])
      }
      else {
        temp[k] = objOrArray[k]
      }
    })
    return temp
  } 
  else if (Array.isArray(objOrArray)) {
    let temp = []
    objOrArray.forEach(item => {
      if (item.toString() == '[object Object]') {
        temp.push(cloneDeep(item))
      } else if (Array.isArray(item)) {
        temp.push(cloneDeep(item))
      } else {
        temp.push(item)
      }
    })
    return temp
  }
}

let b = cloneDeep(a)

b.b.c.d = 10
console.log(a, b, '----');

let c = {
  a: [
    {d:1},
    {d:2}
  ]
}
let d = cloneDeep(c)
c.a.forEach(i => {
  i.d = i.d + 123
})
console.log(d, 'ddddd', c, 'ccccccccccc');
