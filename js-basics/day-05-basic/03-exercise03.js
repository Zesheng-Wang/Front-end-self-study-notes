const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let avg = 0;
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }
  avg = sum / marks.length;
  for (let mark of marks) {
    if (mark > avg) {
      console.log("");
    }
  }
  let level;
  if (avg >= 90) level = "A";
  else if (avg >= 80) level = "B";
  else if (avg >= 70) level = "C";
  else if (avg >= 60) level = "D";
  else level = "B";
  return level;
}
