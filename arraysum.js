var num=[1,6,3,4,8,7,2,12]
var sum=8
for(i=0;i<num.length;i++)
{
    for(j=i+1;j<num.length;j++)
    {
        if(num[i]+num[j]==sum)
        {
            console.log(i,j);
        }
    }
    
}