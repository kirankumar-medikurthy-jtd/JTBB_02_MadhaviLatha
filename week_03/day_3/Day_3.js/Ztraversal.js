let arr=[[1,3,4],[6,3,2],[9,2,10]]
let bag="";
for(let i=0;i<arr.length;i++){
    bag=bag+arr[0][i]+" "
}
let i=0;
let j=arr.length-2;
while(i<=j && j>=0){
    bag=bag+arr[i][j]+" "
    i++;
    j--
}
for(let i=0;i<arr.length;i++){
    bag=bag+arr[arr.length-1][i]+" "
}
console.log(bag)

