var n=[1,7,8,23,65,22,45,78,99,88]
var temp=0
for(i=0;i<n.length;i++)
{
    for(j=i+1;j<n.length;j++)
    {
        if(n[i]>n[j])
        {
            temp=n[i]
        }
    }
}
console.log(temp);