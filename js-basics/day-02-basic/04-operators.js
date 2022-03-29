// Operators

/* 
- Arithmetic : 算术操作符
- Assignment : 赋值操作符
- Comparison : 比较操作符
- Logical    : 逻辑操作符
- Bitwise    : 位元操作符
*/
let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// Increment (++)
console.log(x++);
console.log(x);

// Decrement (--)
console.log(--x);
console.log(x--);

let z = 5;
z += 5;
console.log(z);

// Relational : >、 >=、 <、 <=
let d = 1;
console.log(d > 1);
console.log(d >= 1);

// Equality
console.log(d === 1);
console.log(d !== 1);

// Strict Equality ===
// Lose Equality ==
console.log(1 == "1");

// Ternary operator : 三元运算符
let points = 110;
let type = points > 100 ? "Gold" : "Silver";
console.log(type);
