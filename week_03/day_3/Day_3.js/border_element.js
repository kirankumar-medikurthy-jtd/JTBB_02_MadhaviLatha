let arr=[[1,3,4],[6,3,2],[9,2,10]]
let bag="";
let sum=0
for(let i=0;i<arr.length;i++){
    bag=bag+arr[i][0]+" "
}
for(let i=1;i<arr.length;i++){
    bag=bag+arr[arr.length-1][i]+" "
}
for(let i=arr.length-2;i>=0;i--){
    bag=bag+arr[i][arr.length-1]+" "
}
for(let i=arr.length-2;i>=1;i--){
    bag=bag+arr[0][i]+" "
}
console.log(bag)

