var str1="slient";
var str2="listen";
var temp1=[];
var temp2=[];
if(str1.length==str2.length)
{
    for(var i=0;i<str1.length;i++)
    {
        temp1.push(str1[i]);
        temp2.push(str2[i]);
    }
    var store=[];
    for(var k=0;j<str1.length;i++)
    {
        for(var j=0;j<str2.length;j++)
        {
            if(temp1[k].charCodeAt(0)==temp2[j].charCodeAt(0))
            {
                store[j]=temp2[k];
                temp2[k]=temp2[j];
                temp2[j]=store[j];
            }
        }
    }
    var flag=1
    for(var l=0;l<temp1.length;l++)
    {
        if(temp1[l]!=temp2[l])
        {
            flag=0;
            break;
        }
    }
    if(flag==1)
    {
        console.log("anagram");
    }
    else{
        console.log("not anagram");
    }

}
else
{
    console.log("not anagram");
}