var str = "PROGRAM";
var temp = [];
for (var i = 0; i < str.length; i++) {
  temp.push(str[i]);
}
// console.log(temp);
var r = parseInt(temp.length / 2);
var key = r;
var rot = [];
var str1 = "";
for (var i = 0; i < temp.length; i++) {
  var store = (i + key) % temp.length;
  rot[i] = temp[store];
  str1 = str1 + "" + rot[i];
}
// console.log(str1);
var n = str1.length;
for (var i = 0; i < str1.length; i++) {
  var line = "";
  for (var s = 0; s < n - i - 1; s++) {
    line = line + " ";
  }
  for (var j = 0; j < i + 1; j++) {
    line = line + " " + str1[j];
  }
  console.log(line);
}
