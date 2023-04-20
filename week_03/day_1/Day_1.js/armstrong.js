let num=153;
let temp=num;
let k=0;
while(num > 0){
    r=num%10;
    k=k+(r*r*r);
    num=Math.floor(num/10);
}
if(temp == k){
    console.log("armstrong");
}else{
    console.log("not armstrong");
}
