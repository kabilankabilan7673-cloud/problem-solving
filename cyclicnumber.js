var n = 142857;
var temp = n;
var check = "" + n;
var count = 1;
for (var i = 0; i < n; i++) {
  var r = n % 10;
  count++;
  n = parseInt(n / 10);
}
var i = 1;
while (i <= count) {
  var res = "";
  var store = i * temp;
  res = res + store;
  var s = "";
  for (var j = 0; j < check.length; j++) {
    var flag = 1;
    for (var l = 0; l < check.length; l++) {
      if (res[l] == check[j]) {
        s = s + check[j];
        break;
      }
    }
    s = parseInt(s);
  }
  if (temp == s) {
    flag = 1;
  } else {
    flag = 0;
    break;
  }
  i++;
}
if (flag == 1) {
  console.log("yes");
} else {
  console.log("no");
}
