var a=[[1,2],[3,4]]
var b=[[2,1],[7,2]]
var r=[[0,0],[0,0]]
for(i=0;i<a.length;i++)
{
    for(j=0;j<a.length;j++)
    {
        for(k=0;k<a.length;k++)
        {
            r[i][j]=r[i][j]+a[i][k]*b[k][j]
        }
    }
}
console.log(r);