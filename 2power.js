var n = 25;
var m;
for (var i = 1; i < n; i++) {
  m = i * i;
  if (m == n) {
    console.log("true");
    break;
  }
}
if (m != n) {
  console.log("false");
}
