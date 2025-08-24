var str = "is the was the is and";
var word = " ";
var w_array = [];
for (var i = 0; i < str.length; i++) {
  if (str[i] == " " && word != " ") {
    w_array.push(word);
    word = " ";
  } else {
    if (str[i] != " ") {
      word = word + str[i];
    }
  }
}
if (word != " ") {
  w_array.push(word);
  word = " ";
}
var unic = [];
var count = [];
for (var i = 0; i < w_array.length; i++) {
  var flag = false;
  for (var j = 0; j < unic.length; j++) {
    if (w_array[i] == unic[j]) {
      flag = true;
      count[j]++;
      break;
    }
  }
  if (flag == false) {
    unic.push(w_array[i]);
    count.push(1);
  }
}
for (var k = 0; k < unic.length; k++) {
  console.log(unic[k], "-->", count[k]);
}
