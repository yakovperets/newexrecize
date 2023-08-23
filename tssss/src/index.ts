//1,2,3
interface ItemType {
  type: string;
  title: string;
}
//אייטם של ספר
interface Book2 extends ItemType {
  type: string;
  title: string;
  author: string;
}
//אייטם של די וי די
interface DVD extends ItemType {
  type: string;
  title: string;
  duration: number;
}
//הגדרת סוג הפונקציות
type Fn21 = <T extends ItemType>(x: T, y: string | number) => boolean;
type Fn20 = <T extends ItemType>(x: T[], bb: Fn21, y: string | number) => T[];
type Fn19 = <T extends ItemType>(x: T[]) => void;
//פונקציית הקולבק
const bb: Fn21 = (x, y) => {
  if (x.type === y) {
    return true;
  }
  return false;
};
//פונקציית המערך
const filterItems: Fn20 = (x, bb, y) => {
  const a = [];
  for (let i = 0; i < x.length; i++) {
    if (bb(x[i], y)) {
      a.push(x[i]);
    }
  }
  return a;
};
//אובייקטי האייטמים
const movie: DVD = {
  type: "drama",
  title: "jj",
  duration: 69,
};
const movie2: DVD = {
  type: "comedy",
  title: "jj",
  duration: 123,
};
//מערך של אובייקטי אייטם + פונקציית קולבק
const newArray = filterItems([movie, movie2], bb, "drama");
console.log(newArray);

// // Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
const printItemsData: Fn19 = (x) => {
  x.forEach((element) => {
    console.log(element);
  });
};

const libraryItems: (Book2 | DVD)[] = [
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
