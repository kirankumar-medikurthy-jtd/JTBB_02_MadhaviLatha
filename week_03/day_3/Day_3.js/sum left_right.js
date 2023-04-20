let arr=[[1,3,4],[6,3,2],[9,2,10]]
let bag="";
let sum=0
for(let i=0;i<arr.length;i++){
    bag=bag+arr[i][i]+" "
    sum=sum+arr[i][i];
}
for(let i=0;i<arr.length-2;i++){
     sum+=arr[0][arr.length-1]
}
for(let i=0;i<arr.length-2;i++){
     sum+=arr[arr.length-1][0]
}
console.log(bag)
console.log(sum)

