/* two basic examples of function inference. */
// basic type inference
function inferred() {
  const a = 'hi';
  return a
}

// inferred from interface definition
interface DefinesTypes {
  inferred: (first: number, second: string) => number
}

const t: DefinesTypes = {
  inferred(first, second) {
    return first + second.length
  }
};

// Inference With Generics
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
// getProperty(x, "m");
const y = { totally: 'different' };

// getProperty(y, "a"); // error: Argument of type 'a' isn't assignable to 'totally'.
getProperty(y, "totally"); // okay