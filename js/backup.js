var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });



function preload() {

var player;
    //  37x45 is the size of each frame

    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
    game.load.image('ground', 'assets/grounds.png')
    game.load.spritesheet('mummy', 'assets/final.png', 220, 270);
    game.load.image('backgrounder', 'assets/green.jpg')

}
var counter = 0;
var trickName;
var points = 0;

function create() {
 text = game.add.text(game.world.centerX, game.world.centerY, 'Counter: 0', { font: "64px Arial", fill: "#ffffff", align: "center" });
    text.anchor.setTo(0.5, 0.5);

    trickText = game.add.text(game.world.centerX, game.world.centerY, trickName,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    pointtext = game.add.text(30, 15, points,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    // pointtext.anchor.setTo(3.4, 8);
    pointtext.fixedToCamera = true;
    trickText.anchor.setTo(0.5, -6);
    trickText.fixedToCamera=true;




  game.world.setBounds(0, 0, 1920, 1920);

    game.stage.backgroundColor = '#124184';
  game.physics.startSystem(Phaser.Physics.ARCADE);
       game.physics.arcade.gravity.y = 350;



  player = game.add.sprite(100, 350, 'mummy', 2);
 player.anchor.setTo(0.5, 0.5)
           player.animations.add('stand', [19]);
           player.animations.add('crouch', [28])
           player.animations.add('ollie', [ 26, 25, 5, 2, 4, 3, 18, 17]);
           player.animations.add('kick', [ 26, 11, 23, 15, 14, 0, 21, 18, 16, 22, 17]);






 //  oler = game.add.sprite(100, 350, 'ollers');
 // oler.anchor.setTo(0.5, 0.5)
 //            oler.animations.add('ollers');





  ground = game.add.sprite(0, 520, 'ground', 3);


  grounder = game.add.sprite(200, 420, 'ground', 3);

 game.world.bringToTop(trickText)
 game.world.bringToTop(points)






 //     game.physics.enable(player, Phaser.Physics.ARCADE);
 //     game.physics.enable(ground, Phaser.Physics.ARCADE);














game.physics.arcade.enable([player, ground, grounder]);
    ground.body.allowGravity = false;
    ground.body.immovable = true;


 grounder.body.allowGravity = false;
    grounder.body.immovable = true;





 cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


    game.camera.follow(player);
grounder.body.checkCollision.down = false;

}


function update(){
    game.physics.arcade.collide(ground, player,);
    game.physics.arcade.collide(grounder, player,);




    game.input.keyboard.onUpCallback = function( e ){
     if(e.keyCode == Phaser.Keyboard.SPACEBAR){
 var countertoVeloc = -counter * 7
if (countertoVeloc < -400){
  countertoVeloc = -400
}
if(player.body.velocity.y == 0){
player.body.velocity.y = countertoVeloc;

counter = 0;
    text.setText('Counter: ' + counter);
     player.animations.play('ollie', 10, false)
     var ollieHeight = Math.round((countertoVeloc*-1)/10)
     trickText.setText('ollie \uFF0B' + ollieHeight)
     points+= ollieHeight
     pointtext.setText('points: ' + points)


   }
}
if(cursors.right.isDown){
  player.animations.play('kick', 10, false)
  trickText.setText('kickflip \uFF0B 100')
  points+=100
  pointtext.setText('points: ' + points)
}
if(cursors.left.isDown){
  player.animations.play('kick', 10, false)
       trickText.setText('kickflip \uFF0B 100')
       points+= 100
       pointtext.setText('points: ' + points)

}
}


if (fireButton.isDown){
   player.animations.play('crouch', 10, false)
   counter++
    text.setText('Counter: ' + counter);
    pointtext.setText('points: ' + points)

}


if (cursors.left.isDown)
         {
            if (player.scale.x < 0){
            player.scale.x *=-1;
           }
                if(player.body.velocity.y == 0){
                    player.x -= 8;
                    }
                    else{
                        player.x -= 2;
                    }
                  }


if (cursors.right.isDown)
         {
            if (player.scale.x > 0){
            player.scale.x *=-1;
           }
                if(player.body.velocity.y == 0){
                    player.x += 8;
                    }
                    else{
                        player.x += 2;
                    }
                  }


  if (cursors.right.isDown && fireButton.isDown){

    player.animations.play('kick', 10, false)
  }





//             player.animations.play('stand', 30, true);
//                                     player.animations.currentAnim.speed = 12;

//         }
//         else if (cursors.right.isDown)

//         {

//            if (player.scale.x > 0){
//             player.scale.x *=-1;
//            }

//                 if(player.body.velocity.y == 0){
//             player.x += 4;
//         }else{
//                         player.x += 2;
//                     }

//             player.animations.play('stand', 30, true);
//                                     player.animations.currentAnim.speed = 12;

//         }
//         else if (fireButton.isDown){
//             // player.y += -4;

//             if (player.body.velocity.y == 0){

//               player.animations.play('crouch', 10, false)

//             }
//           }

//              else if (fireButton.isUp && player.animations.name == 'crouch'){

//              player.body.velocity.y = -350;
//                            player.animations.play('ollie', 10, true)






//             // player.animations.play('walk', 30, true);




//             // player.animations.stop('walk', player.frame, true);
//             //try ollie out was above


//          } else {
//                 // player.x = player.x
//                             player.animations.stop('stand', player.frame, true);

//         }



}


//secondave



var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });



function preload() {

var player;
    //  37x45 is the size of each frame

    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
    game.load.image('ground', 'assets/grounds.png')
    game.load.spritesheet('mummy', 'assets/final.png', 220, 270);
    game.load.image('backgrounder', 'assets/green.jpg')

}
var counter = 0;
var trickName;
var points = 0;

function create() {
 text = game.add.text(game.world.centerX, game.world.centerY, 'Counter: 0', { font: "64px Arial", fill: "#ffffff", align: "center" });
    text.anchor.setTo(0.5, 0.5);

    trickText = game.add.text(game.world.centerX, game.world.centerY, trickName,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    pointtext = game.add.text(30, 15, points,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    // pointtext.anchor.setTo(3.4, 8);
    pointtext.fixedToCamera = true;
    trickText.anchor.setTo(0.5, -6);
    trickText.fixedToCamera=true;




  game.world.setBounds(0, 0, 1920, 1920);

    game.stage.backgroundColor = '#124184';
  game.physics.startSystem(Phaser.Physics.ARCADE);
       game.physics.arcade.gravity.y = 350;



  player = game.add.sprite(100, 350, 'mummy', 2);
 player.anchor.setTo(0.5, 0.5)
           player.animations.add('stand', [19]);
           player.animations.add('crouch', [28])
           player.animations.add('ollie', [ 26, 25, 5, 2, 4, 3, 18, 17]);
           player.animations.add('kick', [ 26, 11, 23, 15, 14, 0, 21, 18, 16, 22, 17]);






 //  oler = game.add.sprite(100, 350, 'ollers');
 // oler.anchor.setTo(0.5, 0.5)
 //            oler.animations.add('ollers');





  ground = game.add.sprite(0, 520, 'ground', 3);


  grounder = game.add.sprite(200, 420, 'ground', 3);

 game.world.bringToTop(trickText)
 game.world.bringToTop(points)






 //     game.physics.enable(player, Phaser.Physics.ARCADE);
 //     game.physics.enable(ground, Phaser.Physics.ARCADE);














game.physics.arcade.enable([player, ground, grounder]);
    ground.body.allowGravity = false;
    ground.body.immovable = true;


 grounder.body.allowGravity = false;
    grounder.body.immovable = true;





 cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


    game.camera.follow(player);
grounder.body.checkCollision.down = false;

}


function update(){
    game.physics.arcade.collide(ground, player,);
    game.physics.arcade.collide(grounder, player,);




    game.input.keyboard.onUpCallback = function( e ){
     if(e.keyCode == Phaser.Keyboard.SPACEBAR){
 var countertoVeloc = -counter * 7

if(player.body.velocity.y == 0){
    if(countertoVeloc < -400){
      countertoVeloc =-400}
player.body.velocity.y = countertoVeloc

counter = 0;
    text.setText('Counter: ' + counter);
     player.animations.play('ollie', 10, false)
     var ollieHeight = Math.round((countertoVeloc*-1)/10)
     trickText.setText('ollie \uFF0B' + ollieHeight)
     points+= ollieHeight
     pointtext.setText('points: ' + points)


   }

if(cursors.right.isDown){
  player.animations.play('kick', 10, false)
  trickText.setText('kickflip \uFF0B 100')
  points+=100
  pointtext.setText('points: ' + points)
  setTimeout(() => {trickText.setText(' ')},1200)
}
if(cursors.left.isDown){
  player.animations.play('kick', 10, false)
       trickText.setText('kickflip \uFF0B 100')
       points+= 100
       pointtext.setText('points: ' + points)
       setTimeout(() => {trickText.setText(' ')},1200)

}
}
}


if (fireButton.isDown){
   player.animations.play('crouch', 10, false)
   counter++
    text.setText('Counter: ' + counter);
    pointtext.setText('points: ' + points)

}


if (cursors.left.isDown)
         {
            if (player.scale.x < 0){
            player.scale.x *=-1;
           }
                if(player.body.velocity.y == 0){
                    player.x -= 8;
                    }
                    else{
                        player.x -= 2;
                    }
                  }


if (cursors.right.isDown)
         {
            if (player.scale.x > 0){
            player.scale.x *=-1;
           }
                if(player.body.velocity.y == 0){
                    player.x += 8;
                    }
                    else{
                        player.x += 2;
                    }
                  }


  if (cursors.right.isDown && fireButton.isDown){

    player.animations.play('kick', 10, false)
  }





//             player.animations.play('stand', 30, true);
//                                     player.animations.currentAnim.speed = 12;

//         }
//         else if (cursors.right.isDown)

//         {

//            if (player.scale.x > 0){
//             player.scale.x *=-1;
//            }

//                 if(player.body.velocity.y == 0){
//             player.x += 4;
//         }else{
//                         player.x += 2;
//                     }

//             player.animations.play('stand', 30, true);
//                                     player.animations.currentAnim.speed = 12;

//         }
//         else if (fireButton.isDown){
//             // player.y += -4;

//             if (player.body.velocity.y == 0){

//               player.animations.play('crouch', 10, false)

//             }
//           }

//              else if (fireButton.isUp && player.animations.name == 'crouch'){

//              player.body.velocity.y = -350;
//                            player.animations.play('ollie', 10, true)






//             // player.animations.play('walk', 30, true);




//             // player.animations.stop('walk', player.frame, true);
//             //try ollie out was above


//          } else {
//                 // player.x = player.x
//                             player.animations.stop('stand', player.frame, true);

//         }



}


//THIRD



var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });



function preload() {

var player;
    //  37x45 is the size of each frame

    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
    game.load.image('ground', 'assets/grounds.png')
    game.load.spritesheet('mummy', 'assets/final.png', 220, 270);
    game.load.image('backgrounder', 'assets/green.jpg')

}
var counter = 0;
var trickName;
var points = 0;

function create() {
    var bb = game.add.tileSprite(0, 0, 1000, 600, 'backgrounder');
    bb.fixedToCamera = true;
 text = game.add.text(game.world.centerX, game.world.centerY, 'Counter: 0', { font: "64px Arial", fill: "#ffffff", align: "center" });
    text.anchor.setTo(0.5, 0.5);

    trickText = game.add.text(game.world.centerX, game.world.centerY, trickName,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    pointtext = game.add.text(30, 15, points,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    // pointtext.anchor.setTo(3.4, 8);
    pointtext.fixedToCamera = true;
    trickText.anchor.setTo(0.5, -6);
    trickText.fixedToCamera=true;





  game.world.setBounds(0, 0, 1920, 1920);

    game.stage.backgroundColor = '#124184';
  game.physics.startSystem(Phaser.Physics.ARCADE);
       game.physics.arcade.gravity.y = 350;



  player = game.add.sprite(100, 350, 'mummy', 2);
 player.anchor.setTo(0.5, 0.5)
           player.animations.add('stand', [19]);
           player.animations.add('manual', [29]);
           player.animations.add('crouch', [28]);
           player.animations.add('ollie', [ 26, 25, 5, 2, 4, 3, 18, 17]);
           player.animations.add('kick', [ 26, 11, 23, 15, 14, 0, 21, 18, 16, 22, 17]);
           player.animations.add('trey', [19, 9, 12, 11, 13, 10, 8, 7, 1, 6, 4, 3, 18, 16, 22, 17, 24]);







 //  oler = game.add.sprite(100, 350, 'ollers');
 // oler.anchor.setTo(0.5, 0.5)
 //            oler.animations.add('ollers');





  ground = game.add.sprite(0, 520, 'ground', 3);


  grounder = game.add.sprite(200, 420, 'ground', 3);

 game.world.bringToTop(trickText)
 game.world.bringToTop(points)






 //     game.physics.enable(player, Phaser.Physics.ARCADE);
 //     game.physics.enable(ground, Phaser.Physics.ARCADE);














game.physics.arcade.enable([player, ground, grounder]);
    ground.body.allowGravity = false;
    ground.body.immovable = true;


 grounder.body.allowGravity = false;
    grounder.body.immovable = true;





 cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


    game.camera.follow(player);
grounder.body.checkCollision.down = false;

}


function update(){
    game.physics.arcade.collide(ground, player,);
    game.physics.arcade.collide(grounder, player,);




    game.input.keyboard.onUpCallback = function( e ){
     if(e.keyCode == Phaser.Keyboard.SPACEBAR){
 var countertoVeloc = -counter * 7

if(player.body.velocity.y == 0){
    if(countertoVeloc < -400){
      countertoVeloc =-400}
player.body.velocity.y = countertoVeloc

counter = 0;
    text.setText('Counter: ' + counter);
     player.animations.play('ollie', 10, false)
     var ollieHeight = Math.round((countertoVeloc*-1)/10)
     trickText.setText('ollie \uFF0B ' + ollieHeight)
     points+= ollieHeight
     pointtext.setText('points: ' + points)
       setTimeout(() => {trickText.setText(' ')},1200)



   }

if(cursors.right.isDown && player.body.velocity.y !== 0){
  player.animations.play('kick', 10, false)
  trickText.setText('kickflip \uFF0B 100')
  points+=100
  pointtext.setText('points: ' + points)
  setTimeout(() => {trickText.setText(' ')},1200)

}
if(cursors.left.isDown && player.body.velocity.y !== 0){
  player.animations.play('kick', 10, false)
       trickText.setText('kickflip \uFF0B 100')
       points+= 100
       pointtext.setText('points: ' + points)
       setTimeout(() => {trickText.setText(' ')},1200)

}
}
}

 if(cursors.up.isDown && cursors.left.isDown && player.body.velocity.y !== 0|| cursors.up.isDown && cursors.right.isDown && player.body.velocity.y !== 0){

          player.animations.play('trey', 10, false)
          trickText.setText('360 flip \uFF0B 200')
          points+= 200
          pointtext.setText('points: ' + points)
          setTimeout(() => {trickText.setText(' ')},1200)
}

//manual ability needs balance bar
/*if(cursors.up.isDown && cursors.down.isDown && player.body.velocity.y == 0){
  player.animations.play('manual', 10, false)

}*/



if (fireButton.isDown){
   player.animations.play('crouch', 10, false)
   counter++
    text.setText('Counter: ' + counter);
    pointtext.setText('points: ' + points)

}



//fall through platform
if(cursors.down.isDown && player.body.velocity.y == 0){
  grounder.body.checkCollision.up = false
}


if (cursors.left.isDown)
         {
            if (player.scale.x < 0){
            player.scale.x *=-1;
           }
                if(player.body.velocity.y == 0){
                    player.x -= 8;
                    }
                    else{
                        player.x -= 2;
                    }
                  }


if (cursors.right.isDown)
         {
            if (player.scale.x > 0){
            player.scale.x *=-1;
           }
                if(player.body.velocity.y == 0){
                    player.x += 8;
                    }
                    else{
                        player.x += 2;
                    }
                  }


  if (cursors.right.isDown && fireButton.isDown){

    player.animations.play('kick', 10, false)
  }





//             player.animations.play('stand', 30, true);
//                                     player.animations.currentAnim.speed = 12;

//         }
//         else if (cursors.right.isDown)

//         {

//            if (player.scale.x > 0){
//             player.scale.x *=-1;
//            }

//                 if(player.body.velocity.y == 0){
//             player.x += 4;
//         }else{
//                         player.x += 2;
//                     }

//             player.animations.play('stand', 30, true);
//                                     player.animations.currentAnim.speed = 12;

//         }
//         else if (fireButton.isDown){
//             // player.y += -4;

//             if (player.body.velocity.y == 0){

//               player.animations.play('crouch', 10, false)

//             }
//           }

//              else if (fireButton.isUp && player.animations.name == 'crouch'){

//              player.body.velocity.y = -350;
//                            player.animations.play('ollie', 10, true)






//             // player.animations.play('walk', 30, true);




//             // player.animations.stop('walk', player.frame, true);
//             //try ollie out was above


//          } else {
//                 // player.x = player.x
//                             player.animations.stop('stand', player.frame, true);

//         }



}
















//fourth backup
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update});



function preload() {



var player;

    //  37x45 is the size of each frame

    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
    game.load.image('ground', 'assets/grounds.png')
    game.load.spritesheet('mummy', 'assets/final.png', 220, 270);
    game.load.image('backgrounder', 'assets/green.jpg')

}
var counter = 0;
var trickName;
var points = 0;
var rect;
var graphics;
var olliePercent;
var finalPercent;
var graphics;
var cent;


function create() {








    var bb = game.add.tileSprite(0, 0, 1000, 600, 'backgrounder');
    bb.fixedToCamera = true;
 text = game.add.text(game.world.centerX, game.world.centerY, 'Counter: 0', { font: "64px Arial", fill: "#ffffff", align: "center" });
    text.anchor.setTo(0.5, 0.5);

    trickText = game.add.text(game.world.centerX, game.world.centerY, trickName,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    pointtext = game.add.text(30, 15, points,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    // pointtext.anchor.setTo(3.4, 8);
    pointtext.fixedToCamera = true;
    trickText.anchor.setTo(0.5, -6);
    trickText.fixedToCamera=true;





  game.world.setBounds(0, 0, 1920, 1920);

    game.stage.backgroundColor = '#124184';
  game.physics.startSystem(Phaser.Physics.ARCADE);
       game.physics.arcade.gravity.y = 350;



  player = game.add.sprite(100, 350, 'mummy', 2);
 player.anchor.setTo(0.5, 0.5)
           player.animations.add('stand', [19]);
           player.animations.add('manual', [29]);
           player.animations.add('crouch', [28]);
           player.animations.add('ollie', [ 26, 25, 5, 2, 4, 3, 18, 17]);
           player.animations.add('kick', [ 26, 11, 23, 15, 14, 0, 21, 18, 16, 22, 17]);
           player.animations.add('trey', [19, 9, 12, 11, 13, 10, 8, 7, 1, 6, 4, 3, 18, 16, 22, 17, 24]);







 //  oler = game.add.sprite(100, 350, 'ollers');
 // oler.anchor.setTo(0.5, 0.5)
 //            oler.animations.add('ollers');





  ground = game.add.sprite(0, 520, 'ground', 3);


  grounder = game.add.sprite(200, 420, 'ground', 3);

 game.world.bringToTop(trickText)
 game.world.bringToTop(points)





 //     game.physics.enable(player, Phaser.Physics.ARCADE);
 //     game.physics.enable(ground, Phaser.Physics.ARCADE);




//add rectangle shapes
    var graphics = game.add.graphics();


graphics.fixedToCamera = true;

    // // set a fill and line style
    // graphics.beginFill(0xFF3300);
    // graphics.lineStyle(10, 0xffd900, 1);

    // draw a shape
    // graphics.moveTo(50,50);
    // graphics.lineTo(250, 50);
    // graphics.lineTo(100, 100);
    // graphics.lineTo(250, 220);
    // graphics.lineTo(50, 220);
    // graphics.lineTo(50, 50);
    // graphics.endFill();

    // set a fill and line style again
    // graphics.lineStyle(10, 0xFF0000, 0.8);
    // graphics.beginFill(0xFF700B, 1);

    // draw a second shape
    // graphics.moveTo(210,300);
    // graphics.lineTo(450,320);
    // graphics.lineTo(570,350);
    // graphics.quadraticCurveTo(600, 0, 480,100);
    // graphics.lineTo(330,120);
    // graphics.lineTo(410,200);
    // graphics.lineTo(210,300);
    // graphics.endFill();

    // draw a rectangle



cent = (game.width - 300)/2
    graphics.lineStyle(0, 0xDEF7E8);
     graphics.beginFill(0xDEF7E8, 1, 10);
    graphics.drawRect(cent,530,300,22,50);
    graphics.endFill();




    // draw a circle
    // graphics.lineStyle(0);
    // graphics.beginFill(0xFFFF0B, 0.5);
    // graphics.drawCircle(470, 200, 200);
    // graphics.endFill();

    // graphics.lineStyle(20, 0x33FF00);
    // graphics.moveTo(30,30);
    // graphics.lineTo(600, 300);







game.physics.arcade.enable([player, ground, grounder]);
    ground.body.allowGravity = false;
    ground.body.immovable = true;


 grounder.body.allowGravity = false;
    grounder.body.immovable = true;





 cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


    game.camera.follow(player);
grounder.body.checkCollision.down = false;

}


function update(){
    game.physics.arcade.collide(ground, player,);
    game.physics.arcade.collide(grounder, player,);




    game.input.keyboard.onUpCallback = function( e ){
     if(e.keyCode == Phaser.Keyboard.SPACEBAR){
 var countertoVeloc = -counter * 7

if(player.body.velocity.y == 0){
    if(countertoVeloc < -400){
      countertoVeloc =-400}
player.body.velocity.y = countertoVeloc

counter = 0;
    text.setText('Counter: ' + counter);
     player.animations.play('ollie', 10, false)
     var ollieHeight = Math.round((countertoVeloc*-1)/10)
     trickText.setText('ollie \uFF0B ' + ollieHeight)
     points+= ollieHeight
     pointtext.setText('points: ' + points)
       setTimeout(() => {trickText.setText(' ')},1200)



   }

if(cursors.right.isDown && player.body.velocity.y !== 0){
  player.animations.play('kick', 10, false)
  trickText.setText('kickflip \uFF0B 100')
  points+=100
  pointtext.setText('points: ' + points)
  setTimeout(() => {trickText.setText(' ')},1200)

}
if(cursors.left.isDown && player.body.velocity.y !== 0){
  player.animations.play('kick', 10, false)
       trickText.setText('kickflip \uFF0B 100')
       points+= 100
       pointtext.setText('points: ' + points)
       setTimeout(() => {trickText.setText(' ')},1200)

}
}
}

 if(cursors.up.isDown && cursors.left.isDown && player.body.velocity.y !== 0|| cursors.up.isDown && cursors.right.isDown && player.body.velocity.y !== 0){

          player.animations.play('trey', 10, false)
          trickText.setText('360 flip \uFF0B 200')
          points+= 200
          pointtext.setText('points: ' + points)
          setTimeout(() => {trickText.setText(' ')},1200)
}

//manual ability needs balance bar
/*if(cursors.up.isDown && cursors.down.isDown && player.body.velocity.y == 0){
  player.animations.play('manual', 10, false)

}*/



if (fireButton.isDown){
   player.animations.play('crouch', 10, false)
   counter++
    text.setText('Counter: ' + counter);
    pointtext.setText('points: ' + points)

    olliePercent = (-counter * 7)/-4

    finalPercent = olliePercent * 3

     if(finalPercent > 300){
      finalPercent = 300
    }

var graphics = game.add.graphics();

       graphics.beginFill('0x999999',1)
     graphics.drawRect(cent+1,531,finalPercent-2 ,20,50);
    graphics.beginFill('0x999999',1)
    graphics.endFill()
    graphics.fixedToCamera = true;
    setTimeout(() => {graphics.clear()},100)


}



//fall through platform
if(cursors.down.isDown && player.body.velocity.y == 0){
  grounder.body.checkCollision.up = false
  setTimeout(function(){grounder.body.checkCollision.up =true}, 150)
}


if (cursors.left.isDown)
         {
            if (player.scale.x < 0){
            player.scale.x *=-1;
           }
                if(player.body.velocity.y == 0){
                    player.x -= 8;
                    }
                    else{
                        player.x -= 2;
                    }
                  }


if (cursors.right.isDown)
         {
            if (player.scale.x > 0){
            player.scale.x *=-1;
           }
                if(player.body.velocity.y == 0){
                    player.x += 8;
                    }
                    else{
                        player.x += 2;
                    }
                  }


  if (cursors.right.isDown && fireButton.isDown){

    player.animations.play('kick', 10, false)
  }





//             player.animations.play('stand', 30, true);
//                                     player.animations.currentAnim.speed = 12;

//         }
//         else if (cursors.right.isDown)

//         {

//            if (player.scale.x > 0){
//             player.scale.x *=-1;
//            }

//                 if(player.body.velocity.y == 0){
//             player.x += 4;
//         }else{
//                         player.x += 2;
//                     }

//             player.animations.play('stand', 30, true);
//                                     player.animations.currentAnim.speed = 12;

//         }
//         else if (fireButton.isDown){
//             // player.y += -4;

//             if (player.body.velocity.y == 0){

//               player.animations.play('crouch', 10, false)

//             }
//           }

//              else if (fireButton.isUp && player.animations.name == 'crouch'){

//              player.body.velocity.y = -350;
//                            player.animations.play('ollie', 10, true)






//             // player.animations.play('walk', 30, true);




//             // player.animations.stop('walk', player.frame, true);
//             //try ollie out was above


//          } else {
//                 // player.x = player.x
//                             player.animations.stop('stand', player.frame, true);

//         }



}


// fifth backUp

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update});



function preload() {



var player;

    //  37x45 is the size of each frame

    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
    game.load.image('ground', 'assets/grounds.png')
    game.load.spritesheet('mummy', 'assets/final.png', 220, 270);
    game.load.image('backgrounder', 'assets/green.jpg')

}
var counter = 0;
var trickName;
var points = 0;
var rect;
var graphics;
var olliePercent;
var finalPercent;
var graphics;
var cent;



function create() {








    var bb = game.add.tileSprite(0, 0, 1000, 600, 'backgrounder');
    bb.fixedToCamera = true;
 text = game.add.text(game.world.centerX, game.world.centerY, 'Counter: 0', { font: "64px Arial", fill: "#ffffff", align: "center" });
    text.anchor.setTo(0.5, 0.5);

    trickText = game.add.text(game.world.centerX, game.world.centerY, trickName,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    pointtext = game.add.text(30, 15, points,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    // pointtext.anchor.setTo(3.4, 8);
    pointtext.fixedToCamera = true;
    trickText.anchor.setTo(0.5, -6);
    trickText.fixedToCamera=true;





  game.world.setBounds(0, 0, 1920, 1920);

    game.stage.backgroundColor = '#124184';
  game.physics.startSystem(Phaser.Physics.ARCADE);
       game.physics.arcade.gravity.y = 350;



  player = game.add.sprite(100, 350, 'mummy', 2);
 player.anchor.setTo(0.5, 0.5)
           player.animations.add('stand', [19]);
           player.animations.add('manual', [29]);
           player.animations.add('crouch', [28]);
           player.animations.add('ollie', [ 26, 25, 5, 2, 4, 3, 18, 17]);
           player.animations.add('kick', [ 26, 11, 23, 15, 14, 0, 21, 18, 16, 22, 17]);
           player.animations.add('trey', [19, 9, 12, 11, 13, 10, 8, 7, 1, 6, 4, 3, 18, 16, 22, 17, 24]);







 //  oler = game.add.sprite(100, 350, 'ollers');
 // oler.anchor.setTo(0.5, 0.5)
 //            oler.animations.add('ollers');





  ground = game.add.sprite(0, 520, 'ground', 3);


  grounder = game.add.sprite(200, 420, 'ground', 3);

 game.world.bringToTop(trickText)
 game.world.bringToTop(points)





 //     game.physics.enable(player, Phaser.Physics.ARCADE);
 //     game.physics.enable(ground, Phaser.Physics.ARCADE);




//add rectangle shapes
    var graphics = game.add.graphics();


graphics.fixedToCamera = true;

    // // set a fill and line style
    // graphics.beginFill(0xFF3300);
    // graphics.lineStyle(10, 0xffd900, 1);

    // draw a shape
    // graphics.moveTo(50,50);
    // graphics.lineTo(250, 50);
    // graphics.lineTo(100, 100);
    // graphics.lineTo(250, 220);
    // graphics.lineTo(50, 220);
    // graphics.lineTo(50, 50);
    // graphics.endFill();

    // set a fill and line style again
    // graphics.lineStyle(10, 0xFF0000, 0.8);
    // graphics.beginFill(0xFF700B, 1);

    // draw a second shape
    // graphics.moveTo(210,300);
    // graphics.lineTo(450,320);
    // graphics.lineTo(570,350);
    // graphics.quadraticCurveTo(600, 0, 480,100);
    // graphics.lineTo(330,120);
    // graphics.lineTo(410,200);
    // graphics.lineTo(210,300);
    // graphics.endFill();

    // draw a rectangle



cent = (game.width - 300)/2
    graphics.lineStyle(0, 0xDEF7E8);
     graphics.beginFill(0xDEF7E8, 1, 10);
    graphics.drawRect(cent,530,300,22,50);
    graphics.endFill();




    // draw a circle
    // graphics.lineStyle(0);
    // graphics.beginFill(0xFFFF0B, 0.5);
    // graphics.drawCircle(470, 200, 200);
    // graphics.endFill();

    // graphics.lineStyle(20, 0x33FF00);
    // graphics.moveTo(30,30);
    // graphics.lineTo(600, 300);







game.physics.arcade.enable([player, ground, grounder]);
    ground.body.allowGravity = false;
    ground.body.immovable = true;


 grounder.body.allowGravity = false;
    grounder.body.immovable = true;





 cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


    game.camera.follow(player);
grounder.body.checkCollision.down = false;

}


function update(){



    game.physics.arcade.collide(ground, player,);
    game.physics.arcade.collide(grounder, player,);




    game.input.keyboard.onUpCallback = function( e ){
     if(e.keyCode == Phaser.Keyboard.SPACEBAR){
 var countertoVeloc = -counter * 7

if(player.body.velocity.y == 0){
    if(countertoVeloc < -400){
      countertoVeloc =-400}
   else if(countertoVeloc < -380 && countertoVeloc > -400)
      {
        countertoVeloc = -500;
        var graphics = game.add.graphics();
         graphics.beginFill('0xFF4FF2',1)
     graphics.drawRect(cent+1,531,298,20,50);
    graphics.beginFill(0xFF4FF2,1)
    graphics.endFill()
    graphics.fixedToCamera = true;
    game.world.bringToTop(graphics)
    setTimeout(() => {graphics.clear()},500)
      }
player.body.velocity.y = countertoVeloc

counter = 0;
    text.setText('Counter: ' + counter);
     player.animations.play('ollie', 10, false)
     var ollieHeight = Math.round((countertoVeloc*-1)/10)
     trickText.setText('ollie \uFF0B ' + ollieHeight)
     points+= ollieHeight
     pointtext.setText('points: ' + points)
       setTimeout(() => {trickText.setText(' ')},1200)



   }

if(cursors.right.isDown && player.body.velocity.y !== 0){
  player.animations.play('kick', 10, false)
  trickText.setText('kickflip \uFF0B 100')
  points+=100
  pointtext.setText('points: ' + points)
  setTimeout(() => {trickText.setText(' ')},1200)

}
if(cursors.left.isDown && player.body.velocity.y !== 0){
  player.animations.play('kick', 10, false)
       trickText.setText('kickflip \uFF0B 100')
       points+= 100
       pointtext.setText('points: ' + points)
       setTimeout(() => {trickText.setText(' ')},1200)

}
}
}

 if(cursors.up.isDown && cursors.left.isDown && player.body.velocity.y !== 0|| cursors.up.isDown && cursors.right.isDown && player.body.velocity.y !== 0){

          player.animations.play('trey', 10, false)
          trickText.setText('360 flip \uFF0B 200')
          points+= 200
          pointtext.setText('points: ' + points)
          setTimeout(() => {trickText.setText(' ')},1200)
}

//manual ability needs balance bar
/*if(cursors.up.isDown && cursors.down.isDown && player.body.velocity.y == 0){
  player.animations.play('manual', 10, false)

}*/



if (fireButton.isDown && player.body.velocity.y == 0){
   player.animations.play('crouch', 10, false)
   counter++
    text.setText('Counter: ' + counter);
    pointtext.setText('points: ' + points)

    olliePercent = (-counter * 7)/-4

    finalPercent = olliePercent * 3

     if(finalPercent > 300){
      finalPercent = 300
    }

var graphics = game.add.graphics();

       graphics.beginFill('0x999999',1)
     graphics.drawRect(cent+1,531,finalPercent-2 ,20,50);
    graphics.beginFill(0x999999,1)
    graphics.endFill()
    graphics.fixedToCamera = true;
    setTimeout(() => {graphics.clear()},100)


}



//fall through platform
if(cursors.down.isDown && player.body.velocity.y == 0){
  grounder.body.checkCollision.up = false
  setTimeout(function(){grounder.body.checkCollision.up =true}, 150)
}


if (cursors.left.isDown)
         {
            if (player.scale.x < 0){
            player.scale.x *=-1;
           }
                if(player.body.velocity.y == 0){
                    player.x -= 8;
                    }
                    else{
                        player.x -= 2;
                    }
                  }


if (cursors.right.isDown)
         {
            if (player.scale.x > 0){
            player.scale.x *=-1;
           }
                if(player.body.velocity.y == 0){
                    player.x += 8;
                    }
                    else{
                        player.x += 2;
                    }
                  }


  if (cursors.right.isDown && fireButton.isDown){

    player.animations.play('kick', 10, false)
  }





//             player.animations.play('stand', 30, true);
//                                     player.animations.currentAnim.speed = 12;

//         }
//         else if (cursors.right.isDown)

//         {

//            if (player.scale.x > 0){
//             player.scale.x *=-1;
//            }

//                 if(player.body.velocity.y == 0){
//             player.x += 4;
//         }else{
//                         player.x += 2;
//                     }

//             player.animations.play('stand', 30, true);
//                                     player.animations.currentAnim.speed = 12;

//         }
//         else if (fireButton.isDown){
//             // player.y += -4;

//             if (player.body.velocity.y == 0){

//               player.animations.play('crouch', 10, false)

//             }
//           }

//              else if (fireButton.isUp && player.animations.name == 'crouch'){

//              player.body.velocity.y = -350;
//                            player.animations.play('ollie', 10, true)






//             // player.animations.play('walk', 30, true);




//             // player.animations.stop('walk', player.frame, true);
//             //try ollie out was above


//          } else {
//                 // player.x = player.x
//                             player.animations.stop('stand', player.frame, true);

//         }



}



//fifth back up got fall working

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update});



function preload() {



var player;

    //  37x45 is the size of each frame

    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
    game.load.image('ground', 'assets/grounds.png')
    game.load.spritesheet('mummy', 'assets/final.png', 220, 270);
    game.load.image('backgrounder', 'assets/green.jpg')

}
var counter = 0;
var trickName;
var points = 0;
var rect;
var graphics;
var olliePercent;
var finalPercent;
var graphics;
var cent;
var num;
var vel;




function create() {








    var bb = game.add.tileSprite(0, 0, 1000, 600, 'backgrounder');
    bb.fixedToCamera = true;
 text = game.add.text(game.world.centerX, game.world.centerY, 'Counter: 0', { font: "64px Arial", fill: "#ffffff", align: "center" });
    text.anchor.setTo(0.5, 0.5);

    trickText = game.add.text(game.world.centerX, game.world.centerY, trickName,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    pointtext = game.add.text(30, 15, points,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    checkvel = game.add.text(40, 25, vel,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    checkvel.fixedToCamera = true;
    // pointtext.anchor.setTo(3.4, 8);
    pointtext.fixedToCamera = true;
    trickText.anchor.setTo(0.5, -6);
    trickText.fixedToCamera=true;





  game.world.setBounds(0, 0, 1920, 1920);

    game.stage.backgroundColor = '#124184';
  game.physics.startSystem(Phaser.Physics.ARCADE);
       game.physics.arcade.gravity.y = 350;



  player = game.add.sprite(100, 350, 'mummy', 2);
 player.anchor.setTo(0.5, 0.5)
           player.animations.add('stand', [19]);
           player.animations.add('manual', [29]);
           player.animations.add('crouch', [28]);
           player.animations.add('ollie', [ 26, 25, 5, 2, 4, 3, 18, 17]);
           player.animations.add('kick', [ 26, 11, 23, 15, 14, 0, 21, 18, 16, 22, 17]);
           player.animations.add('trey', [19, 9, 12, 11, 13, 10, 8, 7, 1, 6, 4, 3, 18, 16, 22, 17, 24]);







 //  oler = game.add.sprite(100, 350, 'ollers');
 // oler.anchor.setTo(0.5, 0.5)
 //            oler.animations.add('ollers');





  ground = game.add.sprite(0, 520, 'ground', 3);


  grounder = game.add.sprite(200, 420, 'ground', 3);

 game.world.bringToTop(trickText)
 game.world.bringToTop(points)





 //     game.physics.enable(player, Phaser.Physics.ARCADE);
 //     game.physics.enable(ground, Phaser.Physics.ARCADE);




//add rectangle shapes
    var graphics = game.add.graphics();


graphics.fixedToCamera = true;

    // // set a fill and line style
    // graphics.beginFill(0xFF3300);
    // graphics.lineStyle(10, 0xffd900, 1);

    // draw a shape
    // graphics.moveTo(50,50);
    // graphics.lineTo(250, 50);
    // graphics.lineTo(100, 100);
    // graphics.lineTo(250, 220);
    // graphics.lineTo(50, 220);
    // graphics.lineTo(50, 50);
    // graphics.endFill();

    // set a fill and line style again
    // graphics.lineStyle(10, 0xFF0000, 0.8);
    // graphics.beginFill(0xFF700B, 1);

    // draw a second shape
    // graphics.moveTo(210,300);
    // graphics.lineTo(450,320);
    // graphics.lineTo(570,350);
    // graphics.quadraticCurveTo(600, 0, 480,100);
    // graphics.lineTo(330,120);
    // graphics.lineTo(410,200);
    // graphics.lineTo(210,300);
    // graphics.endFill();

    // draw a rectangle



cent = (game.width - 300)/2
    graphics.lineStyle(0, 0xDEF7E8);
     graphics.beginFill(0xDEF7E8, 1, 10);
    graphics.drawRect(cent,530,300,22,50);
    graphics.endFill();




    // draw a circle
    // graphics.lineStyle(0);
    // graphics.beginFill(0xFFFF0B, 0.5);
    // graphics.drawCircle(470, 200, 200);
    // graphics.endFill();

    // graphics.lineStyle(20, 0x33FF00);
    // graphics.moveTo(30,30);
    // graphics.lineTo(600, 300);







game.physics.arcade.enable([player, ground, grounder]);
    ground.body.allowGravity = false;
    ground.body.immovable = true;


 grounder.body.allowGravity = false;
    grounder.body.immovable = true;





 cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


    game.camera.follow(player);
grounder.body.checkCollision.down = false;

}


function update(){



    game.physics.arcade.collide(ground, player,);
    game.physics.arcade.collide(grounder, player,);




    game.input.keyboard.onUpCallback = function( e ){
     if(e.keyCode == Phaser.Keyboard.SPACEBAR){
 var countertoVeloc = -counter * 7

if(player.body.velocity.y == 0){
    if(countertoVeloc < -400){
      countertoVeloc =-400}
   else if(countertoVeloc < -380 && countertoVeloc > -400)
      {
        countertoVeloc = -500;
        var graphics = game.add.graphics();
         graphics.beginFill('0xFF4FF2',1)
     graphics.drawRect(cent+1,531,298,20,50);
    graphics.beginFill(0xFF4FF2,1)
    graphics.endFill()
    graphics.fixedToCamera = true;
    game.world.bringToTop(graphics)
    setTimeout(() => {graphics.clear()},500)
      }
player.body.velocity.y = countertoVeloc

counter = 0;
    text.setText('Counter: ' + counter);
     player.animations.play('ollie', 10, false)
     var ollieHeight = Math.round((countertoVeloc*-1)/10)
     trickText.setText('ollie \uFF0B ' + ollieHeight)
     points+= ollieHeight
     pointtext.setText('points: ' + points)
       setTimeout(() => {trickText.setText(' ')},1200)



   }

if(cursors.right.isDown && player.body.velocity.y !== 0){
  player.animations.play('kick', 10, false)
  trickText.setText('kickflip \uFF0B 100')
  points+=100
  pointtext.setText('points: ' + points)
  setTimeout(() => {trickText.setText(' ')},1200)

  player.events.onAnimationComplete.add(function(){
if (player.body.velocity.y == 0){
    alert('fall')}})

}
if(cursors.left.isDown && player.body.velocity.y !== 0){
  player.animations.play('kick', 10, false)
       trickText.setText('kickflip \uFF0B 100')
       points+= 100
       pointtext.setText('points: ' + points)
       setTimeout(() => {trickText.setText(' ')},1200)

         player.events.onAnimationComplete.add(function(){
if (player.body.velocity.y == 0){
    alert('fall')}
  })

}
}
}

 if(cursors.up.isDown && cursors.left.isDown && player.body.velocity.y !== 0|| cursors.up.isDown && cursors.right.isDown && player.body.velocity.y !== 0){

          player.animations.play('trey', 10, false)
          trickText.setText('360 flip \uFF0B 200')
          points+= 200
          pointtext.setText('points: ' + points)
          setTimeout(() => {trickText.setText(' ')},1200)
}

//manual ability needs balance bar
/*if(cursors.up.isDown && cursors.down.isDown && player.body.velocity.y == 0){
  player.animations.play('manual', 10, false)

}*/



if (fireButton.isDown && player.body.velocity.y == 0){
   player.animations.play('crouch', 10, false)
   counter++
    text.setText('Counter: ' + counter);
    pointtext.setText('points: ' + points)

    olliePercent = (-counter * 7)/-4

    finalPercent = olliePercent * 3

     if(finalPercent > 300){
      finalPercent = 300
    }

var graphics = game.add.graphics();

       graphics.beginFill('0x999999',1)
     graphics.drawRect(cent+1,531,finalPercent-2 ,20,50);
    graphics.beginFill(0x999999,1)
    graphics.endFill()
    graphics.fixedToCamera = true;
    setTimeout(() => {graphics.clear()},100)


}



//fall through platform
if(cursors.down.isDown && player.body.velocity.y == 0){
  grounder.body.checkCollision.up = false
  setTimeout(function(){grounder.body.checkCollision.up =true}, 150)
}


if (cursors.left.isDown)
         {
            if (player.scale.x < 0){
            player.scale.x *=-1;
           }
                if(player.body.velocity.y == 0){
                    player.x -= 8;
                    }
                    else{
                        player.x -= 2;
                    }
                  }


if (cursors.right.isDown)
         {
            if (player.scale.x > 0){
            player.scale.x *=-1;
           }
                if(player.body.velocity.y == 0){
                    player.x += 8;
                    }
                    else{
                        player.x += 2;
                    }
                  }


  if (cursors.right.isDown && fireButton.isDown){

    player.animations.play('kick', 10, false)
  }











vel = player.body.velocity.y


checkvel.setText(vel)

//trick multiplier check if in air if not use counter to multiply
// if (player.body.velocity.y == 0){

// trickmultiplier = 0
// }




//             player.animations.play('stand', 30, true);
//                                     player.animations.currentAnim.speed = 12;

//         }
//         else if (cursors.right.isDown)

//         {

//            if (player.scale.x > 0){
//             player.scale.x *=-1;
//            }

//                 if(player.body.velocity.y == 0){
//             player.x += 4;
//         }else{
//                         player.x += 2;
//                     }

//             player.animations.play('stand', 30, true);
//                                     player.animations.currentAnim.speed = 12;

//         }
//         else if (fireButton.isDown){
//             // player.y += -4;

//             if (player.body.velocity.y == 0){

//               player.animations.play('crouch', 10, false)

//             }
//           }

//              else if (fireButton.isUp && player.animations.name == 'crouch'){

//              player.body.velocity.y = -350;
//                            player.animations.play('ollie', 10, true)






//             // player.animations.play('walk', 30, true);




//             // player.animations.stop('walk', player.frame, true);
//             //try ollie out was above


//          } else {
//                 // player.x = player.x
//                             player.animations.stop('stand', player.frame, true);

//         }



}


//lives

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, remove: remove, update: update});



function preload() {



var player;

    //  37x45 is the size of each frame

    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
    game.load.image('ground', 'assets/grounds.png')
    game.load.spritesheet('mummy', 'assets/final.png', 220, 270);
    game.load.image('heart', 'assets/heart.png', 220, 270);
    game.load.image('backgrounder', 'assets/green.jpg')

}
var counter = 0;
var trickName;
var points = 0;
var rect;
var graphics;
var olliePercent;
var finalPercent;
var graphics;
var cent;
var num;
var vel;
var lives = 3;






function create() {









    var bb = game.add.tileSprite(0, 0, 1000, 600, 'backgrounder');
    bb.fixedToCamera = true;
 text = game.add.text(game.world.centerX, game.world.centerY, 'Counter: 0', { font: "64px Arial", fill: "#ffffff", align: "center" });
    text.anchor.setTo(0.5, 0.5);

    trickText = game.add.text(game.world.centerX, game.world.centerY, trickName,{ font: "24px Arial", fill: "#ffffff", align: "center" })

    pointtext = game.add.text(30, 15, points,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    checkvel = game.add.text(40, 25, lives,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    checkvel.fixedToCamera = true;
    // pointtext.anchor.setTo(3.4, 8);
    pointtext.fixedToCamera = true;
    trickText.anchor.setTo(0.5, -6);
    trickText.fixedToCamera=true;





  game.world.setBounds(0, 0, 1920, 1920);

    game.stage.backgroundColor = '#124184';
  game.physics.startSystem(Phaser.Physics.ARCADE);
       game.physics.arcade.gravity.y = 350;



  player = game.add.sprite(100, 350, 'mummy', 2);
 player.anchor.setTo(0.5, 0.5)
           player.animations.add('stand', [19]);
           player.animations.add('manual', [29]);
           player.animations.add('crouch', [28]);
           player.animations.add('ollie', [ 26, 25, 5, 2, 4, 3, 18, 17]);
           player.animations.add('kick', [ 26, 11, 23, 15, 14, 0, 21, 18, 16, 22, 17]);
           player.animations.add('trey', [19, 9, 12, 11, 13, 10, 8, 7, 1, 6, 4, 3, 18, 16, 22, 17, 24]);
           player.animations.add('fall', [26])







 //  oler = game.add.sprite(100, 350, 'ollers');
 // oler.anchor.setTo(0.5, 0.5)
 //            oler.animations.add('ollers');





  ground = game.add.sprite(0, 520, 'ground', 3);


  grounder = game.add.sprite(200, 420, 'ground', 3);

 game.world.bringToTop(trickText)
 game.world.bringToTop(points)
 game.world.bringToTop(lives)





 //     game.physics.enable(player, Phaser.Physics.ARCADE);
 //     game.physics.enable(ground, Phaser.Physics.ARCADE);




//add rectangle shapes
    var graphics = game.add.graphics();


graphics.fixedToCamera = true;

    // // set a fill and line style
    // graphics.beginFill(0xFF3300);
    // graphics.lineStyle(10, 0xffd900, 1);

    // draw a shape
    // graphics.moveTo(50,50);
    // graphics.lineTo(250, 50);
    // graphics.lineTo(100, 100);
    // graphics.lineTo(250, 220);
    // graphics.lineTo(50, 220);
    // graphics.lineTo(50, 50);
    // graphics.endFill();

    // set a fill and line style again
    // graphics.lineStyle(10, 0xFF0000, 0.8);
    // graphics.beginFill(0xFF700B, 1);

    // draw a second shape
    // graphics.moveTo(210,300);
    // graphics.lineTo(450,320);
    // graphics.lineTo(570,350);
    // graphics.quadraticCurveTo(600, 0, 480,100);
    // graphics.lineTo(330,120);
    // graphics.lineTo(410,200);
    // graphics.lineTo(210,300);
    // graphics.endFill();

    // draw a rectangle



cent = (game.width - 300)/2
    graphics.lineStyle(0, 0xDEF7E8);
     graphics.beginFill(0xDEF7E8, 1, 10);
    graphics.drawRect(cent,530,300,22,50);
    graphics.endFill();




    // draw a circle
    // graphics.lineStyle(0);
    // graphics.beginFill(0xFFFF0B, 0.5);
    // graphics.drawCircle(470, 200, 200);
    // graphics.endFill();

    // graphics.lineStyle(20, 0x33FF00);
    // graphics.moveTo(30,30);
    // graphics.lineTo(600, 300);







game.physics.arcade.enable([player, ground, grounder]);
    ground.body.allowGravity = false;
    ground.body.immovable = true;


 grounder.body.allowGravity = false;
    grounder.body.immovable = true;





 cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


    game.camera.follow(player);
grounder.body.checkCollision.down = false;

}
function remove(){
  function takeOutLife(){
lives.pop()
  }
}


function update(){



    game.physics.arcade.collide(ground, player,);
    game.physics.arcade.collide(grounder, player,);




    game.input.keyboard.onUpCallback = function( e ){
     if(e.keyCode == Phaser.Keyboard.SPACEBAR){
 var countertoVeloc = -counter * 7

if(player.body.velocity.y == 0){
    if(countertoVeloc < -400){
      countertoVeloc =-400}
   else if(countertoVeloc < -380 && countertoVeloc > -400)
      {
        countertoVeloc = -500;
        var graphics = game.add.graphics();
         graphics.beginFill('0xFF4FF2',1)
     graphics.drawRect(cent+1,531,298,20,50);
    graphics.beginFill(0xFF4FF2,1)
    graphics.endFill()
    graphics.fixedToCamera = true;
    game.world.bringToTop(graphics)
    setTimeout(() => {graphics.clear()},500)
      }
player.body.velocity.y = countertoVeloc

counter = 0;
    text.setText('Counter: ' + counter);
     player.animations.play('ollie', 10, false)
     var ollieHeight = Math.round((countertoVeloc*-1)/10)
     trickText.setText('ollie \uFF0B ' + ollieHeight)
     points+= ollieHeight
     pointtext.setText('points: ' + points)
       setTimeout(() => {trickText.setText(' ')},1200)



   }

if(cursors.right.isDown && player.body.velocity.y !== 0){
  player.animations.play('kick', 10, false)
  trickText.setText('kickflip \uFF0B 100')
  points+=100
  pointtext.setText('points: ' + points)

  setTimeout(() => {trickText.setText(' ')},1200)

  player.events.onAnimationComplete.add(function(){
if (player.body.velocity.y == 0 && player.animations.currentAnim.name == 'kick'){

    player.animations.play('fall', 10, false)

      lives--





    }})

}
if(cursors.left.isDown && player.body.velocity.y !== 0){
  player.animations.play('kick', 10, false)
       trickText.setText('kickflip \uFF0B 100')
       points+= 100
       pointtext.setText('points: ' + points)
       setTimeout(() => {trickText.setText(' ')},1200)

         player.events.onAnimationComplete.add(function(){

if (player.body.velocity.y == 0 && player.animations.currentAnim.name == 'kick'){


    player.animations.play('fall', 10, false)

    live--





    }
  })

}
}
}

 if(cursors.up.isDown && cursors.left.isDown && player.body.velocity.y !== 0|| cursors.up.isDown && cursors.right.isDown && player.body.velocity.y !== 0){

          player.animations.play('trey', 10, false)
          trickText.setText('360 flip \uFF0B 200')
          points+= 200
          pointtext.setText('points: ' + points)
          setTimeout(() => {trickText.setText(' ')},1200)
}

//manual ability needs balance bar
/*if(cursors.up.isDown && cursors.down.isDown && player.body.velocity.y == 0){
  player.animations.play('manual', 10, false)

}*/



if (fireButton.isDown && player.body.velocity.y == 0){
   player.animations.play('crouch', 10, false)
   counter++
    text.setText('Counter: ' + counter);
    pointtext.setText('points: ' + points)

    olliePercent = (-counter * 7)/-4

    finalPercent = olliePercent * 3

     if(finalPercent > 300){
      finalPercent = 300
    }

var graphics = game.add.graphics();

       graphics.beginFill('0x999999',1)
     graphics.drawRect(cent+1,531,finalPercent-2 ,20,50);
    graphics.beginFill(0x999999,1)
    graphics.endFill()
    graphics.fixedToCamera = true;
    setTimeout(() => {graphics.clear()},100)


}



//fall through platform
if(cursors.down.isDown && player.body.velocity.y == 0){
  grounder.body.checkCollision.up = false
  setTimeout(function(){grounder.body.checkCollision.up =true}, 150)
}


if (cursors.left.isDown)
         {
            if (player.scale.x < 0){
            player.scale.x *=-1;
           }
                if(player.body.velocity.y == 0){
                    player.x -= 8;
                    }
                    else{
                        player.x -= 2;
                    }
                  }


if (cursors.right.isDown)
         {
            if (player.scale.x > 0){
            player.scale.x *=-1;
           }
                if(player.body.velocity.y == 0){
                    player.x += 8;
                    }
                    else{
                        player.x += 2;
                    }
                  }


  if (cursors.right.isDown && fireButton.isDown){

    player.animations.play('kick', 10, false)
  }











vel = player.body.velocity.y


checkvel.setText(lives)

//trick multiplier check if in air if not use counter to multiply
// if (player.body.velocity.y == 0){

// trickmultiplier = 0
// }




//             player.animations.play('stand', 30, true);
//                                     player.animations.currentAnim.speed = 12;

//         }
//         else if (cursors.right.isDown)

//         {

//            if (player.scale.x > 0){
//             player.scale.x *=-1;
//            }

//                 if(player.body.velocity.y == 0){
//             player.x += 4;
//         }else{
//                         player.x += 2;
//                     }

//             player.animations.play('stand', 30, true);
//                                     player.animations.currentAnim.speed = 12;

//         }
//         else if (fireButton.isDown){
//             // player.y += -4;

//             if (player.body.velocity.y == 0){

//               player.animations.play('crouch', 10, false)

//             }
//           }

//              else if (fireButton.isUp && player.animations.name == 'crouch'){

//              player.body.velocity.y = -350;
//                            player.animations.play('ollie', 10, true)






//             // player.animations.play('walk', 30, true);




//             // player.animations.stop('walk', player.frame, true);
//             //try ollie out was above


//          } else {
//                 // player.x = player.x
//                             player.animations.stop('stand', player.frame, true);

//         }



}

// hearts

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update});



function preload() {



var player;

    //  37x45 is the size of each frame

    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
    game.load.image('ground', 'assets/grounds.png')
    game.load.spritesheet('mummy', 'assets/final.png', 220, 270);
    game.load.image('heart', 'assets/heart.png', 55, 68);
    game.load.image('backgrounder', 'assets/green.jpg')

}
var counter = 0;
var trickName;
var points = 0;
var rect;
var graphics;
var olliePercent;
var finalPercent;
var graphics;
var cent;
var num;
var vel;
var lives = ['life1', 'life2', 'life3'];
var livesgroup;
var timer;





function create() {








    var bb = game.add.tileSprite(0, 0, 1000, 600, 'backgrounder');
    bb.fixedToCamera = true;
 text = game.add.text(game.world.centerX, game.world.centerY, 'Counter: 0', { font: "64px Arial", fill: "#ffffff", align: "center" });
    text.anchor.setTo(0.5, 0.5);

    trickText = game.add.text(game.world.centerX, game.world.centerY, trickName,{ font: "24px Arial", fill: "#ffffff", align: "center" })

    pointtext = game.add.text(30, 15, points,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    checkvel = game.add.text(40, 25, timer,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    timenumber = game.add.text(40, 25, timer,{ font: "24px Arial", fill: "#ffffff", align: "center" })
    checkvel.fixedToCamera = true;
    // pointtext.anchor.setTo(3.4, 8);
    pointtext.fixedToCamera = true;
    trickText.anchor.setTo(0.5, -6);
    trickText.fixedToCamera=true;





  game.world.setBounds(0, 0, 1920, 1920);

    game.stage.backgroundColor = '#124184';
  game.physics.startSystem(Phaser.Physics.ARCADE);
       game.physics.arcade.gravity.y = 350;



  player = game.add.sprite(100, 350, 'mummy', 2);
 player.anchor.setTo(0.5, 0.5)
           player.animations.add('stand', [19]);
           player.animations.add('manual', [29]);
           player.animations.add('crouch', [28]);
           player.animations.add('ollie', [ 26, 25, 5, 2, 4, 3, 18, 17]);
           player.animations.add('kick', [ 26, 11, 23, 15, 14, 0, 21, 18, 16, 22, 17]);
           player.animations.add('trey', [19, 9, 12, 11, 13, 10, 8, 7, 1, 6, 4, 3, 18, 16, 22, 17, 24]);
           player.animations.add('fall', [26])






 //  oler = game.add.sprite(100, 350, 'ollers');
 // oler.anchor.setTo(0.5, 0.5)
 //            oler.animations.add('ollers');





  ground = game.add.sprite(0, 520, 'ground', 3);


  grounder = game.add.sprite(200, 420, 'ground', 3);

 game.world.bringToTop(trickText)
 game.world.bringToTop(points)
 game.world.bringToTop(lives)
 game.world.bringToTop(timenumber)





 //     game.physics.enable(player, Phaser.Physics.ARCADE);
 //     game.physics.enable(ground, Phaser.Physics.ARCADE);




//add rectangle shapes
    var graphics = game.add.graphics();


graphics.fixedToCamera = true;

    // // set a fill and line style
    // graphics.beginFill(0xFF3300);
    // graphics.lineStyle(10, 0xffd900, 1);

    // draw a shape
    // graphics.moveTo(50,50);
    // graphics.lineTo(250, 50);
    // graphics.lineTo(100, 100);
    // graphics.lineTo(250, 220);
    // graphics.lineTo(50, 220);
    // graphics.lineTo(50, 50);
    // graphics.endFill();

    // set a fill and line style again
    // graphics.lineStyle(10, 0xFF0000, 0.8);
    // graphics.beginFill(0xFF700B, 1);

    // draw a second shape
    // graphics.moveTo(210,300);
    // graphics.lineTo(450,320);
    // graphics.lineTo(570,350);
    // graphics.quadraticCurveTo(600, 0, 480,100);
    // graphics.lineTo(330,120);
    // graphics.lineTo(410,200);
    // graphics.lineTo(210,300);
    // graphics.endFill();

    // draw a rectangle



cent = (game.width - 300)/2
    graphics.lineStyle(0, 0xDEF7E8);
     graphics.beginFill(0xDEF7E8, 1, 10);
    graphics.drawRect(cent,530,300,22,50);
    graphics.endFill();




    // draw a circle
    // graphics.lineStyle(0);
    // graphics.beginFill(0xFFFF0B, 0.5);
    // graphics.drawCircle(470, 200, 200);
    // graphics.endFill();

    // graphics.lineStyle(20, 0x33FF00);
    // graphics.moveTo(30,30);
    // graphics.lineTo(600, 300);

    livesgroup = game.add.group();
  for (i = 0; i < lives.length; i++){
    livesgroup.create(i*50, 100, 'heart', 2);
  }











game.physics.arcade.enable([player, ground, grounder]);
    ground.body.allowGravity = false;
    ground.body.immovable = true;


 grounder.body.allowGravity = false;
    grounder.body.immovable = true;





 cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


    game.camera.follow(player);
grounder.body.checkCollision.down = false;



game.time.events.loop(Phaser.Timer.SECONDS, updateTimer, this)


function updateTimer(){
timer++
checkvel.setText('timer')
}


}



function update(){



    game.physics.arcade.collide(ground, player,);
    game.physics.arcade.collide(grounder, player,);




    game.input.keyboard.onUpCallback = function( e ){
     if(e.keyCode == Phaser.Keyboard.SPACEBAR){
 var countertoVeloc = -counter * 7

if(player.body.velocity.y == 0){
    if(countertoVeloc < -400){
      countertoVeloc =-400}
   else if(countertoVeloc < -380 && countertoVeloc > -400)
      {
        countertoVeloc = -500;
        var graphics = game.add.graphics();
         graphics.beginFill('0xFF4FF2',1)
     graphics.drawRect(cent+1,531,298,20,50);
    graphics.beginFill(0xFF4FF2,1)
    graphics.endFill()
    graphics.fixedToCamera = true;
    game.world.bringToTop(graphics)
    setTimeout(() => {graphics.clear()},500)
      }
player.body.velocity.y = countertoVeloc

counter = 0;
    text.setText('Counter: ' + counter);
     player.animations.play('ollie', 10, false)
     var ollieHeight = Math.round((countertoVeloc*-1)/10)
     trickText.setText('ollie \uFF0B ' + ollieHeight)
     points+= ollieHeight
     pointtext.setText ('points: ' + points)
       setTimeout(() => {trickText.setText(' ')},1200)



   }

if(cursors.right.isDown && player.body.velocity.y !== 0){
  player.animations.play('kick', 10, false)
  trickText.setText('kickflip \uFF0B 100')
  points+=100
  pointtext.setText('points: ' + points)

  setTimeout(() => {trickText.setText(' ')},1200)

  player.events.onAnimationComplete.add(function(){
if (player.body.velocity.y == 0 && player.animations.currentAnim.name == 'kick'){

    player.animations.play('fall', 10, false)

      lives.pop()
       livesgroup.children[0].destroy()





    }})

}
if(cursors.left.isDown && player.body.velocity.y !== 0){
  player.animations.play('kick', 10, false)
       trickText.setText('kickflip \uFF0B 100')
       points+= 100
       pointtext.setText('points: ' + points)
       setTimeout(() => {trickText.setText(' ')},1200)

         player.events.onAnimationComplete.add(function(){

if (player.body.velocity.y == 0 && player.animations.currentAnim.name == 'kick'){


    player.animations.play('fall', 10, false)

    lives.pop()
     livesgroup.children[0].destroy()





    }
  })

}
}
}

 if(cursors.up.isDown && cursors.left.isDown && player.body.velocity.y !== 0|| cursors.up.isDown && cursors.right.isDown && player.body.velocity.y !== 0){

          player.animations.play('trey', 10, false)
          trickText.setText('360 flip \uFF0B 200')
          points+= 200
          pointtext.setText('points: ' + points)
          setTimeout(() => {trickText.setText(' ')},1200)
}

//manual ability needs balance bar
/*if(cursors.up.isDown && cursors.down.isDown && player.body.velocity.y == 0){
  player.animations.play('manual', 10, false)

}*/



if (fireButton.isDown && player.body.velocity.y == 0){
   player.animations.play('crouch', 10, false)
   counter++
    text.setText('Counter: ' + counter);
    pointtext.setText('points: ' + points)

    olliePercent = (-counter * 7)/-4

    finalPercent = olliePercent * 3

     if(finalPercent > 300){
      finalPercent = 300
    }

var graphics = game.add.graphics();

       graphics.beginFill('0x999999',1)
     graphics.drawRect(cent+1,531,finalPercent-2 ,20,50);
    graphics.beginFill(0x999999,1)
    graphics.endFill()
    graphics.fixedToCamera = true;
    setTimeout(() => {graphics.clear()},100)


}



//fall through platform
if(cursors.down.isDown && player.body.velocity.y == 0){
  grounder.body.checkCollision.up = false
  setTimeout(function(){grounder.body.checkCollision.up =true}, 150)
}


if (cursors.left.isDown)
         {
            if (player.scale.x < 0){
            player.scale.x *=-1;
           }
                if(player.body.velocity.y == 0){
                    player.x -= 8;
                    }
                    else{
                        player.x -= 2;
                    }
                  }


if (cursors.right.isDown)
         {
            if (player.scale.x > 0){
            player.scale.x *=-1;
           }
                if(player.body.velocity.y == 0){
                    player.x += 8;
                    }
                    else{
                        player.x += 2;
                    }
                  }


  if (cursors.right.isDown && fireButton.isDown){

    player.animations.play('kick', 10, false)
  }











vel = player.body.velocity.y


// checkvel.setText(lives)


if(livesgroup.children == 0){
  alert('game over')
}



  //  for(life in lives){
  //   livesgroup.create(life*50, 100, 'heart', 2)
  //  }






//trick multiplier check if in air if not use counter to multiply
// if (player.body.velocity.y == 0){

// trickmultiplier = 0
// }




//             player.animations.play('stand', 30, true);
//                                     player.animations.currentAnim.speed = 12;

//         }
//         else if (cursors.right.isDown)

//         {

//            if (player.scale.x > 0){
//             player.scale.x *=-1;
//            }

//                 if(player.body.velocity.y == 0){
//             player.x += 4;
//         }else{
//                         player.x += 2;
//                     }

//             player.animations.play('stand', 30, true);
//                                     player.animations.currentAnim.speed = 12;

//         }
//         else if (fireButton.isDown){
//             // player.y += -4;

//             if (player.body.velocity.y == 0){

//               player.animations.play('crouch', 10, false)

//             }
//           }

//              else if (fireButton.isUp && player.animations.name == 'crouch'){

//              player.body.velocity.y = -350;
//                            player.animations.play('ollie', 10, true)






//             // player.animations.play('walk', 30, true);




//             // player.animations.stop('walk', player.frame, true);
//             //try ollie out was above


//          } else {
//                 // player.x = player.x
//                             player.animations.stop('stand', player.frame, true);

//         }



}


//last backup shows tricktext again

////Global Variables for PlayState////
////////////////////////////////////////////////////////////////////

//counter used for ollieBar
var counter = 0;

var trickName;
var points = 0;
//ollieBar rectangle
var rect;
var olliePercent;
var finalPercent;
var graphics;
var cent;
var num;
var vel;
var lives = ['life1', 'life2', 'life3'];
var livesgroup;
var timer  = 0;
var seconds;
var menus;
var timerEvents;

//three kinds of skateboard objects
var skateboardA = {
  pop: -10,//velocity
  speed: 10,
  flip: 10, //animation speed
  spin: 0.1
}
var skateboardB = {
  pop: -150,//velocity
  speed: 10,
  flip: 10, //animation speed
  spin: 0.2
}
var skateboardC = {
  pop: -20,//velocity
  speed: 20,
  flip: 5, //animation speed
  spin: 0.5
}

var skateboard1 = skateboardB


/////////////////////////////////////////////
///////End of global variables////////



var playState = {

preload: function() {



var player;

    game.load.image('ground', 'assets/grounds.png')
    game.load.spritesheet('mummy', 'assets/flattricks.png', 220, 270);
    game.load.spritesheet('mummies', 'assets/flattricks.png', 220, 270);
    game.load.image('heart', 'assets/heart.png', 55, 68);
    game.load.image('background', 'assets/green.jpg');
    game.load.image('menu', 'assets/menu.png',);
    game.load.image('gameover', 'assets/gameover.png')
    game.load.image('menubackground', 'assets/gameover.png')


},




create: function() {


//starts Timer loop in updateTimer function
  timerEvents = game.time.events.loop(1000, updateTimer, timer)


  //sets original conditions starts physics boundries and gravity
  game.world.setBounds(0, -500, 5920, 1920);
  // game.stage.backgroundColor = '#124184';
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.gravity.y = 650;


  //adds player and player animations
  player = game.add.sprite(100, 350, 'mummy', 2);
  player.anchor.setTo(0.5, 0.5)


    // player.animations.add('stand', [19]);
    // player.animations.add('manual', [29]);
    // player.animations.add('crouch', [28]);
    // player.animations.add('ollie', [ 26, 25, 5, 2, 4, 3, 18, 17]);
    // player.animations.add('kick', [ 26, 11, 23, 15, 14, 0, 21, 18, 16, 22, 17]);
    // player.animations.add('trey', [19, 9, 12, 11, 13, 10, 8, 7, 1, 6, 4, 3, 18, 16, 22, 17, 24]);
    // player.animations.add('fall', [26])

       player.animations.add('stand', [4]);
    player.animations.add('manual', [58]);
    player.animations.add('backflip', [36]);
    player.animations.add('crouch', [8]);
    player.animations.add('land', [15, 9, 12, 24, 27, 25]);
    player.animations.add('ollie', [ 6, 14, 2, 5, 15, 53, 12, 10]);
    player.animations.add('kick', [ 6, 14, 47, 48, 30, 3, 21, 12, 24, 27, 10]);
    player.animations.add('trey', [4, 23, 20, 14, 16, 19, 17, 18, 30, 1, 15, 9, 12, 24, 27, 25]);
    player.animations.add('fall', [37, 38, 35, 29, 31, 34, 32, 33, 43, 39, 42, 40, 41])
  game.camera.follow(player);







  //Sets background image
  // bb = game.add.sprite(0, 0,'backgrounder');
  bb = game.add.tileSprite(0, 0, 20000, game.width, "background");

  //bb.fixedToCamera = true;


  //Counter text
  text = game.add.text(game.world.centerX, game.world.centerY, 'Counter: 0', { font: "64px Arial", fill: "#ffffff", align: "center" });
  text.anchor.setTo(0.5, 0.5);


  //shows name of trick above ollieBar
  trickText = game.add.text(400, 300, trickName,{ font: "24px Arial", fill: "#ffffff", align: "center" });
  trickText.font = 'Just Me Again Down Here';
  trickText.fill = 'black';
  trickText.anchor.setTo(0.5, -7);
  trickText.fixedToCamera=true;


  //shows pause button in bottom right
  pauseText = game.add.text(700, 550, 'Pause',{ font: "24px Arial", fill: "#ffffff", align: "center" });
  pauseText.inputEnabled = true;
  pauseText.fixedToCamera = true;


  //adds text for points in top left corner
  pointtext = game.add.text(30, 15, 'points: 0' ,{ font: "24px Arial", fill: "#ffffff", align: "center" });
  pointtext.font = 'Just Me Again Down Here';
  pointtext.fixedToCamera = true;


  //adds text top middle for timer
  timenumber = game.add.text((game.width/2)-100, 15, timer,{ font: "24px Arial", fill: "#ffffff", align: "center" });
  timenumber.font = 'Slackey';
  timenumber.fontSize = '40px';
  timenumber.fixedToCamera = true;


  //menu sprite and placement once pause button is clicked
  menus = game.add.sprite(game.world.centerX/2, game.world.centerY/2,  'menu')
  menus.anchor.setTo(3.2, 1.1);
  menus.alpha = 0
  menus.fixedToCamera= true;


  //adds ground to skate on
  ground = game.add.sprite(0, 520, 'ground', 2);
  ground2 = game.add.sprite(2000, 520, 'ground', 3);
  ground3 = game.add.sprite(4000, 520, 'ground', 3);
  grounder = game.add.sprite(200, 420, 'ground', 3);


  //OllieBar rectangle graphics
  var graphics = game.add.graphics();
  graphics.fixedToCamera = true;
  cent = (game.width - 300)/2
    graphics.lineStyle(0, 0xDEF7E8);
    graphics.beginFill(0xDEF7E8, 1, 10);
    graphics.drawRect(cent,530,300,22,50);
    graphics.endFill();


  //Adds hearts/////
  livesgroup = game.add.group();
  livesgroup.fixedToCamera= true
  for (i = 0; i < lives.length; i++){
    livesgroup.create((i*50)+600, 10, 'heart', 2);
    }


  //enables physics on objects in game
  game.physics.arcade.enable([player, ground, ground2, ground3, grounder, bb]);
  ground.body.allowGravity = false;//first platform
  ground.body.immovable = true;
  ground2.body.allowGravity = false;//first platform
  ground2.body.immovable = true;
  ground3.body.allowGravity = false;//first platform
  ground3.body.immovable = true;
  grounder.body.allowGravity = false;//second platform
  grounder.body.immovable = true;
   bb.body.allowGravity = false;//second platform
  bb.body.immovable = true;
  grounder.body.checkCollision.down = false;





  //sets z-index of all objects
  game.world.bringToTop(points)
  game.world.bringToTop(lives)
  game.world.bringToTop(timenumber)
  game.world.bringToTop(pauseText)
  game.world.bringToTop(menus)
  game.world.bringToTop(player)
    game.world.bringToTop(trickText)



  //handles pause button event//
  ////////////////////////////////////////////////////////
  pauseText.events.onInputUp.add(function(){
    //sets opacity enables visibility of menu
    menus.alpha = 1;
    //sets background color so stage behind menu looks greyed out
    game.stage.backgroundColor = '##000000';

    //sets opacity down on all stage lements//
    bb.alpha = 0.5;
    player.alpha = 0.5;
    pointtext.alpha =0.5;
    ground.alpha = 0.5;
    grounder.alpha = 0.5;
    text.alpha =0.5;
    graphics.alpha =0.5;
    //////////////////////////

    //pauses game
    game.paused = true;

    })

    //handles unpausing button event/////
    game.input.onDown.add(unpaws)

  function unpaws(event){

    //checks if games paused then listens to location of click
    if(game.paused){

      if(event.x > 283 && event.x < 523){
          if(event.y > 81 && event.y < 134){
            alert('continue')
          }
          else if(event.y > 156 && event.y < 208){
            alert('restart')
          }
          else if(event.y > 231 && event.y < 283){
            alert('main menu')
          }
          else {
            //if click outside menu items but in menu unpause
            menus.alpha = 0
            bb.alpha = 1;
            player.alpha = 1;
            pointtext.alpha =1;
            ground.alpha = 1;
            grounder.alpha = 1;
            text.alpha =1;
            graphics.alpha =1;
            game.paused = false;
            }
        }
      else {
        //if clicked outside entire menu, unpause
        menus.alpha = 0
        bb.alpha = 1;
        player.alpha = 1;
        pointtext.alpha =1;
        ground.alpha = 1;
        grounder.alpha = 1;
        text.alpha =1;
        graphics.alpha =1;
        game.paused = false;
      }
    }
  }


  //enables keys for controlling character/firebutton is spacebar
  cursors = game.input.keyboard.createCursorKeys();
  fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    //save for later in case needed for jump
    // draw a circle
    // graphics.lineStyle(0);
    // graphics.beginFill(0xFFFF0B, 0.5);
    // graphics.drawCircle(470, 200, 200);
    // graphics.endFill();
    // graphics.lineStyle(20, 0x33FF00);
    // graphics.moveTo(30,30);
    // graphics.lineTo(600, 300);



},




update: function(){
  bb.tilePosition.x -=1
  ground.body.x -=3
  ground2.body.x -=3
  ground3.body.x -=3
  grounder.body.x -=3
  player.x +=3


  //listens for colision between both platforms and player
  game.physics.arcade.collide(ground, player,);
  game.physics.arcade.collide(ground2, player,);
  game.physics.arcade.collide(ground3, player,);
  game.physics.arcade.collide(grounder, player,);


  //listens for release of spacebar after olliebar charges
  game.input.keyboard.onUpCallback = function( e ){
    if(e.keyCode == Phaser.Keyboard.SPACEBAR){
      var countertoVeloc = -counter * 7 + skateboard1.pop

      if(player.body.velocity.y == 0){

        if(countertoVeloc < -400){
          countertoVeloc =-400 + skateboard1.pop}

        else if(countertoVeloc < -320 + skateboard1.pop && countertoVeloc > -400 + skateboard1.pop){
          countertoVeloc = -500 + skateboard1.pop;
          var graphics = game.add.graphics();
          graphics.beginFill('0xFF4FF2',1)
          graphics.drawRect(cent + 1,531,298,20,50);
          graphics.beginFill(0xFF4FF2,1)
          graphics.endFill()
          graphics.fixedToCamera = true;
          game.world.bringToTop(graphics)
            setTimeout(() => {graphics.clear()},500)
        }

        player.body.velocity.y = countertoVeloc
        counter = 0;
        text.setText('Counter: ' + counter);
        player.animations.play('ollie', 10, false)
        var ollieHeight = Math.round((countertoVeloc * -1) / 10)
        trickText.setText('ollie \uFF0B ' + ollieHeight)
        points += ollieHeight
        pointtext.setText('points: ' + points)
          setTimeout(() => {trickText.setText(' ')},1200)
      }

    if(cursors.right.isDown && player.body.velocity.y !== 0){
      kickflip()
    }

    if(cursors.left.isDown && player.body.velocity.y !== 0){
      kickflip()
    }
  }
}

function kickflip(){
        player.animations.play('kick', skateboard1.flip , false)
      trickText.setText('kickflip \uFF0B 100');
      points+= 100;
      pointtext.setText('points: ' + points);
        setTimeout(() => {trickText.setText(' ')},1200);
        player.events.onAnimationComplete.add(function(){
           player.animations.play('crouch', 10, true)
        })

    }




if(cursors.up.isDown && cursors.left.isDown && player.body.velocity.y !== 0|| cursors.up.isDown && cursors.right.isDown && player.body.velocity.y !== 0){
treyflip()
}

function treyflip(){
  player.animations.play('trey', skateboard1.flip, false)
  trickText.setText('360 flip \uFF0B 200');
  points+= 200;
  pointtext.setText('points: ' + points)
    setTimeout(() => {trickText.setText(' ')},1200)
    player.events.onAnimationComplete.add(function(){
      // if(player.body.velocity.y == 0 && player.animations.currentAnim.name == 'trey'){
      //   player.animations.play('fall', 10, false)
      //   lives.pop()
      //   livesgroup.children[0].destroy()

      // }
      player.animations.play('crouch', 10, false)
    })
  }


if(fireButton.isDown && player.body.velocity.y == 0){
  player.animations.play('crouch', 10, false)
  counter++
  text.setText('Counter: ' + counter);
  pointtext.setText('points: ' + points)
  olliePercent = (-counter * 7)/ -4
  finalPercent = olliePercent * 3
    if(finalPercent > 300){
      finalPercent = 300
    }

  var graphics = game.add.graphics();
  graphics.beginFill('0x999999',1);
  graphics.drawRect(cent+1,531,finalPercent-2 ,20,50);
  graphics.beginFill(0x999999,1);
  graphics.endFill()
  graphics.fixedToCamera = true;
    setTimeout(() => {graphics.clear()},100);
}


//fall through platform
if(cursors.down.isDown && player.body.velocity.y == 0){
  grounder.body.checkCollision.up = false;
    setTimeout(function(){grounder.body.checkCollision.up =true}, 150);
}


//goes left when left button down
if(cursors.left.isDown){
  //if facing other way revierse player
  if(player.scale.x < 0){
    player.scale.x *=-1;
  }
  //changes speed of board to speed of player
  if(player.body.velocity.y == 0){
    player.x -= skateboard1.speed;
  }
  //less fast if in air
  else{
    player.x -= 2;
  }
}

//goes right when right button down
if(cursors.right.isDown){
  //if facing other way revierse player
  if(player.scale.x > 0){
    player.scale.x *=-1;
  }
  //changes speed of board to speed of player
  if(player.body.velocity.y == 0){
    player.x += skateboard1.speed;
  }
  else{
   //less fast if in air
  player.x += 2;
  }
}


vel = player.body.velocity.y;


// handles game over screen and refers to menu// NEEDS WORK
////////////////////////////////////////////////////////////////////////////////
function endGame(){
if(livesgroup.children == 0 || seconds <= 0){

  var gameoverMenu = game.add.tileSprite(0, 0, 1000, 600, 'gameover')
   game.time.events.remove(timerEvents)
  gameoverMenu.anchor.setTo(0.1, -0.1);
  game.world.bringToTop(gameoverMenu)
  gameoverMenu.fixedToCamera = true;
  game.input.onDown.add(choose)
    function choose(event){
      //checks for click in entire menu
      if(event.x > 283 && event.x < 523){
        //checks for click in first button
        if(event.y > 81 && event.y < 134){
          alert('continue')
        }
        //checls for click in second button
        else if(event.y > 156 && event.y < 208){
          alert('restart')
        }
        //checks for click in third button
        else if(event.y > 231 && event.y < 283){
          alert('main menu');
        }
        else{
          game.state.start('mainmenu')
        }

      }
    }
  }
}

if(seconds <= 0){
  endGame()

}




//allows for rotating sprite for backflip
if(cursors.left.isDown && player.body.velocity.y !== 0){
  player.angle -= skateboard1.spin
  if(fireButton.isDown){
    player.animations.play('backflip', 10, false)
    player.angle -= skateboard1.spin + 3
  }
}

//allows for rotating sprite for backflip
if(cursors.right.isDown && player.body.velocity.y !== 0){
  player.angle += skateboard1.spin
  if(fireButton.isDown){
    player.animations.play('backflip', 10, false)
    player.angle += skateboard1.spin + 3
  }
}


function falling(){
    player.animations.play('fall', 10, false)
      livesgroup.children[0].destroy()
      game.input.enabled= false
      player.events.onAnimationComplete.add(function(){
      game.input.enabled = true

      endGame()
      })
 }


//if not in air stop spinning/ if land over 40 degrees fall
if (player.body.velocity.y == 0 && player.angle !== 0){
  if (player.angle > 40){
    falling()
  }
  else if (player.angle < -40){
    falling()
  }
player.angle = 0;
}




//handles falling off map
if(player.body.y > 1000){
  player.animations.play('fall', 10, false)
  livesgroup.children[0].destroy()
   player.reset(1, game.height+500);
}




//for manual but conflicts with stop spinning above
//   if(cursors.up.isDown && player.body.velocity.y == 0){
//  player.angle += 1
// }
//  else if(cursors.down.isDown && player.body.velocity.y == 0){
//   player.angle -= 1
//  }
//  if(player.angle > 50){
//   alert('fall')
//  }



if(player.body.velocity.y == 0 && player.animations.currentAnim.name=='kick' || player.body.velocity.y == 0 && player.animations.currentAnim.name=='trey'){
  // player.animations.play('fall', 10, false)
  //  livesgroup.children[0].destroy()
   falling()
}








}
}


//updates time // NEEDS TO BE CONVERTED TO MINUTES AND SECONDS
// /////////////////////////////////////////////////////////////////////////
function updateTimer(){
  timer++
  seconds = 120-timer
  timenumber.setText('time: ' + seconds)
    if(seconds <= 10){
      timenumber.fill = '#F6B900';
    }
}




