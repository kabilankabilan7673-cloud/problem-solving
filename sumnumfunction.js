function func(num) {
  var r;
  var res = 0;
  while (num > 0) {
    r = num % 10;
    res = res + r;
    num = parseInt(num / 10);
  }
  if (res <= 9) {
    console.log(res);
  } else {
    return func(res);
  }
}
func(9875);
