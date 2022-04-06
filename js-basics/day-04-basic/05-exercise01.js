// write a function that takes two numbers
// adn returns the maximum of the two
function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function maxNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

console.log("the max num is : ", maxNum(2, 5));
console.log("the max num is : ", maxNum(8, 5));
