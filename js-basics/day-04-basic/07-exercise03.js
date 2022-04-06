// fizzBuzz

function fizzBuzz(input) {
  if (typeof input !== "number") {
    console.log("Not a number");
  }

  if (input % 3 === 0 && input % 5 === 0) {
    console.log("FizzBuzz");
  } else if (input % 3 == 0) {
    console.log("Fizz");
  }
  if (input % 5 == 0) {
    console.log("Buzz");
  }
}

const output = fizzBuzz(3);
// console.log(output);
