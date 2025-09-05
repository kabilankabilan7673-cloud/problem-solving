let a={name:"abc",
        age:18
};
for(let k in a)
{
    console.log(k+":"+a[k]);
}


let b=[1,2,3];
for(let k of b)
{
    console.log(k);
}


let c=[1,2,3];
c.forEach((n,i)=>{
    console.log(n+","+i);
});
