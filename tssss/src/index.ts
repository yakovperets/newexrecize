//1
type geometry = { highet: number; width: number };
type arrayedges = { min: number; max: number };
type person = { name: string; age: number; isStudent: boolean };
type justNameAndAge = { name: string; age: number };
type Book = { title: string; author: string; year: number };
type Reader = { person: person; favoritebook: Book };
type fullname = { firstName: string; lastName: string };
type firstletters = { firstInitial: string; lastInitial: string };
type fn1 = (x: number, y: number) => number;
type fn2 = (x: number) => string;
type fn3 = (x: string) => number;
type fn4 = (x: number) => number[];
type fn5 = (x: number[]) => number;
type fn6 = (name: string, age: number, isStudent: boolean) => person;
type fn7 = (x: person) => boolean;
type fn8 = (x: Reader[]) => person;
type fn9 = (x: Reader[]) => Book;
type fn10 = (x: geometry) => number;
type fn11 = (x: string) => boolean;
type fn12 = (x: string[]) => string[];
type fn13 = (x: number[]) => number[];
type fn16 = (x: number[]) => arrayedges;
type fn14 = (x: fullname) => firstletters;
type fn15 = (x: justNameAndAge[]) => number;
type fn17 = (x: any[]) => any[];
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
const arrayn: fn4 = (x) => {
  const a: number[] = [];
  for (let i = 0; i < x; i++) {
    a.push(i);
  }
  return a;
};
arrayn(7);
//6
const max: fn5 = (x) => {
  let a: number = x[0];
  for (let i = 0; i < x.length; i++) {
    if (a < x[i]) {
      a = x[i];
    }
  }
  return a;
};
max([2, 3, 4]);
//7
const persons: fn6 = (x, y, z) => {
  const a: person = { name: x, age: y, isStudent: z };
  console.log(a);
  return a;
};

//8
const persons18: fn7 = (x) => {
  if (x.age > 18) {
    return false;
  }
  return true;
};
const r = persons("a", 9, true);
persons18(r);
//10
const readers1: fn8 = (x) => {
  let a: number = x[0].person.age;
  let index = 0;
  for (let i = 0; i < x.length; i++) {
    if (a < x[i].person.age) {
      a = x[i].person.age;
      index = i;
    }
  }
  return x[0].person;
};
readers1([]);
//11
const readers2: fn9 = (x) => {
  let a: number = x[0].favoritebook.year;
  let index = 0;
  for (let i = 0; i < x.length; i++) {
    if (a > x[i].favoritebook.year) {
      a = x[i].favoritebook.year;
      index = i;
    }
  }
  return x[0].favoritebook;
};
readers2([]);
/////////////////////////////////////////////////
//1.
const arrayOfDual: fn5 = (x) => {
  let a: number = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0) {
      a = a + x[i];
    }
  }
  return a;
};
arrayOfDual([2, 4, 5, 6]);
// 2.
const area: fn10 = (x) => {
  let c: number = x.highet * x.width;
  return c;
};
area({ highet: 10, width: 20 });
// 3.
const isPalindrom: fn11 = (x) => {
  return x === x.split("").reverse().join("");
};
isPalindrom("aba");
//4.
const toUpper: fn12 = (x) => {
  x.forEach((i) => {
    const str2: string = i.charAt(0).toUpperCase() + i.slice(1);
    i = str2;
  });
  return x;
};
toUpper(["xx", "aaa", "fff"]);
// 5.
const newUniqArr: fn13 = (x) => {
  const uniqueNumbers: number[] = [...new Set(x)];
  return uniqueNumbers;
};
newUniqArr([1, 2, 2, 5, 7]);
// 6.
const acronyms: fn14 = (x) => {
  return {
    firstInitial: x.firstName.charAt(0),
    lastInitial: x.lastName.charAt(0),
  };
};
acronyms({ firstName: "yakov", lastName: "perets" });

// 7.
const avregeage: fn15 = (x) => {
  let a: number = 0;
  x.forEach((i) => {
    a += i.age;
  });
  return a;
};
avregeage([
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 40 },
]);

// 8.
const minMaxOfArray: fn16 = (x) => {
  const a: arrayedges = { max: x[0], min: x[0] };
  x.forEach((i) => {
    if (a.max < i) {
      a.max = i;
    } else if (a.min > i) {
      a.min = i;
    }
  });
  return a;
};
minMaxOfArray([1, 2, 3, 4, 5, 6, 7]);
// 9.
const reverseArray: fn17 = (x) => {
  const reversedArray: any[] = x.reverse();
  console.log(reversedArray);
  return reversedArray;
};
reverseArray(["sss", 666]);
