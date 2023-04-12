function titleTransition(){
  const title = document.getElementById("title");
  title.classList.toggle("title-active")
  const fire = document.getElementById("fire");
  fire.classList.toggle("fire-active");
  const red = document.querySelector(".red");
  red.classList.toggle("red-active")
  const orange = document.querySelector(".orange");
  orange.classList.toggle("orange-active");
  const yellow = document.querySelector(".yellow");
  yellow.classList.toggle("yellow-active");
  const green = document.querySelector(".green");
  green.classList.toggle("green-active");
}
window.addEventListener("load", titleTransition);

setTimeout(function(){
  const animationDiv = document.getElementById("animation");
  animationDiv.style.display = "none"
  const title = document.getElementById("title-new");
  title.style.opacity = "1";
  const landingPage = document.querySelector(".landing-page");
  landingPage.classList.toggle("landing-page-active")
}, 2500);

const fullway = document.querySelector(".fullway");
fullway.addEventListener("click", function(){
  const fullwayvalue = "15.8"
  const indicator = document.getElementById("indicator");
  indicator.style.transform = "rotate(150deg)";
  indicator.style.transition = "0.3s ease-in-out";
})
const fullwayone = document.querySelector(".fullwayone");
fullwayone.addEventListener("click", function(){
  const fullwayonevalue = "14.75";
  const indicator = document.getElementById("indicator");
  indicator.style.transform = "rotate(130deg)";
  indicator.style.transition = "0.3s ease-in-out";
})
const fullwaytwo = document.querySelector(".fullwaytwo");
fullwaytwo.addEventListener("click", function(){
  const fullwaytwovalue = "13.7";
  const indicator = document.getElementById("indicator");
  indicator.style.transform = "rotate(120deg)";
  indicator.style.transition = "0.3s ease-in-out";
})
const fullwaythree = document.querySelector(".fullwaythree");
fullwaythree.addEventListener("click", function(){
  const fullwaythreevalue = "12.65";
  const indicator = document.getElementById("indicator");
  indicator.style.transform = "rotate(110deg)";
  indicator.style.transition = "0.3s ease-in-out";

  const fillvalue = "1.05";
  document.getElementById("gallons").textContent = fillvalue;
})
const upperquarter = document.querySelector(".upperquarter");
upperquarter.addEventListener("click", function(){
  const upperquartervalue = "11.6";
  const indicator = document.getElementById("indicator");
  indicator.style.transform = "rotate(100deg)";
  indicator.style.transition = "0.3s ease-in-out";

  const fillvalue = "2.1";
  document.getElementById("gallons").textContent = fillvalue;
})
const upperquarterone = document.querySelector(".upperquarterone");
upperquarterone.addEventListener("click", function(){
  const upperquarteronevalue = "10.55";
  const indicator = document.getElementById("indicator");
  indicator.style.transform = "rotate(85deg)";
  indicator.style.transition = "0.3s ease-in-out";

  const fillvalue = "3.15";
  document.getElementById("gallons").textContent = fillvalue;
})
const upperquartertwo = document.querySelector(".upperquartertwo");
upperquartertwo.addEventListener("click", function(){
  const upperquartertwovalue = "9.5";
  const indicator = document.getElementById("indicator");
  indicator.style.transform = "rotate(70deg)";
  indicator.style.transition = "0.3s ease-in-out";

  const fillvalue = "4.2";
  document.getElementById("gallons").textContent = fillvalue;
})
const half = document.querySelector(".half");
half.addEventListener("click", function(){
  const halfvalue= "8.45";
  const indicator = document.getElementById("indicator");
  indicator.style.transform = "rotate(50deg)";
  indicator.style.transition = "0.3s ease-in-out";

  const fillvalue = "5.25";
  document.getElementById("gallons").textContent = fillvalue;

})
const halfone = document.querySelector(".halfone");
halfone.addEventListener("click", function(){
  const halfonevalue= "7.4";
  const indicator = document.getElementById("indicator");
  indicator.style.transform = "rotate(40deg)";
  indicator.style.transition = "0.3s ease-in-out";
  const fillvalue = "6.3";
  document.getElementById("gallons").textContent = fillvalue;

})
const halftwo = document.querySelector(".halftwo");
halftwo.addEventListener("click", function(){
  const halftwovalue= "6.35";
  const indicator = document.getElementById("indicator");
  indicator.style.transform = "rotate(25deg)";
  indicator.style.transition = "0.3s ease-in-out";
  const fillvalue = "7.35";
  document.getElementById("gallons").textContent = fillvalue;


})
const lowerquarter = document.querySelector(".lowerquarter");
lowerquarter.addEventListener("click", function(){
  const lowerquartervalue= "5.3";
  const indicator = document.getElementById("indicator");
  indicator.style.transform = "rotate(15deg)";
  indicator.style.transition = "0.3s ease-in-out";
  const fillvalue = "8.4";
  document.getElementById("gallons").textContent = fillvalue;



})
const lowerquarterone = document.querySelector(".lowerquarterone");
lowerquarterone.addEventListener("click", function(){
  const lowerquarteronevalue= "4.25";
  const indicator = document.getElementById("indicator");
  indicator.style.transform = "rotate(8deg)";
  indicator.style.transition = "0.3s ease-in-out";
  const fillvalue = "9.45";
  document.getElementById("gallons").textContent = fillvalue;



})
const lowerquartertwo = document.querySelector(".lowerquartertwo");
lowerquartertwo.addEventListener("click", function(){
  const lowerquartertwovalue= "3.2";
  const indicator = document.getElementById("indicator");
  indicator.style.transform = "rotate(-1deg)";
  indicator.style.transition = "0.3s ease-in-out";
  const fillvalue = "10.5";
  document.getElementById("gallons").textContent = fillvalue;


})
const lowerquarterthree = document.querySelector(".lowerquarterthree");
lowerquarterthree.addEventListener("click", function(){
  const lowerquarterthreevalue= "2.15";
  const indicator = document.getElementById("indicator");
  indicator.style.transform = "rotate(-20deg)";
  indicator.style.transition = "0.3s ease-in-out";
  const fillvalue = "11.55";
  document.getElementById("gallons").textContent = fillvalue;


})
const empty = document.querySelector(".empty-fuel");
empty.addEventListener("click", function(){
  const emptyvalue= "0";
  const indicator = document.getElementById("indicator");
  indicator.style.transform = "rotate(-50deg)";
  indicator.style.transition = "0.3s ease-in-out";

  const fillvalue = "13.7";
  document.getElementById("gallons").textContent = fillvalue;


})
document.getElementById("fill-button").addEventListener("click", function(){
  const messageBox = document.getElementById("message-box");
  messageBox.classList.toggle("message-box-active")
})
document.getElementById("message-button").addEventListener("click", function(){
  const messageBox = document.getElementById("message-box");
  messageBox.classList.remove("message-box-active")
})

