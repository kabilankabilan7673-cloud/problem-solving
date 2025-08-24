var n = 5;
var store = [];
while (n > 0) {
  var mod = n % 2;
  var div = parseInt(n / 2);
  store.push(mod);
  n = div;
}
// console.log(store);
var s = "";
for (var i = store.length - 1; i >= 0; i--) {
  var st = parseInt(store[i]);
  s = s + store[i];
}
s = parseInt(s);
// console.log(s);
var temp = s;
var res = 0;
while (s > 0) {
  var mod = s % 10;
  res = res * 10 + mod;
  s = parseInt(s / 10);
}
// console.log(res);
if (res == temp) {
  console.log("binary is palindrome");
} else {
  console.log("binary is not palindrome");
}
