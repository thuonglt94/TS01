/* two basic examples of function inference. */
// basic type inference
function inferred() {
    var a = 'hi';
    return a;
}
var t = {
    inferred: function (first, second) {
        return first + second.length;
    }
};
// Inference With Generics
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
// getProperty(x, "m");
var y = { totally: 'different' };
// getProperty(y, "a"); // error: Argument of type 'a' isn't assignable to 'totally'.
getProperty(y, "totally"); // okay
