//3
class Shape {
  info(): void {
    console.log(`this is shape of `);
  }
  //5
  draw() {
    console.log("drawing a shape");
  }
}
//5.5
class Square extends Shape {
  draw() {
    console.log("drawing a square");
  }
}
class Circle extends Shape {
  draw() {
    console.log("drawing a circle");
  }
}
class Triangle extends Shape {
  draw() {
    console.log("drawing a triangle");
  }
}
//1
class Rectangle extends Shape {
  hight: number;
  width: number;
  constructor(hight: number, width: number) {
    super();
    this.hight = hight;
    this.width = width;
  }
  area() {
    console.log(this.hight * this.width);
  }
  //3.5
  info(): void {
    console.log("This is a Recktangle");
  }
  //4
  scale(number: number): Rectangle {
    this.hight *= number;
    this.width *= number;
    return this;
  }
  //4.5
  static meregeRectangels(Rec1: Rectangle, Rec2: Rectangle) {
    const meregeHieght: number = Rec1.hight + Rec2.hight;
    const meregeWidth: number = Rec1.width + Rec2.width;
    const newRec = new Rectangle(meregeHieght, meregeWidth);
    return newRec;
  }
}
const Rectangle1 = new Rectangle(2, 4);
const Rectangle2 = new Rectangle(3, 9);
const meregeRecs = Rectangle.meregeRectangels(Rectangle1, Rectangle2);
console.log(meregeRecs.area());

Rectangle1.area();
Rectangle1.scale(2).area();
//2
class Square1 extends Rectangle {
  length: number;
  constructor(length: number) {
    super(length, length);
    this.length = length;
  }
  area(): void {
    console.log(this.length * this.length);
  }
}
const square1 = new Square1(4);
square1.area();
//3.75
class ColoredRectangle extends Rectangle {
  color: string;
  constructor(hight: number, width: number, color: string) {
    super(hight, width);
    this.color = color;
  }
  info(): void {
    console.log(`this is${this.color}Rectangle! `);
  }
}
//5.5
type fn = (drawing: Shape[]) => void | string;
const renderShapes: fn = (drawing) => {
  drawing.forEach((element) => {
    element.draw();
  });
};
const circle1 = new Circle();
const squere2 = new Square();
const arr: Shape[] = [circle1, squere2];
renderShapes(arr);
