// woven bag hover animation
let counter = 0;
function hover(img)
{  
   if (counter === 1) img.src = "images/IMG_5066.PNG";
   else if (counter === 2) img.src = "images/IMG_5069.PNG";
   else if (counter === 3) img.src = "images/IMG_5070.PNG";
   else if (counter === 4) img.src = "images/IMG_5071.PNG";
   else {
      img.src = "images/IMG_5065.PNG";
      counter = 1;
   }
   counter ++;
}

// open plastic basket page
function plasticClicky(div) {
   window.location.href = "plasticbasket.html";
}

// open crochet hanging page
function crochetHangingClicky(div) {
   window.location.href = "crochethanging.html";
}

// open pillow page
function pillowClicky(div) {
   window.location.href = "pillows.html";
}

// open rug page
function rugClicky(div) {
   window.location.href = "rugs.html";
}

// open woven bag page
function bagClicky(div) {
   window.location.href = "wovenbag.html";
}

// open tetris page
function tetrisClicky(div) {
   window.location.href = "tetris.html";
}

// open music/middie page
function middieClicky(div) {
   window.location.href = "middie.html";
}

// close button behavior
var closeButton = document.getgetElementById("closeButton");
function escapeClicky(div){
   window.location.href = "index.html";
}

// close pop-up when esc. is pressed (TODO)
