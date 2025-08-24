var a=[[1,2,3],[4,5],[6,7]]
var b=[[1,2,3],[4,5],[6,7]]
var r=[[0,0,0],[0,0],[0,0]]
for(i=0;i<a.length;i++)
{
    for(j=0;j<a[i].length;j++)
    {
        r[i][j]=a[i][j]+b[i][j]
    }
}
console.log(r);