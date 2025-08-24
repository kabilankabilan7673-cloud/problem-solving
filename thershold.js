var arr = [5, 8, 10, 13, 6, 2];
var thers = 5;
var r;
var result = [];
for (var i = 0; i < arr.length; i++) {
  var temp = [];
  var count = 0;
  r = arr[i] % thers;
  var div = arr[i] / thers;
  for (var j = 1; j <= div; j++) {
    temp.push(thers);
    count = count + 1;
  }
  if (r != 0) {
    temp.push(r);
    count = count + 1;
  }
  console.log(temp, "->", count);
  result.push(count);
}
//   console.log(result);
var total = 0;
for (var i = 0; i < result.length; i++) {
  total = total + result[i];
}
console.log("total:", total);
