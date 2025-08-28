var n = 6;
var m = 6;
var arr = [];
for (var i = 0; i < m; i++) {
  var temp = [];
  for (var j = 0; j < m; j++) {
    temp.push(" ");
  }
  arr.push(temp);
}
// console.log(arr);
var top = 0;
var right = n - 1;
var bottom = m - 1;
var left = 0;
var s = 6;
while (top <= bottom && left <= right) {
  for (var i = top; i <= right; i++) {
    arr[top][i] = s;
  }
  top++;
  for (var j = top; j <= right; j++) {
    arr[j][right] = s;
  }
  right--;
  for (var k = right; k >= left; k--) {
    arr[bottom][k] = s;
  }
  bottom--;
  for (var l = bottom; l >= top; l--) {
    arr[l][left] = s;
  }
  left++;
  s = s - 1;
}
// console.log(arr);
for (var i = 0; i < arr.length; i++) {
  var store = "";
  for (var j = 0; j < arr[i].length; j++) {
    store = store + " " + arr[i][j];
  }
  console.log(store);
}
