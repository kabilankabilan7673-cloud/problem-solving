var str=" ab cd  ef g "
var temp=0
for(i=0;i<str.length;i++)
{
    if(str[i]==" ")
    {
        temp=temp+1
    }
}
console.log(temp);