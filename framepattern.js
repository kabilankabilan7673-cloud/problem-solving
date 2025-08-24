var n=4
for(var i=0;i<n;i++)
{
    line=""
    for(j=0;j<n;j++)
    {
        if(i==0||j==0||i==n-1||j==n-1)
        {
             
            line=line+"* "
        }
        else{
            line=line+"  "
        }
    }
    console.log(line)
}