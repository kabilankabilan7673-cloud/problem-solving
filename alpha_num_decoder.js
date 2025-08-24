var str = "a2b10c2";
var num = "";
var alph = "";
var store = "";
for (var i = 0; i < str.length; i++) {
  if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122) {
    if (num != "") {
      loop(alph, num);
      alph = "";
      num = "";
    }
    alph = str[i];
  } else if (str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57) {
    num = num + str[i];
  }
}
loop(alph, num);
function loop(a, n) {
  for (var i = 1; i <= parseInt(n); i++) {
    store = store + a;
  }
}
store = store + "";
console.log(store);
