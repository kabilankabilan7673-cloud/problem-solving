let arr = [8, 3, 4, 7, 9];
let t = 7;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] + arr[i + 1] == t) {
    console.log(arr[i], arr[i + 1]);
  }
  if (arr[i] == t) {
    console.log(arr[i]);
  }
}
