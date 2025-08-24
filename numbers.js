var n = 4;
var temp = 0;
for (i = 0; i < n; i++) {
  line = "";
  for (j = 0; j < n; j++) {
    temp = j + 1;
    line = line + temp;
  }
  console.log(line);
}
