/**
 * 实现 Pick<T, U>
 * 
 */
{
  type a = {
    a: string,
    b: string,
    c: number,
    d: object,
    e: Array<any>
  }
  type pick<T, K extends keyof T = keyof T> = {
    [I in K]: T[I]
  }
  type c = pick<a, 'a' | 'e'>
}

/**
 * 实现 Readonly<T>
 */
{
  type a = {
    a: string,
    b: string,
    c: number,
    d: object,
    e: Array<any>
  }
  type myReadonly<T> = {
    readonly [K in keyof T] : T[K]
  }
  type b = myReadonly<a>
}

/**
 * 实现 元组转对象TupleToObject<T>
 * 注意：
 * 1. as const; as const 之前， 推断let a = [1,2,3] 为 number[]，是不确定元组个数的；
 *    as const 之后，推断为 readonly [1,2,3], 确定了个数为3，值也确定了
 * 2. T[number] 数组的每一项组成的联合类型
 */
{
  const aaa = ['dfag', 'dfv', 'cadd'] as const
  type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K
  }
  type b = TupleToObject<typeof aaa>
}
/**
 * First<T> 传入数组T并返回第一个元素类型
 */
{
  type a = ['a', 'b', 'c']
  type First<T extends any[]> = T extends [] ? never : T[0]
  type b = First<a>
}
{
  type a = ['axzx', 'df', 'f']
  type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
  type b = First<a>
}
{
  type a = ['c','b']
  type First<T extends any []> = T extends [infer U, ...infer R] ? U : never
  type b = First<a>
}

/**
 * Last<T> 传入数组T并返回最后一个元素类型
 */
{
  type a = [5,3,8,9]
  type Last<T extends any[]> = T extends [...infer L, infer R] ? R : never
  type b = Last<a>
}

/**
 * 获取数组元素长度Length<T>
 */
{
  type a = [1,3,4,5]
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
  type myExclude<T, F> = T extends F ? never : T
  type b = myExclude<a, 'dasx'>
}

/**
 * Include<T, U> 选出T中 U中有的
 */
{
  type a = 'sad' | 'good' | 'exctite'
  type Include<T, F> = T extends F ? T : never
  type b = Include<a, 'sad' | 'dsdd'>
}

/**
 * Promise<T> 获取T,
 * 注意1：infer
 * 2：递归
 */
{
  let a = Promise.resolve('df')
  type GetPromiseResolveType<T extends Promise<any>> = T extends Promise<infer U> ? U : never
  type b = GetPromiseResolveType<typeof a>
  
  type GetPromiseResolveType2<T extends Promise<any>> = T extends Promise<infer U> ? U extends Promise<infer G> ?  GetPromiseResolveType2<U> : U : never
  type aa = Promise<Promise<Promise<Promise<Promise<string>>>>>
  type c = GetPromiseResolveType2<aa>
}

/**
 * IF<A,B,C> A为boolean A为true取B A为false取C
 */
{
  type IF<B extends boolean, T, F> = B extends true ? T : F
  type a = IF<true, 'd', 'vf'>
  type b = IF<false, 'd', 'vf'>
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
  type Equal<X, Y> = (<T>() => T extends X ? 1:2) extends (<T> () => T extends Y ? 1: 2) ? true : false
  type a = Equal<{a: string}, {a:string}>
  type Include<T extends any[], ITEM> = T extends [infer L, ...infer R] ? Equal<L, ITEM> extends true ? true : Include<R, ITEM> : false
  type b = Include<[1,2,3,4], 3>
}
/**
 * 测试另一种Include<A, ITEM>
 */
{
  type a = [1,2,3,4,5]
  type Include<T extends any[], F> = F extends T[number] ? true : false
  type b =Include<a, 6>
  
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
  type a = (a: string, b :number) => void
  type GetParams<T extends (...arg: any[]) => any> = T extends (...args: infer U) => any ? U : never
  type b = GetParams<a>
}

/**
 * GetReturnType<F> 获取函数返回类型
 */
{
  type a = () => string | number
  type GetReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer U ? U : never
  type b = GetReturnType<a>
}

/**
 * StringLength
 * 注意T存遍历到的每一个元素，最后T的长度就是string的长度
 */
{
  type a = 'asdasffsdc'
  type StringLength<T extends string, S extends string[] = []> = T extends `${infer L}${infer R}` ? StringLength<R, [...S, L]> : S['length']
  type b = StringLength<a>
}


/**
 * Required
 */
{
  interface a {
    name: string,
    i?: number,
  }
  type MyRequired<T> = {
    [K in keyof T]-?: T[K]
  }
  type b = MyRequired<a>
}
/**
 * Partial
 */
{
  type a = {
    sdf: string,
    i?: number,
  }
  type MyPartial<T> = {
    [K in keyof T]?: T[K] | undefined
  }
  type b = MyPartial<a>
}
/**
 * Omit 
 */
{
  type a = {
    a: string,
    b: number, 
    c: boolean,
  }
  type MyOmit<T, K extends keyof a = never> = {
    [I in Exclude<keyof T, K>] : T[I]
  }
  type b = MyOmit<a, 'a' | 'c'>
}
/**
 * Record
 */
{
  type a = {
    name: string,
  }
  type MyRecord<K extends string | number | symbol,T> = {
    [I in K]: T
  }
  type b = MyRecord<string | number | symbol, a>
  type c = MyRecord<'213', a>
  let c:c = {
    213: {name: 'sdf'}
  }
}
{
  type a = Extract<'a' | 'b', 'a' | 'c'>
}
{
  type a = {
    a: string,
    b: number,
    c?: string,
    d?: number,
  }
  type Record2<T> = {
    [K in keyof T]: T[K]
  }
  type b = Record2<a>
  type c = Pick<a, 'c'>
  type d = {} extends c ? true : false
}
/*
  RequiredKeys<T> 获取T中必填项的联合类型
*/
{
  type a = {
    name: string,
    age: number,
    job?: string,
    abc?: number,
  }
  type RequiredKeys<T> = {
    [P in keyof T]: T extends Record<P, T[P]> ? P : never;
  }[keyof T]

  type r = {
    [K in keyof a]: K
  }[keyof a]

  type b = RequiredKeys<a>
  type c = Record<keyof a, a[keyof a]>
  
  type RequiredKeys2<T> = {
    [P in keyof T]-?: {} extends Pick<T, P> ? never : P
  }[keyof T]
  type d = RequiredKeys2<a>

  type tt = {a:string,b:number} extends {a:string} ? true : false
}
{
  /*
    测试record
  */
  type a = {
    name: string,
    age: number,
    job?: string,
    abc?: number,
  }
  type TEST<T> = {
    [K in keyof T]: T extends Record<K, T[K]> ? K : never
  }
  type b = TEST<a>
  type c = a extends {job: string} ? true : false
}
/*
  OptionalKeys<T> 获取T中可选择的key的联合类型
*/
{
  type a = {
    name: string,
    age: number,
    job?: string,
    abc?: number,
  }
  type OptionalKeys<T> = {
    [K in keyof T]: {} extends Pick<T, K> ? K : never
  }[keyof T]
  type b = OptionalKeys<a>
  // type b = {} extends Pick<a, keyof a> ? true : false
}
{
  type a = {
    name: string,
    age: number,
    job?: string,
    abc?: number,
  }
  type b = {} extends Pick<a, 'name'> ? true : false
  type c = {} extends {n?: string} ? true : false
}
{

}
export {}