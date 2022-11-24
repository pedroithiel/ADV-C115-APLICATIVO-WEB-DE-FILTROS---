function preload() {

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center()
    video = createCapture(VIDEO)
    video.size(400,400)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoad)
    poseNet.on('pose', pegarposes);
}
function pegarposes(resultado) {
    console.log(resultado)
    if(resultado.length > 0) {
    var noseX = resultado[0].pose.nose.x   
    var noseY = resultado[0].pose.nose.y
    console.log(noseX)
    console.log(noseY)
    }  

}
function modelLoad() {
    console.log("Hi, model load!")
}
function draw() {
    image(video,0, 0, 400, 400)
}
function Foto() {
    save("image.jpg")
}