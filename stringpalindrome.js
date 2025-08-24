var str = "teacher";
var temp = "";
var temp1 = str;
for (var i = str.length - 1; i >= 0; i--) {
  temp = temp + str[i];
}
if (temp == temp1) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}
