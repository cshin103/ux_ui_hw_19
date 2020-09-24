console. log("your index.js file is loaded correctly!");
function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);

function myFunction(){
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};

var i = 0;
  var txt = "I'm Carnea";
  var speed = 150;

  function typeWriter() {
    if (i < txt.length) {
    document.getElementById("carnea").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
  }
  
typeWriter();


