let number=45;
let binary='';
while(number > 0){
    binary+(number%2)+binary;
    number=Math.floor(number/2);
}
console.log(number);
