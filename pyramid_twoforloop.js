var n = 5;
for (i = 0; i < n; i++) {
  var line = "";
  for (j = 0; j < i + n; j++) {
    if (j < n - i - 1) {
      line = line + " ";
    } else {
      // console.log("*");
      line = line + "*"
    }
  }
  console.log(line);
}
