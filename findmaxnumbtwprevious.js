var arr = [2, -3, -4, 5, 9, 8];
var max = arr[0];
console.log(max);
for (var i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    console.log(arr[i]);
    max = arr[i];
  }
}
// var arr=[2,-3,-4,5,9,8];
// var arr1=[];
// for(var i=0;i<arr.length;i++)
// {
//     if(arr[i]>0)
//     {
//         arr1.push(arr[i]);
//     }
// }
// // console.log(arr1);
// var t=[];
// for(var i=0;i<arr1.length;i++)
// {
//     if(arr1[i]<arr1[i+1])
//     {
//         t.push(arr1[i]);
//     }
//     else
//     {
//         t.push(arr1[i]);
//         break;
//     }
// }
// console.log(t);