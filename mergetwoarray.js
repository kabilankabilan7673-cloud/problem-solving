var arr1 = [2, 4, 5, 6, 7, 9, 10, 13];
var arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 11, 15];
var temp = arr1;
for (var i = 0; i < arr2.length; i++) {
  var flag = true;
  for (var j = 0; j < temp.length; j++) {
    if (arr2[i] == temp[j]) {
      flag = false;
      break;
    }
  }
  if (flag == true) {
    temp.push(arr2[i]);
  }
}
console.log(temp);

for (var i = 0; i < temp.length; i++) {
  for (var j = 0; j < temp.length; j++) {
    if (temp[i] < temp[j]) {
      var temp1 = temp[j];
      temp[j] = temp[i];
      temp[i] = temp1;
    }
  }
}
console.log(temp);
