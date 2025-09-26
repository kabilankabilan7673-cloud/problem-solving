let arr = [3, 2, 7, 6, 5, 1, 2, 3, 4];
let key = 3;
var temp = [];
var temp1 = [];
for (var i = 0; i < arr.length; i++) {
  let store = [];
  var flag = 1;
  var value = 0;
  for (var j = i; j < key; j++) {
    if (arr[i] < arr[j]) {
      s = arr[j];

      if (s > value) {
        value = s;
      }
    } else {
      s = arr[i];
      if (s > value) {
        value = s;
      }
    }
    if (arr[j] != undefined) {
      store.push(arr[j]);
      flag = 1;
    } else {
      flag = 0;
      break;
    }
  }
  // console.log(value)

  if (flag == 0) {
    break;
  }
  temp1.push(value);
  temp.push(store);
  key++;
}
console.log(temp1);
console.log(temp);
//  console.log(temp.length)
//     console.log(temp1.length)
