var str1 = "abcdefghinr";
var str2 = "abdeeggiint";
for (var i = 0; i < str1.length; i++) {
  if (str1[i] != str2[i]) {
    if (str1[i + 1] != str2[i + 1]) {
      console.log(str1[i] + str2[i] + "," + str1[i + 1] + str2[i + 1]);
      i = i + 1;
    } else {
      console.log(str1[i] + "," + str2[i]);
    }
  }
}
