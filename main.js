objects=[];
status ="";
video="";

function preload(){
    video=createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas=createCanvas(480, 380);
    canvas.center();
}

function draw() {
    image(video, 0, 0, 480, 380);
    if(status !="")
    {
       objectDetector.detect(video, gotresult);
       for(i=0; i<objects.length ; i++) {
       document.getElemmentById("status").innerHTML = "status : Objects detected";
       document.getElemmentById("number_of_objects").innerHTML = "number of objects detected are : " + objects.length;

       fill("#FF0000")
       persent=floor(object[i].confidence * 100);
       text(object[i].lable + " " + persent + "%", )
       text(object[i].lable + " " + persent + "%", object[i].x + 15, object[i].y + 15);
       noFill();
       stroke("#FF0000")
       rect(object[i].x, object[i].y, object[i].width, object[i].hieght);
    }
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0.5);
}


function gotresult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects=results;
}
