var i = 0;
var txt = 'WELCOME TO PROFOUND FACT INSIGHTS'; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */
// var ts = 0;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    // ts+=speed;
  }
  else {
    i=0;
    document.getElementById("demo").innerHTML = '';
    setTimeout(typeWriter, speed+100);
  }
}

window.onload = function () {
    setTimeout(typeWriter,50);
}



