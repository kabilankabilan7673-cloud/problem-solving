var n = 4;
for (i = 0; i < n; i++) {
  line = "";
  for (j = 0; j < n - i; j++) {
    line = line + "* ";
  }
  console.log(line);
}
