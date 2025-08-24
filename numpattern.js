var n = 5;
var count = 0;
for (var i = 0; i < n; i++) {
  var line = "";
  for (var j = 0; j < i + 1; j++) {
    line = line + " " + (count + 1);
    count++;
  }
  console.log(line);
}
