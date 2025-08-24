var arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
var top = 0;
var right = arr.length - 1;
var bottom = arr.length - 1;
var left = 0;
var result = "";

while (top <= bottom && left <= right) {
  for (var i = top; i <= right; i++) {
    result = result + " " + arr[top][i];
  }
  top++;

  for (var i = top; i <= bottom; i++) {
    result = result + " " + arr[i][right];
  }
  right--;
  if (top <= bottom && left <= right) {
    for (var i = right; i >= left; i--) {
      result = result + " " + arr[bottom][i];
    }
    bottom--;

    for (var i = bottom; i >= top; i--) {
      result = result + " " + arr[i][left];
    }
    left++;
  }
}
console.log(result);
