// Logical Operators

// Logical And (&&)
// Returns True if both operands are True
console.log(false && true);

let highIncome = true;
let goodCreditScore = true;
let eligibleForloan = highIncome && goodCreditScore;

console.log(eligibleForloan);

// Logical Or (||)
// Not (!)
letapplicationRefused = !eligibleForloan;
console.log(eligibleForloan);

// Falsy
// undefined、null 0 false '' NaN

// Short-circuiting : 短路原则

let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);
