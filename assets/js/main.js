// INIT AOS
AOS.init();

var nav = document.querySelector(".mobile-nav")
var menubtn = document.querySelector(".ng-menu");
var closebtn = document.querySelector(".ng-nav-close");
//c show menu hamburger
function showNav(){ 
  menubtn.addEventListener("click", () => {
    console.log('open');
  nav.style.display = 'block';
});
}

//c hide menu hamburger
function hideNav(){
  closebtn.addEventListener("click", () => {
    console.log('close');
    nav.style.display = 'none';
});
}


// switch theme
const theme = document.querySelector("#ng-end");
const section1 = document.querySelector(".section1")
section1.classList.toggle("section1-light")
theme.addEventListener("click", () => {
  const switch_btn = document.querySelector("#ng-theme-switch");
  const section1 = document.querySelector(".section1")

  if(switch_btn.classList.contains("ng-float-r")){  
    switch_btn.classList.remove("ng-float-r")
    switch_btn.style.background = 'gold'
    section1.classList.toggle("section1-light")
  } else {
    switch_btn.classList.add("ng-float-r")
    switch_btn.style.background = 'black'
    section1.classList.toggle("section1-light")
  }

});

// router
function goTo(id){
  const nav = document.querySelector(".mobile-nav")
  
    nav.style.display = 'none'

  var element = document.querySelector(`#${id}`);
  element.scrollIntoView({ behavior: 'smooth'});
}


// scroll to top
document.addEventListener('scroll',() => {
  if(window.scrollY > 50) {
    var element = document.querySelector(`#ng-go-top`);
  element.classList.remove('hide-to-top');    
  } else {
    var element = document.querySelector(`#ng-go-top`);
    element.classList.add('hide-to-top'); 
  }
})