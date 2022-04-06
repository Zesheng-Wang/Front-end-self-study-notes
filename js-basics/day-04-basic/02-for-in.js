// for in

const person = {
  name: "Zesheng",
  age: 25,
};
/*
    for (initalExpression; ConditionRule; increment) {}
*/
for (let key in person) {
  console.log(key);
  console.log(person[key]);
}

const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(colors[index]);
}
