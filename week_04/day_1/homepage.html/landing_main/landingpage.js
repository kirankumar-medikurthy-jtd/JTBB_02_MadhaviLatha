//     function show(){
//     localStorage.removeItem("loginUser");

//     window.location.href="../login_page/login.html";
   
// }
let btn=document.querySelector(".btn");
btn.onclick=function(){
 
    localStorage.removeItem("loginUser");
       btn.textContent="sign in";
    window.location.href="../login_page/login.html";

var userdata=JSON.parse(localStorage.getItem("loginUser"));
let addbutton= document.querySelector(".no1");
if(!userdata=="adminData"){
    addbutton.innerHTML=""; 
    btn.textContent="sign in"
    window.location.href="../login_page/login.html";
}
}
function viewbook(){
    if(!userdata("adminData")){
        alert("viewbook page should be accessible only logged in user");
    }
    //     window.location.href="../landing_main/landingpage.html"
    // }
}
