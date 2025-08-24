var num=[4,3,1,7,2,9,7,12,55,8]
var temp=0
for(i=0;i<num.length;i=i+2)
{
    for(j=i+2;j<num.length;j=j+2)
    {
        if(num[i]>num[j])
        {
            temp=num[i]
            num[i]=num[j]
            num[j]=temp
        }
    }
}
for(i=1;i<num.length;i=i+2)
{
    for(j=i+2;j<num.length;j=j+2)
    {
        if(num[i]<num[j])
        {
            temp=num[i]
            num[i]=num[j]
            num[j]=temp
        }
    }
}
console.log(num);