var number=[10,36,54,89,12];
var weight=[];
for(var i=0;i<number.length;i++)
{
    var num=number[i];
    var sum=0;
    for(var j=1;j<num;j++)
    {
       if(j*j==num)
       {
           sum=sum+5
       }
    }
    if(num%4==0&&num%6==0)
    {
        sum=sum+4
    }
    if(num%2==0)
    {
        sum=sum+3
    }
    weight.push(sum)
}
// console.log(number);
// console.log(weight);
for(var k=0;k<weight.length;k++)
{
    for(var l=k+1;l<weight.length;l++)
    {
        if(weight[k]>weight[l])
        {
            var temp=weight[k]
            weight[k]=weight[l]
            weight[l]=temp
            var temp1=number[k]
            number[k]=number[l]
            number[l]=temp1
        }
    }
    console.log(number[k],weight[k]);
}










