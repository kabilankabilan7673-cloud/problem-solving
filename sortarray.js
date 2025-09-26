var arr=[1,2,7,6,8,9,4,3]
for(var i=0;i<arr.length-1;i++)
    {
        // var min=i
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[j]<arr[i])
            {
                var temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    } 
    console.log(arr);
    var start=0
    var end=arr.length-1
    var result=[]
    while(start<=end)
    {
        if(start!=end)
        {
            result.push(arr[end])
            result.push(arr[start])
        }
        else
        {
            result.push(arr[start])
        }
        start++
        end--
    }
    console.log(result);