var signupdata=JSON.parse(localStorage.getItem("loginUser"));
		if(signupdata){
			location.href="../landing_main/landingpage.html";
		}
		else{

var result=JSON.parse(localStorage.getItem("signupdata")) || [];
var adminCode=JSON.parse(localStorage.getItem("adminCode"));
		
		var button=document.querySelector(".button");
		button.onclick=function(){
			var name=document.querySelector(".name").value;
			var password=document.querySelector(".password").value;
			var adminCodeInput=document.querySelector(".admin").value;
			var temp = false	
			if(result.name && result.password == " "){
				alert("please enter details");
				return
				//var adminCode=JSON.parse(localStorage.setItem("AdminCode")) || [];
			}else{

				for(let i=0; i<result.length; i++){

					if(result[i].username === name && result[i].password === password){
			console.log("yes")

						temp= true
						if(adminCodeInput === "" || adminCodeInput === adminCode){
							 alert("login successful");
							localStorage.setItem("loginUser",JSON.stringify({...result[i], admin: adminCodeInput === "" ? false : true}))
							//window.location.href="../view_details/view.html"
							return
						}
						else{
							alert("Wrong Admin Code")
							return
							
						}
					}
				}
			}
			if(!temp) alert("wrong username and password")
			
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