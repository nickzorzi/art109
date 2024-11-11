
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

let title;
let help;
let bg;
let ball;
let flipper;
let exit;
let wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14;
let circle1, circle2, circle3, circle4;
let spring;

////////////////////////////// 1 /////////////////

function intro()  {

   var playButton;

   this.enter = function() {
      title.visible = true;
      bg.visible = true;
      if (wall1) {
         ball.visible = false;
         flipper.visible = false;
         exit.visible = false;
         wall1.visible = false;
         wall2.visible = false;
         wall3.visible = false;
         wall4.visible = false;
         wall5.visible = false;
         wall6.visible = false;
         wall7.visible = false;
         wall8.visible = false;
         wall9.visible = false;
         wall10.visible = false;
         wall11.visible = false;
         wall12.visible = false;
         wall13.visible = false;
         wall14.visible = false;
         circle1.visible = false;
         circle2.visible = false;
         circle3.visible = false;
         circle4.visible = false;
         spring.visible = false;
      }
  }

    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      bg = loadImage("assets/bg.png");
      textAlign(CENTER);
      textSize(29);

      title = loadImage("assets/title.png");

      playButton = new Button({
         x: 400,	y: 600,
         width: 150,		height: 50,
         align_x: 0,		align_y: 0,
         content: 'PLAY',
         style_default: {
            color: '#fff',
            background: '#a29bfe',
            text_size: 36,
            text_font: 'sans-serif',
            border_width: 0,
            border_color: '',
            border_radius: 5
         },
         style_pressed: {
            color: '#fff',
            background: '#6c5ce7',
            text_size: 36,
            text_font: 'sans-serif',
            border_width: 0,
            border_color: '',
            border_radius: 5
         },
         on_press() {
            mgr.showScene(scene2, true);
         }
      });
    }


    this.draw = function()
    {

      image(bg, 0, 0);
      
      image(title, 0, 0);
      
      fill(255);
      ellipse(500,250,75,75);
      
      playButton.draw();
    }


     // this could be keyboard events for a specific scene
    // this.keyPressed = function() {
    //
    //
    // }

    this.mousePressed = function()
    {
        if (snd1.isPlaying()) {

            snd1.pause(); // .play() will resume from .pause() position

        } else {
            snd1.play();

        }



        this.sceneManager.showNextScene();
    }
}


///////////////////////  2  ////////////////////////

function scene2()  {

   var leftButton;
   var rightButton;
   var launchButton;

   let score = 0;

   this.enter = function() {
      title.visible = false;
      bg.visible = false;
      ball.visible = true;
      flipper.visible = true;
      exit.visible = true;
      wall1.visible = true;
      wall2.visible = true;
      wall3.visible = true;
      wall4.visible = true;
      wall5.visible = true;
      wall6.visible = true;
      wall7.visible = true;
      wall8.visible = true;
      wall9.visible = true;
      wall10.visible = true;
      wall11.visible = true;
      wall12.visible = true;
      wall13.visible = true;
      wall14.visible = true;
      circle1.visible = true;
      circle2.visible = true;
      circle3.visible = true;
      circle4.visible = true;
      spring.visible = true;
  }

   this.setup = function() {
      world.gravity.y = 10;
      noStroke();

      textAlign(CENTER);
   
      ball = new Sprite(725, 700, 20);
      ball.color = 'white';
      ball.bounciness = 0.3;
   
      flipper = new Sprite(340, 730, 220, 40, 'k');
      flipper.color = ('#a29bfe');

      exit = new Sprite(0, 845, 1600, 30, 'static');
      exit.color = ('#a29bfe');

      spring = new Sprite(725, 775, 60, 60, 'static');
      spring.color = ('#a29bfe');

      circle1 = new Sprite(230, 230, 85, 'static');
      circle1.color = ('#a29bfe');

      circle2 = new Sprite(450, 230, 85, 'static');
      circle2.color = ('#a29bfe');

      circle3 = new Sprite(340, 130, 35, 'static');
      circle3.color = ('#a29bfe');

      circle4 = new Sprite(340, 330, 35, 'static');
      circle4.color = ('#a29bfe');

      wall1 = new Sprite([[0, 0], [0, 200], [200, 0], [0, 0]], 'static');
      wall1.color = ('#a29bfe');

      wall2 = new Sprite([[800, 0], [800, 150], [685, 0], [800, 0]], 'static');
      wall2.color = ('#a29bfe');
      
      wall3 = new Sprite([[0, 0], [0, 800], [25, 800], [25, 0], [0, 0]], 'static');
      wall3.color = ('#a29bfe');

      wall4 = new Sprite([[675, 100], [675, 800], [650, 800], [650, 100], [675, 100]], 'static');
      wall4.color = ('#a29bfe');

      wall5 = new Sprite([[700, 100], [700, 800], [675, 800], [675, 100], [700, 100]], 'static');
      wall5.color = ('#a29bfe');

      wall6 = new Sprite([[775, 0], [775, 800], [750, 800], [750, 0], [775, 0]], 'static');
      wall6.color = ('#a29bfe');

      wall7 = new Sprite([[0, 0], [0, 25], [800, 25], [800, 0], [0, 0]], 'static');
      wall7.color = ('#a29bfe');

      wall8 = new Sprite([[800, 0], [800, 800], [775, 800], [775, 0], [800, 0]], 'static');
      wall8.color = ('#a29bfe');

      wall9 = new Sprite([[0, 600], [0, 750], [195, 720], [195, 680], [0, 600]], 'static');
      wall9.color = ('#a29bfe');

      wall10 = new Sprite([[675, 600], [675, 750], [485, 720], [485, 680], [675, 600]], 'static');
      wall10.color = ('#a29bfe');

      wall11 = new Sprite([[75, 510], [75, 540], [225, 600], [225, 570], [75, 510]], 'static');
      wall11.color = ('#a29bfe');
      wall11.bounciness = 0.5;

      wall12 = new Sprite([[600, 510], [600, 540], [460, 600], [460, 570], [600, 510]], 'static');
      wall12.color = ('#a29bfe');
      wall12.bounciness = 0.5;

      wall13 = new Sprite([[560, 340], [675, 460], [675, 220], [560, 340]], 'static');
      wall13.color = ('#a29bfe');
      wall13.bounciness = 1;

      wall14 = new Sprite([[115, 340], [0, 460], [0, 220], [115, 340]], 'static');
      wall14.color = ('#a29bfe');
      wall14.bounciness = 1;

      leftButton = new Button({
         x: 75,	y: 775,
         width: 50,		height: 50,
         align_x: 0,		align_y: 0,
         content: '<<',
         style_default: {
            color: '#fff',
            background: '#a29bfe',
            text_size: 24,
            text_font: 'sans-serif',
            border_width: 0,
            border_color: '',
            border_radius: 5
         },
         style_pressed: {
            color: '#fff',
            background: '#6c5ce7',
            text_size: 24,
            text_font: 'sans-serif',
            border_width: 0,
            border_color: '',
            border_radius: 5
         },
         on_press() {
            flipper.rotateTo(20, 8);
         },
         on_release() {
            flipper.rotateTo(0, 8);
         }
      });

      rightButton = new Button({
         x: 135,	y: 775,
         width: 50,		height: 50,
         align_x: 0,		align_y: 0,
         content: '>>',
         style_default: {
            color: '#fff',
            background: '#a29bfe',
            text_size: 24,
            text_font: 'sans-serif',
            border_width: 0,
            border_color: '',
            border_radius: 5
         },
         style_pressed: {
            color: '#fff',
            background: '#6c5ce7',
            text_size: 24,
            text_font: 'sans-serif',
            border_width: 0,
            border_color: '',
            border_radius: 5
         },
         on_press() {
            flipper.rotateTo(-20, 8);
         },
         on_release() {
            flipper.rotateTo(0, 8);
         }
      });

      launchButton = new Button({
         x: 600,	y: 775,
         width: 50,		height: 50,
         align_x: 0,		align_y: 0,
         content: 'GO',
         style_default: {
            color: '#fff',
            background: '#a29bfe',
            text_size: 24,
            text_font: 'sans-serif',
            border_width: 0,
            border_color: '',
            border_radius: 5
         },
         style_pressed: {
            color: '#fff',
            background: '#6c5ce7',
            text_size: 24,
            text_font: 'sans-serif',
            border_width: 0,
            border_color: '',
            border_radius: 5
         },
         on_press() {
            ball = new Sprite(725, 700, 20);
            ball.bounciness = 0.3;
            ball.color = 'white';
            score = 0;
         }
      });
   }
   
   this.draw = function() {
      background('#6c5ce7');
   
      if (kb.presses('a')) {
         flipper.rotateTo(20, 8);
      } else if (kb.presses('d')) {
         flipper.rotateTo(-20, 8);
      }
      if (kb.pressed('a')) {
         flipper.rotateTo(0, 8);
      } else if (kb.pressed('d')) {
         flipper.rotateTo(0, 8);
      }
      if (ball.collides(spring)) {
         ball.vel.y = random(-20,-27);
      }
      if (ball.collides(exit)) {
         ball.remove();
      }
      if (kb.pressed('spacebar')) {
         ball.remove();
         ball = new Sprite(725, 700, 20);
         ball.bounciness = 0.3;
         ball.color = 'white';
         score = 0;
      }

      if (ball.collides(spring)) {
         snd2.play();
      }
      if (ball.collides(wall1)  || ball.collides(wall2) || ball.collides(wall3) || ball.collides(wall4) || ball.collides(wall5) || ball.collides(wall6) || ball.collides(wall7) || ball.collides(wall8) || ball.collides(wall9) || ball.collides(wall10) || ball.collides(wall11) || ball.collides(wall12) || ball.collides(wall13) || ball.collides(wall14)) {
         snd3.play();
         score++;
      }
      if (ball.collides(circle1) || ball.collides(circle2)) {
         snd4.play();
         score = score + 5;
      }
      if (ball.collides(circle3) || ball.collides(circle4)) {
         snd4.play();
         score = score + 10;
      }
      if (ball.collides(flipper)) {
         snd5.play();
      }
      if (ball.collides(exit)) {
         snd6.play();
      }

      leftButton.draw();
      rightButton.draw();
      launchButton.draw();

      fill('#fff');
      text('Score: ' + score, 340, 780);
   }

  }
  
/////////////////////////////         END           //////////////////////////////////



function theend() {

  this.setup = function()  {
      console.log("we are setting up on the result scene");
      bg = loadImage("assets/bg.png");
      help = loadImage("assets/help.png");
  }

  this.enter = function() {
     console.log("we are entering the result scene");

  if (snd7.isPlaying()) {

      snd7.pause(); // .play() will resume from .pause() position

  } else {
      snd7.play();

  }

   help.visible = true;
   title.visible = false;
   bg.visible = false;
   ball.visible = false;
   flipper.visible = false;
   exit.visible = false;
   wall1.visible = false;
   wall2.visible = false;
   wall3.visible = false;
   wall4.visible = false;
   wall5.visible = false;
   wall6.visible = false;
   wall7.visible = false;
   wall8.visible = false;
   wall9.visible = false;
   wall10.visible = false;
   wall11.visible = false;
   wall12.visible = false;
   wall13.visible = false;
   wall14.visible = false;
   circle1.visible = false;
   circle2.visible = false;
   circle3.visible = false;
   circle4.visible = false;
   spring.visible = false;

  }

 this.draw = function() {

   image(bg, 0, 0);

   image(help, 0, 0);

   textSize(26);
   fill(255);
   stroke(0);
   text("Click '<<' & '>>' buttons or 'A' & 'D' keys to activate flipper",width/2,height/2+150);
   text("Click 'GO' button or 'Spacebar' key to launch the ball",width/2,height/2+200);
   text("Click numbers '1,2,3' to Navigate the Pages",width/2,height/2+250);
   text("Point System: Walls = 1 point, Big Circle = 5 points,",width/2,height/2+300);
   text("& Small Circle = 10 points",width/2,height/2+350);

 }


}
