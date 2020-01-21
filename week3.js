function speak(food) {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}
var ice_cream = {
    name: "ice cream",
    calories: 200
};
var pan = {
    calories: 50,
    name: "pan"
};
var snack = {
    calories: 100,
    name: "nack",
    price: 5000
};
speak(ice_cream);
speak(pan);
speak(snack);
function createStudent(std) {
    var newStd = { name: "abc", age: 20 };
    if (std.name)
        newStd.name = std.name;
    if (std.age)
        newStd.age = std.age;
    return newStd;
}
var myName = createStudent({ name: "thuong" });
console.log(myName);
var p1 = { x: 10, y: 20 };
// p1.x = 5; // error!
