var num=158
var res=0
var temp=num
var total=0
while(num>0)
{
    var n=num%10
    res=n*n*n
    total=total+res
    num=parseInt(num/10)
}
if(temp==total)
{
    console.log("armstrong");
}
else
{
    console.log("not armstrong");
}
