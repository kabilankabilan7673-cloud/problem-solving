var arr1 = [9, 9, 9, 9];
var arr2 = [1, 1, 1];
var temp = [];
var temp1 = [];
var res = [];
var t;
var s;
var c = -1;
if (arr1.length > arr2.length) {
  t = arr1.length;
  s = arr2.length;

  for (var i = 1; i <= t - s; i++) {
    temp.push(0);
  }
  for (var j = 0; j < s; j++) {
    temp.push(arr2[j]);
  }
  temp1 = arr1;
} else if (arr2.length > arr1.length) {
  t = arr2.length;
  s = arr1.length;

  for (var i = 1; i <= t - s; i++) {
    temp.push(0);
  }
  for (var j = 0; j < s; j++) {
    temp.push(arr1[j]);
  }
  temp1 = arr2;
} else {
  temp = arr2;
  temp1 = arr1;
}

// console.log(temp);
// console.log(temp1);
var carry = 0;
for (var i = temp.length - 1; i >= 0; i--) {
  var sum = carry + temp[i] + temp1[i];
  var unit_digit = sum % 10;
  var c_digit = parseInt(sum / 10);
  res.push(unit_digit);
  carry = c_digit;
}
res.push(carry);
// console.log(res);
var l = "";
for (var i = 0; i < res.length; i++) {
  l = res[i] + " " + l;
}
console.log(l);
