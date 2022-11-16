export const addAll = (...arg) => {
  console.log(arg, 'asad')
  return arg.reduce((a, b) => a + b)
}