var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var reset=document.querySelector("#reset");
var numInput=document.querySelector("input");
// these are the buttons
var p1score=0;
var p2score=0;
var winningScore=5;

var p1ScoreDisplay=document.querySelector("#player1");
var p2ScoreDisplay=document.querySelector("#player2");
var maxScoreDisplay=document.querySelector("#maxScore");
// these are the span elements

p1.addEventListener("click",function(){
  p1score++;
  if(p1score==winningScore)
  { p1ScoreDisplay.style.color="green";
    p1ScoreDisplay.textContent=p1score;
    p2.disabled=true;
    p1.disabled=true;
  }

  else{
    p1ScoreDisplay.textContent=p1score;
  }
   });

p2.addEventListener("click",function(){
    p2score++;
  if(p2score==winningScore)
  { p2ScoreDisplay.style.color="green";
    p2ScoreDisplay.textContent=p2score;
    p2.disabled=true;
    p1.disabled=true;
  }

  else{
    p2ScoreDisplay.textContent=p2score;
  }
    });

reset.addEventListener("click",function(){
        p1ScoreDisplay.textContent=0;
        p2ScoreDisplay.textContent=0;
        p1score=0;
        p2score=0;
        p1.disabled=false;
        p2.disabled=false;
        p2ScoreDisplay.style.color="black";
        p1ScoreDisplay.style.color="black";

    });


numInput.addEventListener("change",function(){
maxScoreDisplay.textContent=numInput.value;
winningScore=numInput.value;
})    