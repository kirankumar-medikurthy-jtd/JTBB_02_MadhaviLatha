let str="bootcamp";
let count=0;
for(let i=0;i<str.length;i++){
    let bag="";
    for(let j=i;j<str.length;j++){
        bag=bag+str[j]
        count++
        console.log(bag)
    }
}
console.log(count)
