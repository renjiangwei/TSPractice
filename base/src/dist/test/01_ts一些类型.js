"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
}
/**
 * 实现 Readonly<T>
 */
{
}
/**
 * 实现 元组转对象TupleToObject<T>
 * 注意：
 * 1. as const; as const 之前， 推断let a = [1,2,3] 为 number[]，是不确定元组个数的；
 *    as const 之后，推断为 readonly [1,2,3], 确定了个数为3，值也确定了
 * 2. T[number] 数组的每一项
 */
{
    const aaa = ['dfag', 'dfv', 'cadd'];
}
{
    const a = ['sf', 'vv', 3];
}
/**
 * First<T> 传入数组T并返回第一个元素类型
 */
{
}
{
}
{
}
/**
 * Last<T> 传入数组T并返回最后一个元素类型
 */
{
}
/**
 * 获取数组元素长度Length<T>
 */
{
}
/**
 * Exclude<T, U> 实现内置的Exclude 排除T中 U中有的
 * 注意:之所以能这么用是有特殊情况，泛型extends和具体类型extends行为不同，泛型如果是联合类型，将使用<分配律>后结合为联合类型
 *     不是泛型时，则直接
 */
{
}
/**
 * Include<T, U> 选出T中 U中有的
 */
{
}
/**
 * Promise<T> 获取T,
 * 注意1：infer
 * 2：递归
 */
{
    let a = Promise.resolve({ a: 1, b: 2 });
}
/**
 * IF<A,B,C> A为boolean A为true取B A为false取C
 */
{
}
/**
 * Concat<T, F> 连接两个数组
 */
{
}
/**
 * Include<A, ITEM>
 * 注意Equal实现
 * 递归
 */
{
}
/**
 * 测试另一种Include<A, ITEM>
 */
{
}
/**
 * Push<A, I>
 */
{
}
/**
 * Pop<A, L>
 */
{
}
/**
 * Unshift<A, H>
 */
{
    let bb = ['ddf', 1, 2, 3, 4];
}
/**
 * Shift<A>
 */
{
}
/**
 * 实现Parameters<F> 获取函数的参数
 */
{
    let bb = ['dfdg', 'fd'];
}
/**
 * GetReturnType<F> 获取函数返回类型
 */
{
}
/**
 * StringLength
 * 注意T存遍历到的每一个元素，最后T的长度就是string的长度
 */
{
}
