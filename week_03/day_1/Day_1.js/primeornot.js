let n=6;
let flag=true;
	for(let i=2;i<=n-1;i++){
		if(n%i==0){
			flag=false;
			break;
		}
	if(flag==true){
		console.log("prime");
	}else{
		console.log("not prime");
	}
