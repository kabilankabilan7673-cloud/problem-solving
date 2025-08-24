var str = "the sky is blue";
var temp = "";
var store = [];
for (var i = 0; i < str.length; i++) {
  if (str[i] != " ") {
    temp = temp + str[i];
  } else {
    store.push(temp);
    temp = "";
  }
}
for (var i = store.length - 1; i >= 0; i--) {
  temp = temp + " " + store[i];
}
console.log(temp);
