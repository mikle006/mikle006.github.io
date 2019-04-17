var background = document.getElementById("background");
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var rain;


function startRain(interval) {
clearInterval(rain);
rain = setInterval(function() {
  var x = Math.floor((Math.random() * 100) + 1);
  var y = Math.floor((Math.random() * 100) + 1);
  var ripple = document.createElement("DIV");
  ripple.className = 'ripple';
  ripple.style.top = y + "%";
  ripple.style.left = x + "%";
  background.appendChild(ripple);
  setTimeout(function() {
    ripple.parentElement.removeChild(ripple);
  }, 10000)
}, interval)
}


//GO
startRain(90)