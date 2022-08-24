class Person{
  name:string
  age:number
  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }
}
let p = new Person('z',25)

class Student extends Person{
  private major:string
  constructor(name:string,age:number,major:string){
    super(name,age)
    this.major = major
  }
  getName(){
    return this.name
  }
  setName(value:string){
    this.name = value
  }
  //私有属性通过get set方法获取、修改
  // getMajor(){
  //   return this.major

  // }
  // setMajor(value:string){
  //   this.major = value
  // }
  

  //也可以通过es5的语法 注意这个不能用同名的 
  get _major(){
    return this.major
  }
  set _major(value){
    this.major = value
  }
}
let s = new Student('aa',21,'sp')
console.log(s.name);
console.log(s.getName());
// console.log(s.getMajor());
console.log(s._major);//通过get就可以用.的方式直接调用
s._major = 'jp'
console.log(s._major);
export {}
//注意父类的private 不能被子类继承，子类只能访问暴露的getset方法
//protected修饰的属性可以进行继承，但是不能直接.调用，还是需要getset方法