let button=document.querySelector(".submit");
let addbook=JSON.parse(localStorage.getItem("bookDetails"))||[];
let userdata=JSON.parse(localStorage.getItem("loginUser"));
if(!userdata){
     window.location.href="../landing_main/landingpage.html";
}
button.onclick=function(){
    let Name=document.querySelector(".Name").value;
    let Author=document.querySelector(".Author").value;
    let Year=document.querySelector(".Year").value;
    let Publisher=document.querySelector(".Publisher").value;
    let Types=document.querySelector(".Types").value;
    let Prize=document.querySelector(".prize").value;
    let Rating=document.querySelector(".Rating").value;
    let addbook=JSON.parse(localStorage.getItem("data"))||[];
    console.log(Name,Author,Year,Publisher,Types,Prize,Rating,addbook);
    let result=JSON.parse(localStorage.getItem("data"))||[];
    localStorage.setItem("data",JSON.stringify([...result,{Name,Author,Year,Publisher,Types,Prize,Rating}]));
    console.log(localStorage.getItem("data"));
    window.location.href="../view_details/view.html"
   
}