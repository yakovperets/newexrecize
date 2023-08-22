"use strict";
let a = "hhh";
a = "lll";
const findTheBig = (x, y) => {
  if (x > y) {
    return x;
  }
  return y;
};
findTheBig(2, 4);
//2
const findTheSmall = (x, y) => {
  if (x < y) {
    return x;
  }
  return y;
};
findTheSmall(2, 4);
//3
const findIfDual = (x) => {
  if (x % 2 === 0) {
    return "dual";
  }
  return "undual";
};
findIfDual(2);
//4
const stringlength = (x) => {
  return x.length;
};
stringlength("llll");
//5
const arrayn = (x) => {
  const a = [];
  for (let i = 0; i < x; i++) {
    a.push(i);
  }
  return a;
};
arrayn(7);
//6
const max = (x) => {
  let a = x[0];
  for (let i = 0; i < x.length; i++) {
    if (a < x[i]) {
      a = x[i];
    }
  }
  return a;
};
max([2, 3, 4]);
//7
const persons = (x, y, z) => {
  const a = { name: x, age: y, isStudent: z };
  console.log(a);
  return a;
};
//8
const persons18 = (x) => {
  if (x.age > 18) {
    return false;
  }
  return true;
};
const r = persons("a", 9, true);
persons18(r);
//10
const readers1 = (x) => {
  let a = x[0].person.age;
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
const readers2 = (x) => {
  let a = x[0].favoritebook.year;
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
const arrayOfDual = (x) => {
  let a = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0) {
      a = a + x[i];
    }
  }
  return a;
};
arrayOfDual([2, 4, 5, 6]);
// 2.
const area = (x) => {
  let c = x.highet * x.width;
  return c;
};
area({ highet: 10, width: 20 });
// 3.
const isPalindrom = (x) => {
  return x === x.split("").reverse().join("");
};
isPalindrom("aba");
//4.
const toUpper = (x) => {
  x.forEach((i) => {
    const str2 = i.charAt(0).toUpperCase() + i.slice(1);
    i = str2;
  });
  return x;
};
toUpper(["xx", "aaa", "fff"]);
// 5.
const newUniqArr = (x) => {
  const uniqueNumbers = [...new Set(x)];
  return uniqueNumbers;
};
newUniqArr([1, 2, 2, 5, 7]);
// 6.
const acronyms = (x) => {
  return {
    firstInitial: x.firstName.charAt(0),
    lastInitial: x.lastName.charAt(0),
  };
};
acronyms({ firstName: "yakov", lastName: "perets" });
// 7.
const avregeage = (x) => {
  let a = 0;
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
const minMaxOfArray = (x) => {
  const a = { max: x[0], min: x[0] };
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
// כתוב פונקציה שמקבלת מערך ומדפיסה אותו בסדר הפוך
const reverseArray = (x) => {
  const reversedArray = x.reverse();
  console.log(reversedArray);
  return reversedArray;
};
reverseArray(["sss", 666]);
