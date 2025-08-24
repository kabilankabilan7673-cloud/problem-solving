var list1 = [1, 3, 4, 5, 6, 8, 9];
var list2 = [1, 5, 8, 9, 2];
var union = [];
for (var k = 0; k < list2.length; k++) {
  union.push(list2[k]);
}
for (var i = 0; i < list1.length; i++) {
  var flag = true;
  for (var j = 0; j < union.length; j++) {
    if (list1[i] == union[j]) {
      flag = false;
      break;
    }
  }
  if (flag == true) {
    union.push(list1[i]);
  }
}
console.log("union:", union);
var inter = [];
for (var i = 0; i < list1.length; i++) {
  for (var j = 0; j < list2.length; j++) {
    if (list1[i] == list2[j]) {
      inter.push(list1[i]);
    }
  }
}
console.log("intersection:", inter);
var odd = [];
var even = [];
for (var i = 0; i < list1.length; i++) {
  if (list1[i] % 2 == 1) {
    odd.push(list1[i]);
  }
}
for (var j = 0; j < list2.length; j++) {
  if (list2[j] % 2 == 0) {
    even.push(list2[j]);
  }
}
console.log("odd position:", odd);
console.log("even postion:", even);
for (var i = 0; i < even.length; i++) {
  odd.push(even[i]);
}
console.log("output:", odd);
