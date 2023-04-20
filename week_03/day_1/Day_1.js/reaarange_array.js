let arr=[2,3,4,6,5,18];
let array=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        arr.push(arr[i]);
    }
}
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==1){
        arr.push(arr[i]);
    }
}
console.log(arr);
