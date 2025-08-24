var num = 124;
var count = 0;
var temp = num;
while (temp > 0) {
  var r = temp % 10;
  if (num % r == 0) {
    count++;
  }
  temp = parseInt(temp / 10);
}
console.log(count);
