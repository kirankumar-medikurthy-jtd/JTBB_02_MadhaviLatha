let final=document.querySelector(".final");
let result=JSON.parse(localStorage.getItem("bookData"));
let totalData=JSON.parse(localStorage.getItem("bookDetails"));


var userdata=JSON.parse(localStorage.getItem("loginUser"));
if(!userdata){
    //   window.location.href="../landing_main/landingpage.html";
      
}



        let name = document.createElement("h2");
        name.textContent =  "BookName:"+result.name;
        name.style.marginLeft="35%";
        name.setAttribute("id", "name");
        //name.style.marginTop="200px";

        let author = document.createElement("h3");
        author.textContent = "Author:"+result.authour;
        author.style.marginLeft="35%";
        author.setAttribute("id", "author");
       

        let year=document.createElement("h3");
        year.textContent="Year:"+result.year;
        year.style.marginLeft="35%";
        year.setAttribute("id", "year");

        let type=document.createElement("h3");
        type.textContent="Type:"+result.type;
        type.style.marginLeft="35%";
        type.setAttribute("id", "type");



        let publisher=document.createElement("h3");
        publisher.textContent="Publisher:"+result.publisher;
        publisher.style.marginLeft="35%";
        publisher.setAttribute("id", "publisher");


        let rate = document.createElement("h3");
        rate.textContent = "rate : " + result.rate;
        rate.style.marginLeft="35%";
        rate.setAttribute("id", "rate");


    
        let avatar = document.createElement("img");
        avatar.setAttribute("src", result.avatar);
        avatar.style.marginLeft="35%";
        avatar.style.marginTop="70px";
        avatar.setAttribute("id", "avatar");

        let element=document.createElement("button");
        element.setAttribute("class","deleting")
        element.textContent="DELETE";
        element.style.borderRadius="30px";
       
        element.onclick = function(){
            let dub = []
           for(let i=0; i<totalData.length; i++){
            if(result.serial_number != totalData[i].serial_number){
                dub.push(totalData[i])
            }else{
                console.log(totalData[i], result)
            }
           }
           localStorage.removeItem("bookData")
           localStorage.setItem("bookDetails", JSON.stringify(dub))
           alert("Succussfully deleted!")
            window.location.href="../view_details/view.html";
        }
       
   

        
        let edit=document.createElement("button");
        edit.setAttribute("class","editing");
        edit.textContent="EDIT";
        edit.style.marginLeft="100px";
        edit.style.borderRadius="30px";
        edit.onclick=function(){
            final.innerHTML="";
            let divname=document.createElement("div");
            let inputname=document.createElement("input");
            inputname.setAttribute("type","text");
            inputname.setAttribute("value",result.authour);
            inputname.style.margin="20px";
            inputname.style.marginLeft="180px";
            inputname.setAttribute("class","namediv");
            divname.append=inputname;



            let divyear=document.createElement("div");
            let inputyear=document.createElement("input");
            inputyear.setAttribute("type","text");
            inputyear.setAttribute("value",result.year);
            inputyear.style.margin="20px";
            inputyear.style.marginLeft="180px";
            inputyear.setAttribute("class","yeardiv");
            divyear.append=inputyear;



            let divtype=document.createElement("div");
            let inputtype=document.createElement("input");
            inputtype.setAttribute("type","text");
            inputtype.setAttribute("value",result.type);
            inputtype.style.margin="20px";
            inputtype.style.marginLeft="180px";
            inputtype.setAttribute("class","typediv");
            divtype.append=inputtype;



            let divpublisher=document.createElement("div");
            let inputpublisher=document.createElement("input");
            inputpublisher.setAttribute("type","text");
            inputpublisher.setAttribute("value",result.publisher);
            inputpublisher.style.margin="20px";
            inputpublisher.style.marginLeft="180px";
            inputpublisher.setAttribute("class","publisherdiv");
            divpublisher.append=inputpublisher;



            let divrate=document.createElement("div");
            let inputrate=document.createElement("input");
            inputrate.setAttribute("type","text");
            inputrate.setAttribute("value",result.rate);
            inputrate.style.margin="20px";
            inputrate.style.marginLeft="180px";
            inputrate.setAttribute("class","ratediv");
            divrate.append=inputrate;

            let avatar = document.createElement("img");
            avatar.setAttribute("src", result.avatar);
            avatar.style.marginLeft="140px";
            avatar.style.padding="30px";

            let name = document.createElement("h2");
            name.textContent =  "BookName:"+result.name;
            name.style.marginLeft="150px";

            edit.append(divname,divyear,divtype,divpublisher,divrate);
              
            let Done=document.createElement("button");
            Done.textContent="DONE";
            Done.style.marginLeft="200px";
            Done.style.borderRadius="30px";
            Done.onclick=function(){
                var name = document.querySelector(".namediv").value
                var year = document.querySelector(".yeardiv").value;
                var type = document.querySelector(".typediv").value;
                var publisher=document.querySelector(".publisherdiv").value;
                var rate=document.querySelector(".ratediv").value;
                let obj={name,year,type,publisher,rate};
               
                localStorage.setItem("bookData",JSON.stringify({...result,...obj}));

                let empty=[];
                for(let i=0;i<totalData.length;i++){
                    if(totalData[i].serial_number == result.serial_number){
                        empty.push({...result,...obj})
                    }else{
                        empty.push(totalData[i]);
                    }
                }
                alert("Edited Succesfully");
                localStorage.setItem("bookDetails",JSON.stringify(empty));
                window.location.href="../nextpage/next.html";
            }


            final.append(avatar,name,divname,inputname,divyear,inputyear,divtype,inputtype,divpublisher,inputpublisher,divrate,inputrate,Done);

            }
        
                

        final.append(avatar,name,author,year,type,publisher,rate,edit,element);
        if(!userdata.admin){
            let editing = document.querySelector(".editing");
            editing.remove()
            let deleting = document.querySelector(".deleting");
            deleting.remove() 
          }
