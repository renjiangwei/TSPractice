class Person {
  public name: string
  public age: number
  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
}
let p1: Person = new Person('asd', 1)
p1.age

let p2: Person = {
  name: 'asd',
  age: 2
}

class Student extends Person {
  major: string
  constructor(name: string, age: number, m: string) {
    super(name, age)
    this.major = m
  }
}
let s1: Student = new Student('qwe', 1, 'cs')
let s2: Student = {
  name: 'asd',
  age: 2,
  major: 'c'
}

export {}