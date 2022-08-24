
type A<T> = T extends (infer U)[] ? U : never
type B = number[]
let a:A<B> = 1

type InferString<T extends string> = T extends `${infer First}${infer _}` ? First : [];
let s:InferString<'Jonney'> = 'J'

interface tableList {
  name: string
}
type a = Promise<tableList[]>
type b = a extends Promise<infer U> ? U : never
let aaaa:a = Promise.resolve<tableList[]>([{name: 'dd'}])
let bbbb:a = new Promise((resolve, reject) => {resolve([{name: 'd'}])})

// infer 拿出array<>里的
type c = Array<tableList>
type d = c extends Array<infer U> ? U : never
{
  // infer 拿字符串
  type a<T> = T extends `${infer U}${infer _}` ? U : never
  type b = a<'dfg'>
}
{
  // infer 拿数组项
  type a<T> = T extends [infer U, ...infer F] ? U : never
  type b = a<['1','d', 'fd']>
}
{
  // infer 拿函数参数
  type a = (x: string, y: number) => void
  type b<T> = T extends (...args: infer U) => any ? U : never
  type c = b<a>
}
{
  // infer 拿函数返回值
  type a = () => {a: string, b: number}
  type b<T> = T extends () => infer U  ? U : never
  type c = b<a>
}
{
  // infer 拿Promise<>
  type a = Promise<{ data: string, code: number, success: boolean}>
  type b<T> = T extends Promise<infer U> ? U : never
  type c = b<a>
  type d = Partial<c>
}
// infer 联合类型
type f = {a: string, b: number}
type g<T> = T extends {a: infer U, b: infer U } ? U : never
type h = g<f>

type i<T> = T extends `${infer U}${infer U}${infer F}` ? U : never
type j = i<'1fg'>

// infer 交叉类型
type K2<T> = T extends {a: (x: infer U) => void,b: (x:infer U) => void} ? U : never
interface l {a: (x: {name: string}) => void, b: (x: {age: number}) => void}
type e = K2<l>

// string 转联合
{
  let a = 'q123' as const
  type StringToArray<T, A extends any[] = []> = T extends `${infer L}${infer R}` ? StringToArray<R, [...A, L]> : A
  type b = StringToArray<typeof a>
}
{
  let aa = Date()
  type a = typeof aa
}
export {}