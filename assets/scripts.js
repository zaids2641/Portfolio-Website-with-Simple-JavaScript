var today = new Date()
var year = today.getFullYear()
document.getElementById('year').innerHTML = year;

// Onscroll Effect Style
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".navbar").css("background" , "rgb(253, 253, 253)");
	    $(".navbar").css("box-shadow" , "0px 2px 12px -5px #000000");
	    $(".brand-text").css("color" , "rgb(24, 24, 24)"); 
	    $(".fa-bars").css("color" , "rgb(24, 24, 24)"); 
	    $(".side-menu-content").css("background" , "#fff"); 
	    $(".menu-link").css("color" , "rgb(24, 24, 24)"); 
	    $(".hireme-btn ").css("color" , "rgb(24, 24, 24)");  
	    $(".hireme-btn ").css("border" , "1px rgb(68, 68, 68) solid"); 
	  }
	  else{
		  $(".navbar").css("background" , "none");
	    $(".navbar").css("box-shadow" , "none");
	    $(".brand-text").css("color" , "#fff");  
	    $(".fa-bars").css("color" , "#fff"); 
	    $(".side-menu-content").css("background" , "rgba(17, 17, 17,0.8)");  
	    $(".side-menu-items").css("color" , "rgb(24, 24, 24)"); 	 
	    $(".menu-link").css("color" , "#fff");  
	    $(".hireme-btn").css("color" , "#fff"); 
	    $(".hireme-btn").css("border" , "1px solid #fff"); 
	  }
  })
})


function dropdownToggle() {
document.getElementById("side-menu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onClick = function(event) {
if (!event.target.matches('.dropBtn')) {
var sideMenu = document.getElementsByClassName("side-menu-content");
var i;
for (i = 0; i < sideMenu.length; i++) {
  var openSideMenu = sideMenu[i];
  if (openSideMenu.classList.contains('show')) {
    openSideMenu.classList.remove('show');
  }
}
}
}


// Form
function validateForm() {

var name = document.forms["form"]["name"].value;
var email = document.forms["form"]["email"].value;
var message = document.forms["form"]["message"].value;

if (name == "" || name == null) {
document.getElementById("name").innerHTML = "Name is required";
document.getElementById("name").classList.add('showError')
return false;
}
else {
document.getElementById("name").classList.remove('showError')
document.getElementById("name").innerHTML = "Name";  
}

if (email == "" || email == null) {
document.getElementById("email").innerHTML = "Email is required";
document.getElementById("email").classList.add('showError')
return false;
}
else {
document.getElementById("email").classList.remove('showError')
document.getElementById("email").innerHTML = "Email";      
}


if (message == "" || message == null) {
document.getElementById("message").innerHTML = "Message is required";
document.getElementById("message").classList.add('showError')
return false;
}
else {
document.getElementById("message").classList.remove('showError')
 
}

var success = document.getElementById("success").innerHTML = "Thank you for contacting me. I will reply to you the soonest";
window.alert(success);
window.open('index.html', '_self');
}

function inputFocus() {
var label = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");

label.classList.remove('showError')
document.getElementById("name").innerHTML = "Name";

label.classList.remove('showError')
document.getElementById("email").innerHTML = "Email";
email.classList.remove('showError')

document.getElementById("message").innerHTML = "Message";
message.classList.remove('showError')  
}