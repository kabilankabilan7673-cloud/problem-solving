var num=250437
var temp=num
var digit=1
var l=[]
while(temp>0)
{
    var r=temp%10
        l.push(r*digit)
    digit=digit*10
    temp=parseInt(temp/10)
}
console.log(l);