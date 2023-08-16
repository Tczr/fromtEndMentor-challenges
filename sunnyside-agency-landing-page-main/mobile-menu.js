const menuBtn = document.querySelector(".burger-menu");
const  menu = document.getElementById("links");

menuBtn.addEventListener("click",()=>{
    if(menuBtn.classList.contains("close")){
   
    
    menu.style.display="none";
    menuBtn.setAttribute("data-toggle",false)
    
    console.log(menuBtn.classList[0])
    menuBtn.classList.remove("close");
    }
else{
    menu.style.display="flex";
    menuBtn.setAttribute("data-toggle",true)
    menuBtn.classList.add("close")
}
}
)