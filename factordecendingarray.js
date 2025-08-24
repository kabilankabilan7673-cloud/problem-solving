var arr = [8, 2, 3, 12, 16];
var arr1 = [];
for (var i = 0; i < arr.length; i++) {
  var count = 0;
  for (var j = 1; j <= arr[i]; j++) {
    if (arr[i] % j == 0) {
      count = count + 1;
    }
  }
  // console.log(arr[i],count);
  arr1.push(count);
}
// console.log(arr1);
for (var i = 0; i < arr1.length; i++) {
  for (var j = i + 1; j < arr1.length; j++) {
    if (arr1[i] < arr1[j]) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      temp = arr1[i];
      arr1[i] = arr1[j];
      arr1[j] = temp;
    }
  }
}
// console.log(arr1)
console.log(arr);
