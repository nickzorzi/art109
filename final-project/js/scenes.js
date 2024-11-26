
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

let title;
let help;
let bg;

let player1, player2;
let floor;
let platform1, platform2;
let wall1, wall2, wall3;
let button1, button2;

////////////////////////////// 1 /////////////////

function intro()  {

   var playButton;

   this.enter = function() {
      title.visible = true;
      bg.visible = true;
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

   this.enter = function() {
      title.visible = false;
      bg.visible = false;
  }

   this.setup = function() {
      world.gravity.y = 10;

      player1 = new Sprite(30, 700);
      player1.w = 40;
      player1.h = 40;
      player1.color = 'black';

      player2 = new Sprite(90, 700);
      player2.w = 40;
      player2.h = 40;
      player2.color = 'white';

      button1 = new Sprite();
	   button1.y = 760;
      button1.x = 700;
	   button1.w = 75;
	   button1.h = 20;
	   button1.collider = 'static';
      button1.color = 'red';

      button2 = new Sprite();
	   button2.y = 570;
      button2.x = 700;
	   button2.w = 75;
	   button2.h = 20;
	   button2.collider = 'static';
      button2.color = 'blue';

      platform1 = new Sprite();
	   platform1.y = 580;
      platform1.x = 700;
	   platform1.w = 300;
	   platform1.h = 20;
	   platform1.collider = 'static';
      platform1.color = 'grey';

      platform2 = new Sprite();
	   platform2.y = 580;
      platform2.x = 400;
	   platform2.w = 100;
	   platform2.h = 20;
	   platform2.collider = 'k';
      platform2.color = 'grey';
      
      floor = new Sprite();
	   floor.y = 780;
	   floor.w = 910;
	   floor.h = 40;
	   floor.collider = 'static';
      floor.color = 'grey';

      wall1 = new Sprite();
      wall1.y = 450;
      wall1.x = -20;
	   wall1.w = 40;
	   wall1.h = 910;
	   wall1.collider = 'static';
      wall1.color = 'grey';

      wall2 = new Sprite();
      wall2.y = 450;
      wall2.x = -20;
	   wall2.w = 40;
	   wall2.h = 910;
	   wall2.collider = 'static';
      wall2.color = 'grey';
   }
   
   this.draw = function() {
      background('#6c5ce7');

      if (kb.pressing('d')) {
         player1.vel.x = 2;
      }
      if (kb.pressing('a')) {
         player1.vel.x = -2;
      }
      if (player1.colliding(floor) || player1.colliding(player2) || player1.colliding(platform1) || player1.colliding(platform2)) {
         if (kb.pressing('w')) {
            player1.vel.y = -6;
         }
      }

      if (kb.pressing('ArrowRight')) {
         player2.vel.x = 2;
      }
      if (kb.pressing('ArrowLeft')) {
         player2.vel.x = -2;
      }
      if (player2.colliding(floor) || player2.colliding(player1) || player2.colliding(platform1) || player2.colliding(platform2)) {
         if (kb.pressing('ArrowUp')) {
            player2.vel.y = -6;
         }
      }

      if (player1.colliding(button1) || player1.colliding(button2) || player2.colliding(button1) || player2.colliding(button2)) {
         platform2.vel.y = 1;
         if (platform2.position.y >= 680) {
            platform2.vel.y = 0;
         }
      } else {
         platform2.vel.y = -1;
         if (platform2.position.y <= 580) {
            platform2.vel.y = 0;
         }
      }
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
