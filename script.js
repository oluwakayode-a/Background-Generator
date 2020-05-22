var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.body

// match the first background on-load
var bg = getComputedStyle(body).backgroundImage;
body.style.background = "linear-gradient(to right, "  + color1.value + ", "  + color2.value + ")";
css.textContent = body.style.background + ';'


function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value + ", " 
    + color2.value + ")";

    css.textContent = body.style.background + ';'
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

