// 树形结构接口
interface treeDataBase {
  id: string,
  name: string
}
type LinkChildren<T> = T & {children?: LinkChildren<T>[]}
let b: LinkChildren<treeDataBase>[] = [
  {
    id: 'id',
    name: 'name',
    children: [
      {
        id: '',
        name: ''
      }
    ]
  }
]

// 索引类型 keyof
let treeData: treeDataBase = {
  id: '123',
  name: 'name123'
}
function findKeyOfData<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(i => obj[i])
}
console.log(findKeyOfData<treeDataBase, keyof treeDataBase>(treeData, ['id', 'name']), 'find');
/*
  Readonly 接口内字段转换成只读
    type Readonly<T> = {d}
  Partial 接口内字段转成可选
    type Partial<T> = { [K in keyof T]?: T[K] }
  Required 与 Partial 相反， 接口内字段全部转为不可选
    type Required<T> = { [K in keyof T]-?: T[K] }
  Pick 接口内字段选取部分字段 比如有个接口key很多，选部分成一个新type
    type Pick<T, K extends keyof T> = {
      [I in K]: T[I]
    }
  Record 生成一个类型，key为number | string | symbol, value为 T
    type Record<K extends string | number | symbol, T> = {
      [P in K]: T
    }
  Exclude<T, U> T中排除U中有的, 注意T,U
    type Exclude<T, U> = T extends U ? never : T
  Extract<T, U> T中取U中有的，
    type Extract<T, U> = T extends U ? T : never
  Omit<T, K> T中剔除K的属性 相当于反选Pick，Pick从接口中拿一些key， Omit去掉一些key
    type Pick<T, K extends keyof T> = {
      [P in K]: T[P]
    }
    type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
*/
type aa = Readonly<treeDataBase>
let a:Readonly<treeDataBase> = {
  id: 'asd',
  name: 'name',
}
type cc = Pick<treeDataBase, 'id'>
let c: Pick<treeDataBase, 'id'> = {
  id: 'id',
}
type dd = Record<string, treeDataBase>
let d: Record<string, treeDataBase> = {
  abc: {id: 'asd', name: 'dsad'},
}
type ee = Required<{id?: string}>
let e: Required<{id?: string}> = {
  id: 'sad'
}
type ASDF = 'name' | 'id' | 'age'
type QWER = 'id' | 'age' | 'children'
type ff = Exclude<ASDF, 'name' | 'asd'>
let f: Exclude<ASDF, 'name' | 'asd'> = 'age'
type Test<T, U> = T extends U ? never : T
let g: Test<ASDF, QWER> = 'name'
type hh = Omit<treeDataBase, 'id'>
let h: Omit<treeDataBase, 'id'> = {
  name: 'name',
}
type i = Extract<ASDF, 'id' | 'age'| 'asdfggggg'>


type A = 'a' | 'b'
type b = A extends '' | 'b' ? never : A
type c = Exclude<A, '' | 'b'>
// type Exclude<T, U> = T extends U ? never : T;

// // 相当于: type A = 'a'
// type A = Exclude<'x' | 'a', 'x' | 'y' | 'z'>


export {}