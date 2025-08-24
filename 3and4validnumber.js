var n = 10;
var i = 1;
var count = 0;
while (count < n) {
  var flag = 0;
  var temp = i;
  while (temp > 0) {
    var num = temp % 10;
    if (num != 3 && num != 4) {
      flag = 1;
      break;
    }
    temp = parseInt(temp / 10);
  }
  if (flag == 0) {
    console.log(i);
    count = count + 1;
  }
  i = i + 1;
}
