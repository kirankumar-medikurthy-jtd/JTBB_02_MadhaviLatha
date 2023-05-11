var signupdata=JSON.parse(localStorage.getItem("loginUser"));
		if(signupdata){
			location.href="../landing_main/landingpage.html";
		}
		else{


var btn=document.querySelector(".button");
var result=JSON.parse(localStorage.getItem("signupdata")) || [];
var adminCode=JSON.parse(localStorage.getItem("adminCode"));

btn.onclick=function(){

	var username=document.querySelector(".username").value; 
	var email=document.querySelector(".email").value;
	var password=document.querySelector(".password").value;
	var admin=document.querySelector(".admin").value

	if(username !== "" && email !== "" && password !== ""){
			
		for(let i=0; i<result.length; i++){
			console.log(result)
            if(result[i].username === username){
				alert("User already exist");
				return
			}
		}
		console.log(admin, adminCode)
		if(admin === "" || admin === adminCode){
			localStorage.setItem("signupdata",JSON.stringify([...result,{username,email,password,admin: (admin === "" ? false : true)}]));
			localStorage.setItem("loginUser",JSON.stringify({username,email,password,admin: (admin === "" ? false : true)}));
			console.log(localStorage.getItem("signupdata"));
				
			alert("Account Created Successfully");
			window.location.href = "../login_page/login.html";
			
		}
		else{
			alert("Wrong Admin Code");
		}

	}else{
		alert("Please enter all data")
	}
}
let image = document.getElementById("display2");

image.onclick=function(){
	console.log("yes")
if (document.querySelector(".password").type == "password") {
	document.querySelector(".password").setAttribute("type", "text");

} else {
  document.querySelector(".password").setAttribute("type", "password");
}
}
}