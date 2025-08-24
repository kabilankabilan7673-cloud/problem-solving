var n=5
for(i=0;i<n;i++){
    line=""
    for(s=0;s<n-i-1;s++)
    {
        line=line+"  "
    }
    for(j=0;j<i*2+1;j++)
    {
        line=line+"* "
    }
    console.log(line);
}