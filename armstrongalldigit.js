var num = 1634;
var count = 0;
var r;
var temp = num;
while (num > 0) {
  r = num % 10;
  count++;
  num = parseInt(num / 10);
}
var s;
var total = 0;
var tem = temp;
for (var i = 0; i < count; i++) {
  s = temp % 10;
  var res = 1;
  for (var j = 1; j <= count; j++) {
    res = res * s;
  }
  total = total + res;
  temp = parseInt(temp / 10);
}
if (total == tem) {
  console.log("armstrong");
} else {
  console.log("not armstrong");
}
