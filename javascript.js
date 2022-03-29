let accessbutton=document.getElementById("filterbutton")
let access=document.getElementById("accessibility")



accessbutton.addEventListener("click", function(){
    access.classList.toggle("access");
    localStorage.setItem("clicked", "yes")
});

if (localStorage.getItem("clicked")=="yes"){
    let access=document.getElementById("accesibility")
    access.classList.add("access")
}

/*
let access2=document.querySelectorAll(".accesibility")
accessbutton.addEventListener("click", function(){
    for (oneAcessDiv of access2){
        oneAcessDiv.classList.toggle("access");
        sessionStorage.setItem("clicked", "yes")
    }
});

if (sessionStorage.getItem("clicked")=="yes"){
    let access2=document.querySelectorAll(".accesibility")
         access2.className += " access";
         access2.classList.add("access");
}*/
