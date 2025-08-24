var num=121
var res=0
var temp=num
while(num>0)
{
    var n=num%10
    res=(res*10)+n
    num=parseInt(num/10)
}
if(temp==res)
{
    console.log("palindrome");
}
else
{
    console.log("not palindrome");
}
