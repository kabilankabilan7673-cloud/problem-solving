var a=8
var b=6
var max
if(a>b)
{
    max=a
}
else
{
    max=b
}
while(true)
{
    if(max%a==0&&max%b==0)
    {
        console.log(max)
        break
    }
    max++
}