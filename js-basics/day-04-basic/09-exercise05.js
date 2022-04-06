function showNumbers(limit) {
  let i = 0;
  while (i <= limit) {
    if (i % 2 == 0) {
      console.log(i + ' "EVEN"');
    } else {
      console.log(i + ' "ODD"');
    }
    i++;
  }
}

function showNumbers1(limit) {
  let i = 0;
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i + message);
  }
}

showNumbers1(10);
