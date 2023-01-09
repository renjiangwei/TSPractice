let a = true;
a = false;
function sum(a:number,b:number):number {
  return a + b
}
let sum2: (a:number, b:number) => number
sum2 = function(a,b) {
  return a + b
}
console.log(sum2(2,4));

console.log(sum(123,4));
let b:number = 10;
let c:string = ''
let d:object = {}//很少用
c = 'hello'
let e:Array<number>
e = [123]
let ee : string []
ee = ['sad','sadf','zxc']
let eee : Array<boolean>
eee = [true,false]
let f:{name:string,age:number}
f = {name:'rjw',age:23};
let g:{name:string,[propName:string]:any}
//指定对象name为string,后面的[propName:string]:any 是指其他的键为string,值为any,个数不限制
//不这样指定的话,只能规定什么键,有且只有这些键

let h:(a:number,b:number)=>number
//类似箭头函数的写法指定参数个数、类型返回值
h = function(n1,n2){
 return n1+n2
}
let i:(a:string,b?:any)=>any
i = function(arg1:string){
  return arg1
}
i('a','b');
console.log('---------enum----------');
enum type {
  male = 1,
  famale = 2
}
let j : type = type.male;
console.log(j);
console.log(type[j]);

let k : any = 'qweasd'
console.log((<object>k).toString);//断言（告诉跳过检测，程序员已经断定这就是对的，不要再帮我检测了）

console.log('----------------------');
//数组解构
let l:[string,number]
l = ['zxc',23]
let [m,n]:[string,number] = l;
//注意上面的类型是放在解构后面的[m,n]:[string,number]
let {...other} = f;
console.log(other);

/*
  interface
*/
{
  interface Type {
    color: string,
    number: number,
    [propName:string]: any
  }
  function abc(obj: Type): void{
    console.log(obj);
    
  }
  abc({color: 'blue',Number: 1, number:2})
  let a: Array<Type> = [{
    color: 'qwe',
    number: 123
  }];
}

/*
  enum
*/
{
  enum SkuType{
    asset = 1,
    con = 2
  }
  let s1: SkuType
  s1 = 1
  console.log(SkuType[s1]);
}
/*
  type
*/
{
  type a = Array<number> // 数组的每一项是number
}
{
  interface a {
    a: boolean
  }
  let a:a = {
    a: false
  }
}
[1,2,34].reduce((a, b) => a + b, 1);
[1,2,3,4].map(() => {
  console.log(this, 'this')
})
export {}