const mirror1 = (thing: string) => {
  return thing;
}
console.log(mirror1('hello'));

function identity<T>(arg: T): T {
  return arg;
}

var test = identity<String>("Thuong");
console.log(test);
