const navbtn=document.getElementById("navbtn");
var navopen=false;
const navBarItems=document.getElementById("navitems")
const navBar=document.getElementById("navbar")


navbtn.addEventListener('click',()=>{
    navopen = !navopen
    if(navopen==true){
        navbtn.src="images/icon-close.svg";
    }else{
        navbtn.src="images/icon-hamburger.svg";
    }
    navBar.classList.toggle("bg-black");
    navBarItems.classList.toggle("hidden");

})