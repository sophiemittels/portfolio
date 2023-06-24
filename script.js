/**function bigImg(x) {
    x.style.height = "600px";
    x.style.width = "600px";
 }
 
 function normalImg(x) {
    x.style.height = "400px";
    x.style.width = "400px";
    x.style.margin = "0px 5px 0px 5px;";
    x.style.flex = "1 1 200px";
 }**/

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

// plastic basket popup
var plasticPopup = document.getElementById("plasticPopup");
function plasticClicky(div) {
   plasticPopup.style.display = "block";
}

// crochet hanging popup
var crochetHangingPopup = document.getElementById("crochetHangingPopup");
function crochetHangingClicky(div) {
   crochetHangingPopup.style.display = "block";
}

// pillow popup
var pillowPopup = document.getElementById("pillowPopup");
function pillowClicky(div) {
   pillowPopup.style.display = "block";
}

// rug popup
var rugPopup = document.getElementById("rugPopup");
function rugClicky(div) {
   rugPopup.style.display = "block";
}

// bag popup
var bagPopup = document.getElementById("bagPopup");
function bagClicky(div) {
   bagPopup.style.display = "block";
}

// tetris popup
var tetrisPopup = document.getElementById("tetrisPopup");
function tetrisClicky(div) {
   tetrisPopup.style.display = "block";
}

// close button behavior
var closeButton = document.getgetElementById("closeButton");
function escapeClicky(div){
   plasticPopup.style.display = "none";
   crochetHangingPopup.style.display = "none";
   pillowPopup.style.display = "none";
   rugPopup.style.display = "none";
   bagPopup.style.display = "none";
   tetrisPopup.style.display = "none";
}

// close pop-up when esc. is pressed (reference: https://jsfiddle.net/m9w8m/)
document.onkeydown = function(evt) {
   evt = evt || window.event;
   if (evt.keyCode == 27) {
      plasticPopup.style.display = "none";
      crochetHangingPopup.style.display = "none";
      pillowPopup.style.display = "none";
      rugPopup.style.display = "none";
      bagPopup.style.display = "none";
      tetrisPopup.style.display = "none";
   }
};