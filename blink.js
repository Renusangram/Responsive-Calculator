// Author:Sangram
// Assignment:Addskill week 5


document.addEventListener("DOMContentLoaded", (event) => {
var blink = document.getElementById('blink');
        setInterval(function() {
            blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
        }, 1000);
    });