let b:AA = 'H'
console.log(PEOPLE_COUNT)
let s:SIZE = 'xl'
type clouth = {
  name: string,
  size: SIZE,
  price: number,
}
let c: clouth = {
  name: 'df',
  size: 's',
  price: 12.3
}

type GET_SIZE<T> = T extends {size: infer U} ? U : never
type COUSTOM_SIZE = GET_SIZE<clouth> | 'xxl'

getSum = (...args) => {
  return args.reduce((pre, item ) => pre + item)
}
console.log(getSum(1,3,4,2))
