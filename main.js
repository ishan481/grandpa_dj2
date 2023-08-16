harrypotter="";
peterpan="";

function preload(){
    harrypotter=loudSound("music.mp3");
    peterpan=loudSound("music2.mp3");
}


function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#0000FF");
}