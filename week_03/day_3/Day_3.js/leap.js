let arr = [3,8,19,2,7,6];
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            temp=arr[j];
            arr[j]=arr[j+1]
            arr[j+1]=temp;
        }
    }
}
console.log(arr[arr.length-3])
console.log(arr[1])
