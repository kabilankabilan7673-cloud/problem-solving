var arr = [0, 3, 4, 0, 7, 4, 0, 4, 5, 0];
var temp = [];
var count = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] != 0) {
    temp.push(arr[i]);
  } else {
    count = count + 1;
  }
}
for (var j = 0; j < count; j++) {
  temp.push(0);
}
console.log(temp);
