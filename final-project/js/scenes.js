
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

let title;
let help;
let bg;

let player1, player2;
let floor;
let platform1, platform2, platform3, platform4, platform5, platform6, platform7, platform8, platform9, platform10, platform11, platform12, platform13, platform14, platform15, platform16;
let wall1, wall2, wall3, wall4, wall5, wall6, wall7;
let button1, button2, button3, button4, button5, button6, button7, button8;
let box;
let pin1;
let spikes1, spikes2, spikes3, spikes4, spikes5, spikes6, spikes7, spikes8, spikes9, spikes10, spikes11, spikes12, spikes13, spikes14, spikes15, spikes16;
let home;

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

      home = new Sprite();
      home.y = 590;
      home.x = 1260;
      home.w = 10;
      home.h = 220;
      home.collider = 'static';
      home.color = 'yellow';

      player1 = new Sprite(50, 700);
      player1.w = 40;
      player1.h = 40;
      player1.color = 'black';
      player1.rotationLock = true;
      player1.mass = 2;

      player2 = new Sprite(100, 700);
      player2.w = 40;
      player2.h = 40;
      player2.color = 'white';
      player2.rotationLock = true;
      player2.mass = 2;

      box = new Sprite(715, 180);
      box.w = 25;
      box.h = 25;
      box.color = 'grey';
      box.rotationLock = true;

      button1 = new Sprite();
	   button1.y = 700;
      button1.x = 600;
	   button1.w = 75;
	   button1.h = 10;
	   button1.collider = 'static';
      button1.color = 'red';

      button2 = new Sprite();
	   button2.y = 477;
      button2.x = 70;
	   button2.w = 75;
	   button2.h = 10;
	   button2.collider = 'static';
      button2.color = 'red';

      button3 = new Sprite();
	   button3.y = 334;
      button3.x = 730;
	   button3.w = 75;
	   button3.h = 10;
	   button3.collider = 'static';
      button3.color = 'red';

      button4 = new Sprite();
	   button4.y = 277;
      button4.x = 70;
	   button4.w = 75;
	   button4.h = 10;
	   button4.collider = 'static';
      button4.color = 'red';

      button5 = new Sprite();
	   button5.y = 277;
      button5.x = 1210;
	   button5.w = 75;
	   button5.h = 10;
	   button5.collider = 'static';
      button5.color = 'red';

      button6 = new Sprite();
	   button6.y = 254;
      button6.x = 803;
	   button6.w = 40;
	   button6.h = 10;
	   button6.collider = 'static';
      button6.color = 'red';

      button7 = new Sprite();
	   button7.y = 700;
      button7.x = 700;
	   button7.w = 75;
	   button7.h = 10;
	   button7.collider = 'k';
      button7.color = 'red';

      button8 = new Sprite();
	   button8.y = 577;
      button8.x = 1040;
	   button8.w = 75;
	   button8.h = 10;
	   button8.collider = 'static';
      button8.color = 'red';

      // spikes1 = new Sprite([[780, 480], [1280, 480], [1230, 460], [1180, 480], [1130, 460], [1080, 480], [1030, 460], [980, 480], [930, 460], [880, 480], [830, 460], [780, 480]]);
      // spikes1.collider = 'static';
      // spikes1.color = 'grey';

      spikes1 = new Sprite([[780, 480], [830, 480], [805, 460], [780, 480]]);
      spikes1.collider = 'static';
      spikes1.color = 'grey';
      spikes2 = new Sprite([[830, 480], [880, 480], [855, 460], [830, 480]]);
      spikes2.collider = 'static';
      spikes2.color = 'grey';
      spikes3 = new Sprite([[880, 480], [930, 480], [905, 460], [880, 480]]);
      spikes3.collider = 'static';
      spikes3.color = 'grey';
      spikes4 = new Sprite([[930, 480], [980, 480], [955, 460], [930, 480]]);
      spikes4.collider = 'static';
      spikes4.color = 'grey';
      spikes5 = new Sprite([[980, 480], [1030, 480], [1005, 460], [980, 480]]);
      spikes5.collider = 'static';
      spikes5.color = 'grey';
      spikes6 = new Sprite([[1030, 480], [1080, 480], [1055, 460], [1030, 480]]);
      spikes6.collider = 'static';
      spikes6.color = 'grey';
      spikes7 = new Sprite([[1080, 480], [1130, 480], [1105, 460], [1080, 480]]);
      spikes7.collider = 'static';
      spikes7.color = 'grey';
      spikes8 = new Sprite([[1130, 480], [1180, 480], [1155, 460], [1130, 480]]);
      spikes8.collider = 'static';
      spikes8.color = 'grey';
      spikes9 = new Sprite([[1180, 480], [1230, 480], [1205, 460], [1180, 480]]);
      spikes9.collider = 'static';
      spikes9.color = 'grey';
      spikes10 = new Sprite([[1230, 480], [1280, 480], [1255, 460], [1230, 480]]);
      spikes10.collider = 'static';
      spikes10.color = 'grey';
      spikes11 = new Sprite([[830, 700], [880, 700], [855, 680], [830, 700]]);
      spikes11.collider = 'static';
      spikes11.color = 'grey';
      spikes12 = new Sprite([[880, 700], [930, 700], [905, 680], [880, 700]]);
      spikes12.collider = 'static';
      spikes12.color = 'grey';
      spikes13 = new Sprite([[930, 700], [980, 700], [955, 680], [930, 700]]);
      spikes13.collider = 'static';
      spikes13.color = 'grey';
      spikes14 = new Sprite([[980, 700], [1030, 700], [1005, 680], [980, 700]]);
      spikes14.collider = 'static';
      spikes14.color = 'grey';
      spikes15 = new Sprite([[1030, 700], [1080, 700], [1055, 680], [1030, 700]]);
      spikes15.collider = 'static';
      spikes15.color = 'grey';
      spikes16 = new Sprite([[1080, 700], [1130, 700], [1105, 680], [1080, 700]]);
      spikes16.collider = 'static';
      spikes16.color = 'grey';

      platform1 = new Sprite();
	   platform1.y = 480;
      platform1.x = 140;
	   platform1.w = 300;
	   platform1.h = 5;
	   platform1.collider = 'static';
      platform1.color = 'grey';

      platform2 = new Sprite();
	   platform2.y = 480;
      platform2.x = 400;
	   platform2.w = 100;
	   platform2.h = 5;
	   platform2.collider = 'k';
      platform2.color = 'grey';

      platform3 = new Sprite();
	   platform3.y = 480;
      platform3.x = 580;
	   platform3.w = 140;
	   platform3.h = 5;
	   platform3.collider = 'static';
      platform3.color = 'grey';

      platform4 = new Sprite();
	   platform4.y = 337;
      platform4.x = 715;
	   platform4.w = 140;
	   platform4.h = 5;
	   platform4.collider = 'static';
      platform4.color = 'grey';

      platform5 = new Sprite();
	   platform5.y = 100;
      platform5.x = 480;
	   platform5.w = 100;
	   platform5.h = 5;
	   platform5.collider = 'k';
      platform5.color = 'grey';

      platform6 = new Sprite();
	   platform6.y = 280;
      platform6.x = 180;
	   platform6.w = 360;
	   platform6.h = 5;
	   platform6.collider = 'static';
      platform6.color = 'grey';

      platform7 = new Sprite();
	   platform7.y = 280;
      platform7.x = 1200;
	   platform7.w = 180;
	   platform7.h = 5;
	   platform7.collider = 'static';
      platform7.color = 'grey';

      platform8 = new Sprite();
	   platform8.y = 207;
      platform8.x = 715;
	   platform8.w = 140;
	   platform8.h = 5;
	   platform8.collider = 'static';
      platform8.color = 'grey';

      platform9 = new Sprite();
	   platform9.y = 257;
      platform9.x = 800;
	   platform9.w = 40;
	   platform9.h = 5;
	   platform9.collider = 'static';
      platform9.color = 'grey';

      platform10 = new Sprite();
	   platform10.y = 480;
      platform10.x = 1030;
	   platform10.w = 500;
	   platform10.h = 5;
	   platform10.collider = 'static';
      platform10.color = 'grey';

      platform11 = new Sprite();
	   platform11.y = 0;
      platform11.x = 310;
	   platform11.w = 100;
	   platform11.h = 5;
	   platform11.collider = 'k';
      platform11.color = 'grey';

      pin1 = new Sprite(1050, 415, 8);
      pin1.collider = 'static';
      pin1.color = 'grey';

      platform12 = new Sprite();
	   platform12.y = 405;
      platform12.x = 1050;
	   platform12.w = 120;
	   platform12.h = 5;
      platform12.color = 'grey';

      platform13 = new Sprite();
	   platform13.y = 420;
      platform13.x = 880;
	   platform13.w = 120;
	   platform13.h = 5;
      platform13.collider = 'k';
      platform13.color = 'grey';

      platform14 = new Sprite();
	   platform14.y = 580;
      platform14.x = 1030;
	   platform14.w = 150;
	   platform14.h = 5;
	   platform14.collider = 'static';
      platform14.color = 'grey';

      platform15 = new Sprite();
	   platform15.y = 600;
      platform15.x = 700;
	   platform15.w = 100;
	   platform15.h = 5;
	   platform15.collider = 'static';
      platform15.color = 'grey';

      platform16 = new Sprite();
	   platform16.y = 710;
      platform16.x = 980;
	   platform16.w = 280;
	   platform16.h = 5;
	   platform16.collider = 'k';
      platform16.color = 'grey';
      
      floor = new Sprite();
	   floor.y = 710;
	   floor.w = 1280;
	   floor.h = 20;
	   floor.collider = 'static';
      floor.color = 'grey';

      wall1 = new Sprite();
      wall1.y = 450;
      wall1.x = 0;
	   wall1.w = 40;
	   wall1.h = 910;
	   wall1.collider = 'static';
      wall1.color = 'grey';

      wall2 = new Sprite();
      wall2.y = 450;
      wall2.x = 1280;
	   wall2.w = 40;
	   wall2.h = 910;
	   wall2.collider = 'static';
      wall2.color = 'grey';

      wall3 = new Sprite();
      wall3.y = 525;
      wall3.x = 650;
	   wall3.w = 10;
	   wall3.h = 375;
	   wall3.collider = 'static';
      wall3.color = 'grey';

      wall4 = new Sprite();
      wall4.y = 10;
	   wall4.w = 1280;
	   wall4.h = 20;
	   wall4.collider = 'static';
      wall4.color = 'grey';

      wall5 = new Sprite();
      wall5.y = 270;
      wall5.x = 780;
	   wall5.w = 10;
	   wall5.h = 130;
	   wall5.collider = 'static';
      wall5.color = 'grey';

      wall6 = new Sprite();
      wall6.y = 220;
      wall6.x = 820;
	   wall6.w = 10;
	   wall6.h = 80;
	   wall6.collider = 'static';
      wall6.color = 'grey';

      wall7 = new Sprite();
      wall7.y = 533;
      wall7.x = 1100;
	   wall7.w = 10;
	   wall7.h = 100;
	   wall7.collider = 'k';
      wall7.color = 'grey';
   }
   
   this.draw = function() {
      background('#6c5ce7');

      if (kb.pressing('d')) {
         player1.vel.x = 2;
      }
      if (kb.pressing('a')) {
         player1.vel.x = -2;
      }
      if (player1.colliding(floor) || player1.colliding(player2) || player1.colliding(platform1) || player1.colliding(platform3) || player1.colliding(platform4) || player1.colliding(platform6) || player1.colliding(platform7) || player1.colliding(platform8) || player1.colliding(platform9) || player1.colliding(platform10) || player1.colliding(platform12) || player1.colliding(platform14) || player1.colliding(platform15) || player1.colliding(platform16)) {
         if (kb.pressing('w') && player1.velocity.y === 0) {
            player1.vel.y = -6;
         }
      }
      if (player1.colliding(platform2) || player1.colliding(platform5) || player1.colliding(platform11) || player1.colliding(platform13)) {
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
      if (player2.colliding(floor) || player2.colliding(player1) || player2.colliding(platform1) || player2.colliding(platform3) || player2.colliding(platform4) || player2.colliding(platform6) || player2.colliding(platform7) || player2.colliding(platform8) || player2.colliding(platform9) || player2.colliding(platform10) || player2.colliding(platform12) || player2.colliding(platform14) || player2.colliding(platform15) || player2.colliding(platform16)) {
         if (kb.pressing('ArrowUp') && player2.velocity.y === 0) {
            player2.vel.y = -6;
         }
      }
      if (player2.colliding(platform2) || player2.colliding(platform5) || player2.colliding(platform11) || player1.colliding(platform13)) {
         if (kb.pressing('ArrowUp')) {
            player2.vel.y = -6;
         }
      }

      if (player1.colliding(wall1) || player1.colliding(wall2) || player1.colliding(wall3) || player1.colliding(wall4) || player1.colliding(wall5)) {
         player1.vel.y = 0;
      }

      if (player2.colliding(wall1) || player2.colliding(wall2) || player2.colliding(wall3) || player2.colliding(wall4) || player2.colliding(wall5)) {
         player2.vel.y = 0;
      }

      if (player1.colliding(button2) || player2.colliding(button1)) {
         platform2.vel.y = 2;
         if (platform2.position.y >= 610) {
            platform2.vel.y = 0;
         }
      } else {
         platform2.vel.y = -2;
         if (platform2.position.y <= 480) {
            platform2.vel.y = 0;
         }
      }

      if (player1.colliding(button3)) {
         platform5.vel.y = 2;
         if (platform5.position.y >= 370) {
             platform5.vel.y = 0;
         }
      } else {
         platform5.vel.y = -2;
         if (platform5.position.y <= 100) {
             platform5.vel.y = 0;
         }
      }

      if (player1.colliding(button4) || player2.colliding(button5)) {
         platform5.vel.x = 2;
         if (platform5.position.x >= 1180) {
            platform5.vel.x = 0;
         }
      } else {
         platform5.vel.x = -2;
         if (platform5.position.x <= 480) {
            platform5.vel.x = 0;
         }
      }

      if (box.colliding(button6)) {
         platform11.vel.y = 2;
         if (platform11.position.y >= 180) {
            platform11.vel.y = 0;
         }
      } else {
         platform11.vel.y = -2;
         if (platform11.position.y <= 0) {
            platform11.vel.y = 0;
         }
      }

      if (player2.colliding(button8)) {
         platform16.vel.y = -2;
         if (platform16.position.y <= 670) {
             platform16.vel.y = 0;
         }
      } else {
         platform16.vel.y = 2;
         if (platform16.position.y >= 710) {
             platform16.vel.y = 0;
         }
      }

      if (player1.colliding(button7)) {
         wall7.vel.x = 0.25;
         if (wall7.position.x >= 1250) {
             wall7.vel.x = 0;
         }
      } else {
         wall7.vel.x = -0.25;
         if (wall7.position.x <= 1100) {
             wall7.vel.x = 0;
         }
      }

      spikes3.overlaps(platform13);
      spikes4.overlaps(platform13);
      spikes5.overlaps(platform13);
      spikes6.overlaps(platform13);
      // platform10.overlaps(platform13);

      if (player1.colliding(home) & player2.colliding(home)) {
         this.sceneManager.showNextScene();
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
