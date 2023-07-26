function preload(){
    imageene=loadImage("descarga (2).jpg")
}
var posessssx
var posessssy
function draw(){
    image(webcam,0,0,500,500)
    fill("red")
    stroke("blue")
    //circle(posessssx,posessssy,30)
    image(imageene,posessssx,posessssy,200,200)
}
function setup(){
    canvas=createCanvas(500,500)
    canvas.center();
    canvas.position(300,170)
    webcam=createCapture(VIDEO)
    webcam.hide();
    pose=ml5.poseNet(webcam,cargado)
    pose.on("pose",poseseses)
}
function cargado(){
    console.log("cargado")
}
function poseseses(p) {
    console.log(p)
    posessssx=p[0].pose.rightEye.x-130
    posessssy=p[0].pose.rightEye.y-70
}
function salvar(){
    save("Virus.jpg")
    
}
