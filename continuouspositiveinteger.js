var arr = [-2, 7, 5, -1, 3, 2, 9, -7];
var total = 0;
var temp = [];
var s = [];
var s1 = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    total = total + arr[i];
    s.push(arr[i]);
  } else if (arr[i] < 0) {
    s1.push(s);
    temp.push(total);
    total = 0;
    s = [];
  }
}
// console.log(temp);
// console.log(s1);
var t;
var r;
for (var i = 0; i < temp.length; i++) {
  for (var j = i + 1; j < temp.length; j++) {
    if (temp[i] < temp[j]) {
      t = temp[j];
      r = s1[j];
    } else if (temp[i] > temp[j]) {
      t = temp[i];
      r = s1[i];
    }
  }
}
console.log(t);
console.log(r);
