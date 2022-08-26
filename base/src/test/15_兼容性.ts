// 兼容性 对象
{
  type a = {
    name: string
  }
  interface b {
    name: string
  }
  let aa:a = {
    name: '123'
  }
  let bb:b = {
    name: 'sad'
  }
  aa = bb
  aa = {name: 'asd', df: 'as'} // 直接赋值会报错
  let c = {name: 'asd', a: 12}
  aa = c // 间接赋值只会看c是否满足类型a
  let d = {a: 24}
  aa = d // 报错 d中属性不满足a
  // 可以看出能兼容的是拥有所有属性，多出属性也满足
}
{
  // 兼容性 函数 注意表现有点不一样，
  // 函数指定类型后赋值，函数的形参可以少但不能多
  type a = (a:string, b:number) => void
  let a:a = (a: string) => {} // 少形参没问题
  let b:a = (a:string,b:number,c:boolean) => {}// 多形参会报错
  {
    // 同样兼容性里
    type a = (a:string, b:number) => void
    type b = (a: string) => void
    let c:a = (a:string, b:number) => {}
    let d:b = (a:string) => {}
    d = c // 参数多的赋值给参数少的会报错
    c = d // 参数少的赋值给参数多的不会报错
  }
  type c = ((a: string) => void) extends ((a: string, b: number) => void) ? 1 : 2
  {
    // 返回值的兼容性
    type a = () => {a: string, b: number} 
    type b = () => {a: string}
    let c:a = () => {return {a: '23', b: 1}}
    let d:b = () => ({a: 'wed'})
    c = d // 返回值对象少的不能赋值给多的
    d = c // 返回值是对象时，就像对象的兼容性，多出属性可以赋值给少的
  }
}
