let a: string = "hhh";
a = "lll";
//1
type fn1 = (x: number, y: number) => number;
type fn2 = (x: number) => string;
type fn3 = (x: string) => number;
type fn4 = (x: number) => number[];

const findTheBig: fn1 = (x, y) => {
  if (x > y) {
    return x;
  }
  return y;
};
findTheBig(2, 4);
//2
const findTheSmall: fn1 = (x, y) => {
  if (x < y) {
    return x;
  }
  return y;
};
findTheSmall(2, 4);
//3
const findIfDual: fn2 = (x) => {
  if (x % 2 === 0) {
    return "dual";
  }
  return "undual";
};
findIfDual(2);
//4
const stringlength: fn3 = (x) => {
  return x.length;
};
stringlength("llll");
//5
// const arrayn: fn4 = (x) => {
//   const a: number[] = [];
//   for (let i = 0; i < x; i++) {
//     a.push = i;
//   }
//   return a;
// };
// arrayn(7);
