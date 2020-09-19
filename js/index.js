console. log("your index.js file is loaded correctly!");
function myFunction(){
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};
var i = 0;
var txt = "Hi! Nice to Meet You!";
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
  document.getElementById("hellohero").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
  }
}

typeWriter();

function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);