let self = (a: number): number => {
  return a
}
let b = (b: string) : string => {
  return b
}
type a = (a: number)=> number
type b = (a: string)=> string
type c = (a: any) => any
type d<T = number> = (a: T) => T 
let func:d<string> = (a: string) => {
  return a
}

let st:d = (a: number) => {
  return 1
}
type e<T, K extends keyof T> = () => void
type f = {
  a: string,
  b: number,
}
type g<T> = {
  [K in keyof T]: T[K]
}
type h = g<f>
{
  type f = {
    a?: string,
    b: number,
  }
  type a = Required<f>
}
{
  type f = {
    a?: string,
    b: number,
    c: boolean
  }
  type a = Pick<f, 'a'>
}
{
  type f = {
    a?: string,
    b: number,
    c: boolean
  }
  type b = {
    c: boolean,
    d: string
  }
  
  type Insertion<T, K> = {
    [L in Extract<keyof T, keyof K>]: T[L]
  }
  // T => 'a' | 'b' | 'c'
  // K => 'b' | 'd'
  type c = Insertion<f, b>
  // T extends 
  // 'a' extends
  {
    type d = Exclude<'a' | 'b', 'b' | 'd'>
    type e = Extract<'a' | 'b', 'b' | 'd'>
    type f = true extends true ? number : string
    type g = 'a' extends 'a' | 'b'  ? number : string
    type h<T> = T extends 'a' ? T : never
    type i = h<'a' | 'b'>
    // 'a' extends 'a' ? 'a' : never  | 'b' extends 'a' ? b : never
    // 'a' | never
    type j = 'a' | never | never | never
  }
}
{
  // 接口泛型1
  interface DF<T> {
    a: T,
    b: T[]
  }
  let a:DF<string> = {
    a: '',
    b: ['sad']
  }
  
}
{
  // 函数泛型1
  let a: <T>(arg: number, b: T)=>T 
  a = <T>(b: number, c: T) => {
    b
    return c
  }
  a<string>(1, 'fd')
  // 函数泛型2
  interface Q {
    <T>(a: T): T
  }
  let b: Q = <T>(ac: T) => {
    return ac
  }
  b<number>(1)
}
{
  // 类泛型
  class S<T> {
    static num: number
    public a: T
    constructor (a: T) {
      S.num = 1
      this.a = a
    }
  }
  let a: S<string> = new S<string>('123')
}
export {}
