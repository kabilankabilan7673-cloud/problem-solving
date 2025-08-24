var n = 6;
var m = 7;
for (var i = 0; i < m; i++) {
  var line = "";
  for (var j = 0; j < n; j++) {
    if (i == 0 || j == 0 || j == n - 1 || i == m - 1) {
      line = line + "x ";
    } else {
      line = line + "0 ";
    }
  }
  console.log(line);
}
