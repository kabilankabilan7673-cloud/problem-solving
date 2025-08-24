var arr = [2, 1, -1, 4, 5, -2, 3, 7];
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
var m = [];
for (var i = 0; i < arr.length; i++) {
  if (0 < arr[i]) {
    m.push(arr[i]);
  }
}
console.log(m);
for (var i = 0; i < m.length; i++) {
  if (m[i] + 1 != m[i + 1]) {
    console.log(m[i] + 1);
    break;
  }
}
