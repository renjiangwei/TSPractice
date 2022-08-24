let a = 10
let b = {
  name: 'bbb'
}
// export default a  // 默认导出 import d from ''
/*
  逐一导出，此时不能 import d from '' 必须解构 import {a,b} from ''   或者 import * as d from ''
*/
export {
  a,
  b
}
// export {
//   b
// }
export function c() {
  console.log('cccc');
}
export const e = 1