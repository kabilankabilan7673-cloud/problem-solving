function func(a, b) {
  let temp = 0;
  for (var i = 0; i < b; i++) {
    temp = temp + a;
  }
  console.log(temp);
}
func(3, 4);
