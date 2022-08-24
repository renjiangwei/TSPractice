/*
  交叉类型 &
*/ 
{
  interface Type {
    name: string
  }
  interface T {
    age: number
  }
  let a = <Type & T>{
    name: 'qwe',
    age: 123,
    daf: 'daf'
  }
  console.log(a);
  
  let b: Type & T = {
    name: 'asd',age: 123
  }
  console.log(b);
}

/*
  联合类型 | 之前有用过Array<number | boolean>
*/
{
  let a: number|string 
  a = "123px"
  a = 123
}
/*
  
*/
{
  type A = [string, number]
  let a:A = [',',2]
  type B<T> = T extends (infer U)[] ? U : never
  let b:B<A> = ''
  let c:B<A> = 2
}
export {}