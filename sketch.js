const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg)
    // add condition to check if any background image is there to add
background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
var C= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var S= await C.json()
var datetime=S.datetime
var r=datetime.slice(11,13)
if(r>=5 && r<=7){
    bg="sunrise1.png"
}
else if (r>=7 && r<=8){
    bg="sunrise2.png"
}
else if (r>=8 && r<=10){
    bg="sunrise3.png"
}
else if (r>=10 && r<=11){
    bg="sunrise4.png"
}
else if (r>=11 && r<=13){
    bg="sunrise5.png"
}
else if (r>=13 && r<=18){
    bg="sunrise6.png"
}
else if (r>=18 && r<=19){
    bg="sunrise7.png"
}
else if (r>=19 && r<=20){
    bg="sunrise8.png"
}
else if (r>=20 && r<=21){
    bg="sunrise10.png"
}
else {
    bg="sunrise12.png"
}
backgroundImg=loadImage(bg)
}
