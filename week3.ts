/* interface */
interface Food {
  name: string;
  calories: number;
}

function speak(food: Food): void{
  console.log("Our " + food.name + " has " + food.calories + " calories.");
}

let ice_cream = {
  name: "ice cream",
  calories: 200
};

let pan = {
  calories: 50,
  name: "pan"
};

let snack = {
  calories: 100,
  name: "nack",
  price: 5000
};


speak(ice_cream);
speak(pan);
speak(snack);


/* optional properties: optional cho phep khai bao cac properties co the xuat hien */
interface Student {
  name?: string,
  age?: number
}

function createStudent(std: Student) {
  let newStd = {name: "abc", age: 20};
  if (std.name) newStd.name = std.name ;
  if (std.age) newStd.age = std.age;
  return newStd;
}

let myName = createStudent({name: "thuong"});
console.log(myName);

/* read only properties:  chi duoc thay doi khi tao doi tuong dau tien */
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

