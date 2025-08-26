var n=5;
// var m=5;
for(var i=0;i<n;i++)
{
    var line="";
    for(var j=0;j<n;j++)
    {
        if(i==j||(i+j)==n-1)
        {
            line=line+"* ";
        }
        else
        {
            line=line+"  ";
        }
    }
    console.log(line);
}
