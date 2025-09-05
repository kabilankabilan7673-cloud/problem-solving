let arr = [1, 3, 4, 5, 6, 8];
let t = 11;
for (var i = 0; i < arr.length; i++) {
  var flag = true;
  if (arr[i] == t) {
    flag = false;
    console.log(t + " " + "is already present");
    break;
  }
}
if (flag == true) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] + 1 == t) {
      flag = false;
      console.log(arr[i], arr[i + 1]);
      break;
    }
  }
}
if (flag == true) {
  for (var i = 0; i < arr.length; i++) {
    var s = t - 1;
    if (s == arr[i]) {
      flag = false;
      break;
    }
  }
  if (flag == true) {
    console.log(s, null);
  }
}
