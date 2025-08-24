var n=10
for(var i=2;i<n;i++)
{
    var found=false
    for(var j=2;j<i;j++)
    {
        if(i%j==0)
        {
            found=true
            break
        }
    }
    if(found==false)
    {
        console.log(i);
    }
}