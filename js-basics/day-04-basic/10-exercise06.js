const number_list = [1, 2, 3, "", 888];
countTruthy(number_list);

function countTruthy(number_list) {
  let count = 0;
  for (let value of number_list) {
    // if (
    //   value === undefined ||
    //   value === null ||
    //   value === "" ||
    //   value === false ||
    //   value === 0 ||
    //   value === NaN
    // ) {
    //   continue;
    // }
    if (value) count++;
  }
  console.log(count);
}
