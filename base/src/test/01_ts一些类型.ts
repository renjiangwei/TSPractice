/**
 * 实现 Pick<T, U>
 * 
 */
type a = {name: string, age: number, vocal: string}
type aa = keyof a
type aaa = aa extends 'name' | 'age' | 'vocal' | 'sf' ? true : false
{
  type pick<T, U extends keyof T> = { // U里面是T的key的联合类型
    [K in U]: T[K] // key取U里的， 值是T[K]
  }
  type b = pick<a, 'age' | 'vocal'>

}

/**
 * 实现 Readonly<T>
 */
{
  type myReadonly<T> = {
    readonly [K in keyof T]: T[K]
  }
  type b = myReadonly<{name: string}>
}
/**
 * 实现 元组转对象TupleToObject<T>
 * 注意：
 * 1. as const; as const 之前， 推断let a = [1,2,3] 为 number[]，是不确定元组个数的；
 *    as const 之后，推断为 readonly [1,2,3], 确定了个数为3，值也确定了
 * 2. T[number] 数组的每一项
 */
{
  const aaa = ['dfag', 'dfv', 'cadd'] as const
  type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K
  }
  type b = TupleToObject<typeof aaa>
}
{
  const a = ['sf', 'vv', 3] as const
  type b = {
    [K in typeof a[number]]: K
  }
}
/**
 * First<T> 传入数组T并返回第一个元素类型
 */
{
  type a = [1,2,3]
  type First<T> = T extends [infer U, ...infer H] ? U : never // infer获取数组的项
  type b = First<a>
}
{
  type a = ['asd', 'fg']
  type First<T extends any[]> = T extends [] ? never: T[0] // 如果T是空数组
  type b = First<a>
}
{
  type a = ['ddg', 'gh']
  type First<T extends any[]> = T['length'] extends 0 ? never : T[0] // 如果T length为0
  type b = First<a>
}
/**
 * Last<T> 传入数组T并返回最后一个元素类型
 */
{
  type a = [2,4,['d','f']]
  type Last<T extends any[]> = T extends [...infer U, infer H] ? H : never
  type b = Last<a>
}

/**
 * 获取数组元素长度Length<T>
 */
{
  type aa = [1, 2]
  type a = [1, 2, 3, 'fdf', 'dd', ...aa]
  type Length<T extends any[]> = T['length']
  type b = Length<a>
}

/**
 * Exclude<T, U> 实现内置的Exclude 排除T中 U中有的
 * 注意:之所以能这么用是有特殊情况，泛型extends和具体类型extends行为不同，泛型如果是联合类型，将使用<分配律>后结合为联合类型
 *     不是泛型时，则直接
 */
{
  type a = 'dfdg' | 'dfgazc' | 'dasx'
  type myExclude<T, U> = T extends U ? never : T
  type b = myExclude<a, 'dfdg' | 'sd'| 'dd'>
  type c = a extends 'dfdg' ? true : false
}

/**
 * Include<T, U> 选出T中 U中有的
 */
{
  type a = 'sdf' | 'fdfg' | 'dcc'
  type Include<T, U> = T extends U ? T : never
  type b = Include<a, 'fdfg' | 'dsd'>
}


/**
 * Promise<T> 获取T,
 * 注意1：infer
 * 2：递归
 */
{
  let a = Promise.resolve({a: 1, b: 2})
  type aa = Promise<Promise<{ds: string}>>
  type GetPromiseResolveType<T extends Promise<any>> = T extends Promise<infer U> ?
                                                                                    U extends Promise<any> ? 
                                                                                    GetPromiseResolveType<U>
                                                                                    : U
                                                                                  : never
  type b = GetPromiseResolveType<typeof a>
}

/**
 * IF<A,B,C> A为boolean A为true取B A为false取C
 */
{
  type IF<B extends boolean, I, J> = B extends true ? I : J
  type a = IF<true, 'sad', 'fgg'>
  type b = IF<false, 'sad', 'fgg'>
}

/**
 * Concat<T, F> 连接两个数组
 */
{
  type a = [1,2,3]
  type b = ['1','2']
  type Concat<T extends any[], F extends any[]> = [...T, ...F]
  type c = Concat<a,b>
}
/**
 * Include<A, ITEM>
 * 注意Equal实现
 * 递归
 */
{
  type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
  type Include<A extends any[], ITEM> = A extends [infer L, ...infer R] ?
                                                                          Equal<L, ITEM> extends true ?
                                                                          true :
                                                                          Include<R, ITEM>
                                                                        : false
  type a = Include<[1,2,3,4], 5>
}
/**
 * 测试另一种Include<A, ITEM>
 */
{
  type a = [1,2,3,4,5]
  type Include<A extends any[], ITEM> = ITEM extends A[number] ? true : false
  type b = Include<a, 7>

  // 原理？
  type c = a[number]
  
}
/**
 * Push<A, I>
 */
{
  type a = [1,2,3]
  type Push<A extends any[], I> = [...A, I]
  type b = Push<a, 'sdf'>
}

/**
 * Pop<A, L>
 */
{
  type a = [1,2,3,4]
  type Pop<A extends any[]> = A extends [...infer U, infer L] ? U : never
  type b = Pop<a>
  type c = Pop<b>
}
/**
 * Unshift<A, H>
 */
{
  type a = [1,2,3,4]
  type Unshift<A extends any[], H> = [H, ...A]
  type b = Unshift<a, 'ddf' | 'df'>
  let bb: b = ['ddf', 1, 2, 3, 4]
}
/**
 * Shift<A>
 */
{
  type a = [1,2,3,4]
  type Shift<A extends any[]> = A extends [infer U, ...infer R] ? R : never
  type b = Shift<a>
  type c = Shift<b>
}
/**
 * 实现Parameters<F> 获取函数的参数
 */
{
  type a = (a: string, b: string) => void
  type GetParams<F extends (...arg: any[]) => any> = F extends (...args: infer U) => any  ? U : never
  type b = GetParams<a>
  let bb:b = ['dfdg', 'fd']
  
}

/**
 * GetReturnType<F> 获取函数返回类型
 */
{
  type a = () => Promise<number>
  type aa = (a:string) => string
  type GetReturnType<F extends (...args: any[]) => any> = F extends ((...args: any[]) => infer U) ? U : never
  type b = GetReturnType<a>
  type c = GetReturnType<aa>
}
/**
 * StringLength
 * 注意T存遍历到的每一个元素，最后T的长度就是string的长度
 */
{
  type a = 'sdasdf'
  type StringLength<S extends string, T extends any[] = []> = S extends `${infer L}${infer R}` ? 
                                                                                                  StringLength<R, [...T, L]>
                                                                                                  : T['length']
  type b = StringLength<a>
}

export {}