function func(str)
{
    let i;
    let start="";
    for(i=0;i<str.length;i++)
    {
        if(str[i]!=" ")
        {
            start=start+str[i];
        }
        else
        {
            break;
        }
    }
    if(i==str.length)
    {
        return start;
    }
    let j;
    let rem="";
    for(j=i+1;j<str.length;j++)
    {
            rem=rem+str[j];
    }
    return func(rem) + " " + start;
}
console.log(func("one two three"))
