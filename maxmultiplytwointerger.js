var num = [2, 3, -2, 4, 5];
var temp = [];
var mul;
for (var i = 0; i < num.length; i++) {
  for (var j = i + 1; j < num.length; j++) {
    mul = num[i] * num[j];
    temp.push(mul);
  }
}
// console.log(temp)
for (var i = 0; i < temp.length; i++) {
  for (var j = 0; j < temp.length; j++) {
    if (temp[i] < temp[j]) {
      var store = temp[j];
    }
  }
}
console.log(store);
