

// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager



var image1_up, image2_over,snd1,snd2;
// var duration;
// var  slideWidth = 500;

function preload() {

//   snd1 = loadSound("assets/beat.mp3");
//   snd2 = loadSound("assets/wood.mp3");

    snd1 = loadSound("assets/gong.mp3");
    snd2 = loadSound("assets/1.wav");
    snd3 = loadSound("assets/2.wav");
    snd4 = loadSound("assets/3.wav");
    snd5 = loadSound("assets/4.wav");
    snd6 = loadSound("assets/5.wav");
    snd7 = loadSound("assets/6.wav");

    bg = loadImage("assets/bg.png");
}


// define your p5.play sprites as global objects first.
var ghosty;


// global manager object
var mgr;


let cnv;





function setup() {
let cnv  =  createCanvas(1280, 720);
  //  console.log(hell);
  angleMode(DEGREES);
  cnv.mousePressed(setupSound); // callback function
     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (intro);
    mgr.addScene (scene2);
    mgr.addScene (theend);
    mgr.addScene (losescene);
    mgr.addScene (winscene);
    mgr.showNextScene();

}

function setupSound() {
    // This is required now for most audio in browser apps.
    userStartAudio();
}


function draw()
{
    // pass the current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

 function mouseMoved()
 {
   // pass the mouseMoved message into the SceneManager
   mgr.handleEvent("mouseMoved");
}

function mouseDragged()
{
   // pass the mouseMoved message into the SceneManager
    mgr.handleEvent("mouseDragged");
}

function keyPressed() {
    // You can optionally handle the key press at the global level...
    switch (key) {
        case '1':
            mgr.showScene(intro, true); // true indicates autoHidePrevious
            break;
        case '2':
            mgr.showScene(scene2, true);
            break;
        case '3':
        case 'h':
        case 'H':
            mgr.showScene(theend, true);
            break;
        case '9':
            mgr.showScene(losescene, true);
            break;
        case '0':
            mgr.showScene(winscene, true);
            break;
    }
    
    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
