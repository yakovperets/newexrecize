"use strict";
// //1
// type geometry = { highet: number; width: number };
// type arrayedges = { min: number; max: number };
// type person = { name: string; age: number; isStudent: boolean };
// type justNameAndAge = { name: string; age: number };
// type Book = { title: string; author: string; year: number };
// type Reader = { person: person; favoritebook: Book };
// type fullname = { firstName: string; lastName: string };
// type firstletters = { firstInitial: string; lastInitial: string };
// type fn1 = (x: number, y: number) => number;
// type fn2 = (x: number) => string;
// type fn3 = (x: string) => number;
// type fn4 = (x: number) => number[];
// type fn5 = (x: number[]) => number;
// type fn6 = (name: string, age: number, isStudent: boolean) => person;
// type fn7 = (x: person) => boolean;
// type fn8 = (x: Reader[]) => person;
// type fn9 = (x: Reader[]) => Book;
// type fn10 = (x: geometry) => number;
// type fn11 = (x: string) => boolean;
// type fn12 = (x: string[]) => string[];
// type fn13 = (x: number[]) => number[];
// type fn16 = (x: number[]) => arrayedges;
// type fn14 = (x: fullname) => firstletters;
// type fn15 = (x: justNameAndAge[]) => number;
// type fn17 = (x: any[]) => any[];
// const findTheBig: fn1 = (x, y) => {
//   if (x > y) {
//     return x;
//   }
//   return y;
// };
// findTheBig(2, 4);
// //2
// const findTheSmall: fn1 = (x, y) => {
//   if (x < y) {
//     return x;
//   }
//   return y;
// };
// findTheSmall(2, 4);
// //3
// const findIfDual: fn2 = (x) => {
//   if (x % 2 === 0) {
//     return "dual";
//   }
//   return "undual";
// };
// findIfDual(2);
// //4
// const stringlength: fn3 = (x) => {
//   return x.length;
// };
// stringlength("llll");
// //5
// const arrayn: fn4 = (x) => {
//   const a: number[] = [];
//   for (let i = 0; i < x; i++) {
//     a.push(i);
//   }
//   return a;
// };
// arrayn(7);
// //6
// const max: fn5 = (x) => {
//   let a: number = x[0];
//   for (let i = 0; i < x.length; i++) {
//     if (a < x[i]) {
//       a = x[i];
//     }
//   }
//   return a;
// };
// max([2, 3, 4]);
// //7
// const persons: fn6 = (x, y, z) => {
//   const a: person = { name: x, age: y, isStudent: z };
//   console.log(a);
//   return a;
// };
//פונקציית הקולבק
const bb = (x, y) => {
    if (x.type === y) {
        return true;
    }
    return false;
};
//פונקציית המערך
const filterItems = (x, bb, y) => {
    const a = [];
    for (let i = 0; i < x.length; i++) {
        if (bb(x[i], y)) {
            a.push(x[i]);
        }
    }
    return a;
};
//אובייקטי האייטמים
const movie = {
    type: "drama",
    title: "jj",
    duration: 69,
};
const movie2 = {
    type: "comedy",
    title: "jj",
    duration: 123,
};
//מערך של אובייקטי אייטם + פונקציית קולבק
const newArray = filterItems([movie, movie2], bb, "drama");
console.log(newArray);
// // Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
const printItemsData = (x) => {
    x.forEach((element) => {
        console.log(element);
    });
};
const libraryItems = [
    {
        type: "drama",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
    },
    { type: "comedy", title: "Inception", duration: 148 },
    { type: "comedy", title: "To Kill a Mockingbird", author: "Harper Lee" },
    { type: "action", title: "Avatar", duration: 162 },
    { type: "adventure", title: "Go Set a Watchman", author: "Harper Lee" },
];
// // Step 5:  הדפיסו את כל המידע הנתון
printItemsData(libraryItems);
// // Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך
// //פונקציית הקולבק
// const bb2: Fn21 = (x, y) => {
//   if (x.duration > y) {
//     return true;
//   }
//   return false;
// };
// const newArray2 = filterItems(libraryItems, bb2, 120);
// console.log(newArray2);
// // // Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של
// const bb3: Fn21 = (x, y) => {
//   if (x.author === y) {
//     return true;
//   }
//   return false;
// };
// const newArray3 = filterItems(libraryItems, bb3, "Harper Lee");
// console.log(newArray3);
