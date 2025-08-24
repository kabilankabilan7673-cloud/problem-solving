var arr1 = [1, 0, 1, 1, 1];
var arr2 = [1, 1, 1];
var temp = [];
var t1;
var t2;
if (arr1.length > arr2.length) {
  t1 = arr1.length;
  t2 = arr2.length;
  for (var i = 0; i < t1 - t2; i++) {
    temp.push(0);
  }
} else if (arr2.length > arr1.length) {
  t1 = arr2.length;
  t2 = arr1.length;
  for (var i = 0; i < t1 - t2; i++) {
    temp.push(0);
  }
} else {
  t1 = arr1;
  t2 = arr2;
}
// console.log(temp);
if (arr1.length > arr2.length) {
  for (var i = 0; i < arr2.length; i++) {
    temp.push(arr2[i]);
  }
} else {
  for (var i = 0; i < arr1.length; i++) {
    temp.push(arr1[i]);
  }
}
// console.log(arr1);
// console.log(temp);
var store = [];
if (arr1.length > arr2.length) {
  var carry = 0;
  for (var i = arr1.length - 1; i >= 0; i--) {
    var temp1 = arr1[i] + temp[i] + carry;
    if (temp1 == 2) {
      store.push(0);
      carry = 1;
    } else if (temp1 == 3) {
      store.push(1);
      carry = 1;
    } else {
      store.push(1);
      carry = 0;
    }
  }
} else {
  var carry = 0;
  for (var i = arr2.length - 1; i >= 0; i--) {
    var temp1 = arr2[i] + temp[i] + carry;
    if (temp1 == 2) {
      store.push(0);
      carry = 1;
    } else if (temp1 == 3) {
      store.push(1);
      carry = 1;
    } else {
      store.push(1);
      carry = 0;
    }
  }
}
// console.log(store);
var store1 = [];
var total = "";
for (var i = store.length - 1; i >= 0; i--) {
  store1.push(store[i]);
  total = total + store[i];
}
// console.log(store1);
// console
// console.log(total);
total = parseInt(total);
console.log(total);
// console.log(typeof total);
