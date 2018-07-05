var colors=generateRandomColor(6);
var h1=document.querySelector("h1");

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();

var colorDisplay=document.getElementById("ColorDisplay");
var msg=document.getElementById("message");
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];

    squares[i].addEventListener("click",function(){
     var clickedColor=this.style.backgroundColor;
     if(pickedColor===clickedColor)
        { msg.textContent="correct!!";
            for(var i=0;i<squares.length;i++)
            {
                squares[i].style.background=clickedColor;
            }      
            h1.style.background=clickedColor; 
         }
     else
        {this.style.background="#232323"; 
         msg.textContent="try again";}   
     });
}

var resetButton=document.querySelector("button");
resetButton.addEventListener("click",function(){
    colors=generateRandomColor(6);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=colors[i];
}

});

function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}


function generateRandomColor(num){
    var arr=[];
    for(var i=0;i<num;i++){
    arr.push(randomColor());}
    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
    
}