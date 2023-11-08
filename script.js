
var con = document.querySelector(".container");

var icon = document.querySelector("i");

con.addEventListener('dblclick', function() {

    icon.style.transform = 'translate(-50%,-50%) scale(2.5)';
    icon.style.opacity = .5;

   setTimeout(function() {
    icon.style.opacity = 0;
   }, 2000);
});