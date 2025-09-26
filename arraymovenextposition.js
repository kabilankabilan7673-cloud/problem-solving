var arr=[[1,2,3,4],
         [5,6,7,8],
         [9,10,11,12],
         [13,14,15,16]];
var res=[];
for(var i=0;i<arr.length;i++)
    {
        var temp=[];
        for(var j=0;j<arr.length;j++)
        {
            temp.push(0);
        }
        res.push(temp);
    } 
    var top=0;
    var right=arr.length-1;
    var bottom=arr.length-1;
    var left=0;
    while(top<=bottom&&left<=right)
    {
        res[top][top]=arr[top+1][top]
        for(var i=top;i<right;i++)
        {
            res[top][i+1]=arr[top][i];
        }
        top++;
        for(var j=top;j<=bottom;j++)
        {
            res[j][right]=arr[j-1][right];
        }
        right--;
        for(var k=right;k>=left;k--)
        {
            res[bottom][k]=arr[bottom][k+1];
        }
        bottom--;
        for(var l=bottom;l>=top;l--)
        {
            res[l][left]=arr[l+1][left];
        }
        left++;
    }
    console.log(res);