// Speed Limit = 70
function checkSpeed(speed) {
  let point = 0;
  if (speed <= 75) {
    console.log("OK");
  } else {
    if (speed >= 130) {
      console.log("License suspended");
    } else {
      point = Math.floor((speed - 70) / 5);
      console.log(point + " Points");
    }
  }
}

checkSpeed(180);
// console.log(25);
