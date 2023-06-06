function bigImg(x) {
    x.style.height = "600px";
    x.style.width = "600px";
 }
 
 function normalImg(x) {
    x.style.height = "400px";
    x.style.width = "400px";
    x.style.margin = "0px 5px 0px 5px;";
    x.style.flex = "1 1 200px";
 }

let counter = 0;

function hover(img)
{  
   if (counter === 1) img.src = "IMG_5066.PNG";
   else if (counter === 2) img.src = "IMG_5069.PNG";
   else if (counter === 3) img.src = "IMG_5070.PNG";
   else if (counter === 4) img.src = "IMG_5071.PNG";
   else {
      img.src = "IMG_5065.PNG";
      counter = 1;
   }
   counter ++;
}