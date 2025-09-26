var arr = [2, 3, 7, -1, 8, 5, 11];
var temp = 0;
var arr1 = [];
for (var i = 0; i < arr.length; i++) {
  arr1.push(arr[i]);
}
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
// console.log(arr);
// console.log(arr1);
var temp = [];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    if (arr1[i] == arr[j]) {
      temp.push(arr[j] + " -> " + arr[j + 1]);
      break;
    }
  }
}
console.log(temp);
