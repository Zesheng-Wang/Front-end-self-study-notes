// Functions

function greet() {
  // body of this function
  console.log("Hello");
}

// Parameters : 形式参数
function greet(name) {
  // body of this function
  console.log("Hello " + name);
}

// Arguments
greet("John");
greet("Mary");

// Calculating a value
function square(number) {
  return number + number;
}

let result = square(2);
console.log(result);
