let a = [1,2,3]
let b = a
b[2] = 'bbbb'
console.log(a, 'a');
console.log(b, 'b');
let c = {
  
}
let d = {

}
console.log(c==d);
let e = () => {}
let f = () => {}
console.log(e == f);
let g = '123'
let h = 123
console.log(g == h);

let formData = {}
let row = {
  a: 1,
  b: 2
}
formData = {...row}
let arr = [1,2,34]
row = [...arr]
let edit = (row) => {
  temp.splice(2,1)
} 
