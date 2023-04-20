function palindrome(str){
    let bag=str.length;
    for(let i=0;i<bag/2;i++){
        if(str[i]  != str[bag-1-i]){
            return false;
        }
    }
    return true;
}
console.log(palindrome("latha"));
