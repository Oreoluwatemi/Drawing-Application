const drawing = document.getElementById("canvas");
const incFont = document.getElementById("increase");
const decFont = document.getElementById("decrease");
const size = document.getElementById("fontSize");
const color = document.getElementById("color");
const erase = document.getElementById("erase");
const clear = document.getElementById("clear");

const ctx = drawing.getContext("2d");


var fontSize = 20;
var isDown = false;
let colorOfShape = "black";
let x = undefined;
let y = undefined;

incFont.onclick = function(){
   if (fontSize >= 30)
       fontSize = 1
    else
        fontSize++;  
    displaySize()
}

decFont.onclick = function(){
   if (fontSize <= 1)
       fontSize = 30
    else
        fontSize--; 
    displaySize()
}

drawing.onmousedown = function (e) {
     isDown = true;
    x = e.offsetX;
    y = e.offsetY;
};

drawing.onmouseup = function (e) {
 isDown = false;
     x = undefined;
     y = undefined;

};
drawing.onmousemove = function (e) {

    if(isDown){
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    
    circleShape(x2, y2);
        lineBtwShape(x,y,x2,y2);
        x = x2;
        y = y2;
    }
};

function circleShape(x,y) {
    ctx.beginPath();
    ctx.arc(x,y, fontSize, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = colorOfShape;
}

function lineBtwShape(x1,y1,x2,y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); 
     ctx.lineTo(x2, y2); 
    ctx.strokeStyle = colorOfShape;
    ctx.lineWidth = fontSize * 2;
    ctx.stroke();
}

function displaySize(){
    size.innerHTML = fontSize;
}

erase.onclick = function (){
    colorOfShape = "white";
}

color.onchange = function(e){
    colorOfShape = e.target.value;
}

clear.onclick = function (){
    ctx.clearRect(0,0, drawing.width, drawing.height);
}