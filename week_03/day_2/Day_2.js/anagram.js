let str1="madhu";
let str2="latha";
if(str1.length!=str2.length){
    console.log("not anagram");
}else{
    let count=0;
    for(let i=0;i<str1.length;i++){
        for(let j=0;j<str2.length;j++){
            if(str1[i]==str2[j]  &&  str[i]!="!"){
                count+=1;
                str1[i]='!';
                str2[j]='!';
            }
        }
    }
    if(count ==str1.length){
        console.log("anagram");
    }else{
        console.log("not anagram");
    }
}
