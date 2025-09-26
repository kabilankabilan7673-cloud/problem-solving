var arr = [2, 1, 3, 2, 2, 5, 8, 9, 8];
var dup = [];
count = [];
for (var i = 0; i < arr.length; i++) 
{
  var flag = true;
  for (var j = 0; j < dup.length; j++) 
  {
    if (arr[i] == dup[j])
      {
        flag = false;
        count[j]++;
        break;
      }
  }
    if (flag == true)
    {
      dup.push(arr[i]);
      count.push(1);
    }
}
for (var i = 0; i < dup.length; i++) 
{
  console.log(dup[i], "-", count[i]);
}
