let arr = [1, 3, 4, 8, 10];
let n = 7;
for (var i = 0; i < arr.length; i++) {
  var flag = true;
  if (arr[i] + arr[i + 1] == n) {
    flag = false;
    console.log("true");
    break;
  }
}
if (flag == true) {
  console.log("false");
}
