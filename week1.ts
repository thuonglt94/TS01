// 2 ways to accepts array types.
let fruits:string[] = ['apples','apricots','avocados'];

let fruits1:Array<string> = ['apples','apricots','avocados'];

console.log(fruits.length , fruits1.length);

// tuple and initializing the values
let user:[string,number,string];

user = ['baby',33,'programming'];

console.log(user);


// enum
enum Colors{
  Red = "#FF0000",
  Green= "#008000",
  Blue = "#0000FF"
}
console.log(Colors.Blue);
console.log(Colors.Red);
console.log(Colors.Green);

// arrow function
const sayHello = (name: string) => {
  return `Hello, my name is ${name}`
};

console.log(sayHello('thuong'));

