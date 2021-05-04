const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


}

function draw(){
if(backgroundImg){
    background(backgroundImg)}
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
var response= await fetch("http://worldclockapi.com/api/json/est/now") 
    //change the data in JSON format
var responsejson=await response.json();

    // write code slice the datetime
var dt = responsejson.currentDateTime

var hour=dt .slice(11,13)
console.log(hour)

    // add conditions to change the background images from sunrise to sunset

if(hour>04  && hour <=06){
    bg="sunrise1.png"
}else if (hour>06  && hour <=08){
    bg="sunrise2.png"
}else if (hour>=23  && hour ==0){
    bg="sunrise10.png"
}else if (hour==0  && hour<=03){
    bg="sunrise11.png"
}else  {
    bg="sunset12.png"
}
    //load the image in backgroundImg variable here
backgroundImg=loadImage(bg)
}
