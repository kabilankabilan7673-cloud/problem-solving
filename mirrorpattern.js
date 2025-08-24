var n=3
var l=0
for(i=-n;i<=n;i++)
{
    line=""
    if(i<0)
    {
        l=-i
    }
    else
    {
        l=i
    }
    for(s=0;s<n-l;s++)
    {
        line=line+""
        // line = line + " "
        // line = line + "  "
    }
    for(j=0;j<l+1;j++)
    {
        line=line+"* "
    }
    console.log(line);
}