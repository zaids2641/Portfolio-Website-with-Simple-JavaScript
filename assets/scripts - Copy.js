function displayWindowSize(){
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  
  document.getElementById("screen-size").innerHTML = "Width: " + w + ", " + "Height: " + h;
}
  
window.addEventListener("resize", displayWindowSize);
displayWindowSize();

var today = new Date()
var year = today.getFullYear()
document.getElementById('year').innerHTML = year;

// Navbar Style
var navbar = document.querySelector('nav');
var navLink = document.getElementById('nav-items');
var sideMenu = document.getElementById('side-menu-content');
var sideMenuItems = document.getElementById('side-menu-items');
var brand = document.getElementById('brand');
var toggleMenu = document.getElementById('toggle-menu-button');
var hireMe = document.getElementById('hireme');
var sideSocials = document.getElementById('side-socials');

window.onScroll = function() {

if (window.pageYOffset > 200) {
navbar.classList.add('scrolled')
navLink.classList.add('navLinkScrollStyle')
sideMenu.classList.add('sideMenuScrollStyle-1')
sideMenuItems.classList.add('sideMenuItemsText')
brand.classList.add('brandScrollStyle')
toggleMenu.classList.add('toggle-button')
hireMe.classList.add('hireMeStyle')
sideSocials.classList.add('sideSocialsStyle')
} else {
navbar.classList.remove('scrolled')
navLink.classList.remove('navLinkScrollStyle')
sideMenu.classList.remove('sideMenuScrollStyle-1')
sideMenuItems.classList.remove('sideMenuItemsText')
brand.classList.remove('brandScrollStyle')
toggleMenu.classList.remove('toggle-button')
hireMe.classList.remove('hireMeStyle')
sideSocials.classList.remove('sideSocialsStyle')
}
}


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