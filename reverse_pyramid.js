var n=3
for(i=0;i<n;i++)
{
    line=""
    for(s=0;s<i;s++)
    {
        line=line+" "
    }
    for(j=0;j<2*(n-i)-1;j++)//for(j=0;j<(2*n)-(2*i)-1;j++)
    {
        line=line+"*"
    }
    console.log(line)
}