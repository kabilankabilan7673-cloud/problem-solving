function func(int) {
  temp = int;
  var res = 0;
  while (int > 0) {
    var r = int % 10;
    res = res * 10 + r;
    int = parseInt(int / 10);
  }
  if (temp == res) {
    console.log("palindrome");
  } else {
    console.log("not palindrome");
  }
}
func(134);
func(70207);
func(938);
func(101);
func(838);
