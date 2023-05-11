var signupdata=JSON.parse(localStorage.getItem("loginUser"));
		if(signupdata){
			location.href="../landing_main/landingpage.html";
		}
		else{
		let results = JSON.parse(localStorage.getItem("signupdata"));
		var button=document.querySelector(".button");
		button.onclick=function(){  
			var name=document.querySelector(".username").value;
			var password=document.querySelector(".new").value;
			var confirm=document.querySelector(".confirm").value;
			if(password === confirm){
				let empty=[];
				for(let i=0;i<results.length;i++){
			
					if(name===results[i].username){
						console.log(results[i]);
						if(password != results[i].password){
							
							empty.push({...results[i], password})
						}		
					}
					else{
						empty.push(results[i])
					}
				
				}	
				localStorage.setItem("signupdata", JSON.stringify(empty));
				alert("password changed")
				
			}
			else{
				console.log(password, confirm)
				alert("password not matching")
			}
		
		}
//password eye icon
		let image = document.getElementById("display1");

		image.onclick=function(){
			console.log("yes")
		if (document.querySelector(".new").type == "password") {
			document.querySelector(".new").setAttribute("type", "text");
	  
		} else {
		  document.querySelector(".new").setAttribute("type", "password");
		}
	}
	let image1 = document.getElementById("display2");

		image1.onclick=function(){
			console.log("yes")
		if (document.querySelector(".confirm").type == "password") {
			document.querySelector(".confirm").setAttribute("type", "text");
	  
		} else {
		  document.querySelector(".confirm").setAttribute("type", "password");
		}
	}
}