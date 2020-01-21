// 2 ways to accepts array types.
var fruits = ['apples', 'apricots', 'avocados'];
var fruits1 = ['apples', 'apricots', 'avocados'];
console.log(fruits.length, fruits1.length);
// tuple and initializing the values
var user;
user = ['baby', 33, 'programming'];
console.log(user);
// enum
var Colors;
(function (Colors) {
    Colors["Red"] = "#FF0000";
    Colors["Green"] = "#008000";
    Colors["Blue"] = "#0000FF";
})(Colors || (Colors = {}));
console.log(Colors.Blue);
console.log(Colors.Red);
console.log(Colors.Green);
// function
var sayHello = function (name) {
    return "Hello, my name is " + name;
};
console.log(sayHello('thuong'));
