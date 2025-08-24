var n = 5;
for(var i = 0; i < n; i++)
{
    var line = ''
    for(var s = 0; s < n-i-1; s++)
    {
        line = line + '  '
    }
        for(var j = 0; j < i+1; j++)
        {
            line = line + '* '
        }
    
    console.log(line);
}