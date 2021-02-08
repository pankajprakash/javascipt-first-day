var s1=document.querySelector(".switchA")
var s2=document.querySelector(".switchB")




    //  console.log(s1)
    //  document.body.style.background="black"; 

s1.addEventListener("click",function(){
    if(s1.checked!=s2.checked){
    document.body.style.background="black";
    }
    if(s1.checked==false && s2.checked==false){
        document.body.style.background="white";
    }

    if(s1.checked && s2.checked){
        document.body.style.background="white";
    }
})

s2.addEventListener("click",function(){
    if(s2.checked!=s1.checked)
    document.body.style.background="black";

    if(s1.checked==false && s2.checked==false){
        document.body.style.background="white";
    }
    if(s1.checked && s2.checked){
        document.body.style.background="white";
    }
})

