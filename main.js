var canvas = document.getElementById("newCanvas");
ctx = canvas.getContext("2d");
var mouseEvent=""
    var color1=document.getElementById("colorInput").value;
    var radius2=document.getElementById("radiusInput").value;
    var width3=document.getElementById("widthInput").value;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){

    position_of_mouseX= e.clientX - canvas.offsetLeft;
    position_of_mouseY= e.clientY - canvas.offsetTop;

     if(mouseEvent == "mouseDown"){
         console.log("Current position of x and y coordinates = ");
         console.log("x = " +position_of_mouseX+"y="+position_of_mouseY);

         ctx.beginPath();
         ctx.strokeStyle= red;
         ctx.lineWidth= width3;
         ctx.arc(position_of_mouseX, position_of_mouseY, radius2, 0, 2 * Math.PI);
         ctx.stroke();
     }
}