let str="madhu is a good girl";
let arr=str.split('');
let start=0;
let end=str.length-1;
while(start < end){
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++;
    end--;
}
console.log(arr.join(''));
