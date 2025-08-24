var n = 6;
var m = n;
for (var i = 0; i < n; i++) {
  var line = "";
  var t = i + 1;
  for (var j = 0; j < n - i; j++) {
    line = line + " " + t;
    t = t + m;
    m = m - 1;
  }
  t = 0;
  m = n;
  console.log(line);
}
