/* Comparing Two Functions */
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;
y = x // OK
x = y // Error


/* using two functions that differs only by their return type */
let x = () => ({ name: 'Alice' });
let y = () => ({ name: 'Alice', location: 'Seattle' });
x = y // OK
y = x // Error