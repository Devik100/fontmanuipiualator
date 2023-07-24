rx = 0
ry = 0
lx = 0
ly = 0
fly = new Audio('beezlebub.mp3');
antartic = new Audio('antartic.mp3');
daughter = new Audio('daughter.mp3')
function setup() {
    cantvase = createCanvas(600, 500);
    cantvase.position(550, 125);
    video=createCapture(VIDEO);
    video.size(600, 500);
    video.hide();
    poseetN = ml5.poseNet(video, modelLoaded)
    poseetN.on("pose", gotPoses)
}
function modelLoaded() {
    console.log("Yu Haf Bin Spoted")
}
function draw() {
    image(video, 0, 0, width, height);
    ellipse(lx, ly, 10, 10)
    ellipse(rx, ry, 10, 10)
    if (ry<200) {
        fly.playbackRate = 0.5;
    }
    else if (ry<400 && ry>200) {
        fly.playbackRate = 1;
    }
    else if (ry>400 && ry<600) {
        fly.playbackRate = 2;
    }
    if (ly<200) {
        fly.setVolume = 0.5;
    }
    else if (ly<400) {
        fly.setVolume = 1;
    }
    else if (ly<600) {
        fly.setVolume = 2;
    }
    if (ry<200) {
        antartic.playbackRate = 0.5;
    }
    else if (ry<400 && ry>200) {
        fly.playbackRate = 1;
    }
    else if (ry>400 && ry<600) {
        fly.playbackRate = 2;
    }
    if (ly<200) {
        fly.setVolume = 0.5;
    }
    else if (ly<400) {
        fly.setVolume = 1;
    }
    else if (ly<600) {
        fly.setVolume = 2;
    }
    if (ry<200) {
        daughter.playbackRate = 0.5;
    }
    else if (ry<400 && ry>200) {
        fly.playbackRate = 1;
    }
    else if (ry>400 && ry<600) {
        fly.playbackRate = 2;
    }
    if (ly<200) {
        fly.setVolume = 0.5;
    }
    else if (ly<400) {
        fly.setVolume = 1;
    }
    else if (ly<600) {
        fly.setVolume = 2;
    }
    
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        lx = results[0].pose.leftWrist.x;
        ly = results[0].pose.leftWrist.y;
        rx = results[0].pose.rightWrist.x;
        ry = results[0].pose.rightWrist.y;
        console.log("l = " + lx + " " + ly);
        console.log("r = " + rx + " " + ry);
        if (lx>300 && rx>300) {
            fly.play();
            antartic.pause();
            daughter.pause();
        }
        if (rx<300 && lx<300) {
            fly.pause();
            daughter.pause();
            antartic.play();
        }
        if (rx<300 && lx>300) {
            daughter.play();
            fly.pause();
            antartic.pause();
        }
        else {
            fly.pause();
            antartic.pause();
            daughter.pause();
        }
    }
}