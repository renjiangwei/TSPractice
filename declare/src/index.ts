const b:a = {
  a: 1
}
const aaa = (a: {a: string,b: number}) => {
  return a
}
type a = Extract<'a', 'a' | 'b'>


interface P {
  name: string;
}
interface A {
  name: string;
  sex: number;
}

let p: P = {
  name: '1'
}
let aa: A = {
  name: 'a',
  sex: 1
}
p = aa
aa = p


let f1 = (p: P) => {
  p.name
}
let f2 = (a: A) => {
  a.sex
}
// f2 = f1
f1 = f2
f1(p)

let f:Intl.Collator
export {
  
}