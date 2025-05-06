let slider = document.querySelector(".slider"); 

let index = 1;
setInterval(function() {
    let percentage = index + -100;
    slider.style.transform = "translateX("+ percentage +"%)";
        index++;

},1000);    