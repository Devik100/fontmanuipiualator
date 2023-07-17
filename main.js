x = 0
y = 0
rx = 0
ry = 0
lx = 0
ly = 0
px = 0
py = 0
function setup() {
    canvas = createCanvas(600, 600);
    canvas.position(550, 10);
    video=createCapture(VIDEO);
    poseetN = ml5.poseNet(video, modelLoaded)
    poseetN.on("pose", gotPoses)
}
function modelLoaded() {
    console.log("Yu Haf Bin Spoted")
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        lx = results[0].pose.leftWrist.x
        ly = results[0].pose.leftWrist.y
        rx = results[0].pose.rightWrist.x
        ry = results[0].pose.rightWrist.y
        console.log("l = " + lx + " " + ly)
        console.log("r = " + rx + " " + ry)
        fill(0, 0, 0)
        stroke(0, 0, 0)
        px = x
        py = y
        x = floor(rx/50 + lx*50)/50;
        y = floor(ry/50 + ly*50)/50;
        console.log(px + " " + py)
        console.log(x + " " + y)
        console.log(floor(abs(rx - lx)/2))
    }
}
function draw() {
    textSize(floor(abs(rx-lx)/2))
    background(color('#99CCFF'))
    fill(color('#0000FF'))
    if (px+5 < x) {
        x=px+5
    }
    if (px-5 < x) {
        x=px-5
    }
    if (py+5 < y) {
        x=py+5
    }
    if (py-5 < y) {
        x=py-5
    }
    if (x<0) {
        x=0
    }
    if (y<0) {
        y=0
    }
    if (x>600) {
        x=600
    }
    if (y>600) {
        y=600
    }
    text("filler text", x+(rx/2)-550, y)
}