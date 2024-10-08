let canvas;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight, WEBGL)
    canvas.position(0, 0)
    canvas.style("z-index", -2)
    // createCanvas(windowWidth, windowHeight, WEBGL)
    angleMode(DEGREES)
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}

function draw(){
    background(60);
    rotateX(60)

    noFill()
    stroke(255)

    for (var i = 0; i < 50; i++) {
        var r = map(sin(frameCount / 2), -1, 1, 100, 200)
        var g = map(i, 0, 50, 100, 200)
        var b = map(cos(frameCount), -1, 1, 100, 200)

        stroke(r, g, b)

        rotate(frameCount / 50)

        beginShape()

        for (var j = 0; j < 360; j += 60) {
            var rad = i * 3;
            var x = rad * cos(j)
            var y = rad * sin(j)
            var z = sin(frameCount * 2 + i * 5) * 50

            vertex(x, y, z)
        }
        endShape(CLOSE)
    }
}   

// function mouseMoved(){
//     drawThing(mouseX, mouseY);
// }

// function drawThing(_x, _y){
//     strokeWeight(0);
//     fill(random(200, 255), random(200, 255), random(200, 255));
//     ellipse(_x, _y, 30, 30);
// }