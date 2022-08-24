interface ABC {
  (): void;
  (t1: number): boolean;
  (t1: number, t2: number): number;
}
declare let a:ABC

// a = (x) => {
//   return !!x
// }

type ABCD = ((t1: number) => boolean) & ((t1: number, t2: number)=> number)
let b:ABCD = (x) => {
  return false
}
export {}