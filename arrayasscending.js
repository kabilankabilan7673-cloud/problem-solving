var num=[8,9,12,15,1,7,5]
var temp=0
for(i=0;i<num.length;i++)
{
    for(j=i+1;j<num.length;j++)
    {
        if(num[i]>num[j])
        {
            temp=num[i]
            num[i]=num[j]
            num[j]=temp

        }
    }
}
console.log(num)