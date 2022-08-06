screen_width=0;
screen_height=0;
bottle="";
speak_data="";
to_number="";
window.webkitSpeechRecognition()

function preload(){
    loadimage(bottle)
    to_number=Number(content);
    if(Number.isInteger(to_number));
    screen_width=window.innerWidth;
    screen_height=window.innerHeight;
}

function setup(){
    Canvas=createCanvas(150,150);
    Canvas.center()
    canvas.position(100);
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function draw(){
    if(draw_bottle==set){
      for (var i=1; i <= to_number;i++)
      {
       x=Math.floor(Math.random()*700);
       y=Math.floor(Math.random()*400);
       Image(bottle,x,y,50,50);
      }}}

document.getElementById("status").innerHTML= to_number + "bottles drawn"
function speak(){
    
}





















































