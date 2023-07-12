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
        
    }
}