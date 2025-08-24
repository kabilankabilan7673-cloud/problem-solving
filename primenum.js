var n=79
var found=false
for(var i=2;i<n;i++)
{
    if(n%i==0)
    {
        found=true
        break
    }
}
if(found==false)
{
    console.log("prime number");
}
else
{
    console.log("not prime number");
}