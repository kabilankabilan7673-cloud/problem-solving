var arr=[1,2,3,4,5];
var rot=[0,0,0,0,0];
var k=3;
for(var i=0;i<arr.length;i++)
{
    rot[(i+k)%arr.length]=arr[i];
}
console.log(rot);