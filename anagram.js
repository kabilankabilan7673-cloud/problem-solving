var arr1 = "slient";
var arr2 = "listen";
var temp1 = [];
var temp2 = [];
if (arr1.length == arr2.length) {
  for (var i = 0; i < arr1.length; i++) {
    temp1.push(arr1[i]);
    temp2.push(arr2[i]);
  }

  var store = [];
  for (var i = 0; i < temp1.length; i++) {
    for (var j = 0; j < temp2.length; j++) {
      if (temp1[i].charCodeAt(0) == temp2[j].charCodeAt(0)) {
        store[j] = temp2[i];
        temp2[i] = temp2[j];
        temp2[j] = store[j];
      }
    }
  }
//   console.log(temp1);
//   console.log(temp2);
  var flag = 1;
  for (var k = 0; k < temp1.length; k++) {
    if (temp1[k] != temp2[k]) {
      flag = 0;
      break;
    }
  }
  // var res="";
  // for(var k=0;k<temp2.length;k++)
  // {
  //     res=res+""+temp2[k];
  // }
  if (flag == 1) {
    console.log("anagram");
  } else {
    console.log("not anagram");
  }
} else {
  console.log("not anagram");
}
