// Bitwise Operators
// 0000 0000
// 1 : 0000 0001
// 2 : 0000 0010
// R : 0000 0011
console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND

// 优先级
let x = 2 + 3 * 4;
console.log(x);

// Exercise
let a = "red";
let b = "blue";

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);
