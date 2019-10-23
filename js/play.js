



var playState = {

preload: function() {
// game.plugins.add(Phaser.Plugin.ArcadeSlopes);




    game.load.image('tiles', 'assets/photoshopAssets.png')

    game.load.tilemap('mapofTile', 'assets/bligob.json', null, Phaser.Tilemap.TILED_JSON);

    game.load.image('ground', 'assets/grounds.png')
    game.load.spritesheet('mummy', 'assets/flattricks.png', 220, 270);
    game.load.spritesheet('mummies', 'assets/flattricks.png', 220, 270);
    game.load.image('heart', 'assets/heart.png', 55, 68);
    game.load.image('background', 'assets/physics/sky.png');
    game.load.image('cityline', 'assets/skyline6.png');
    game.load.image('menu', 'assets/menu.png');
    game.load.image('gameover', 'assets/gameover.png')
    game.load.image('menubackground', 'assets/gameover.png')
    game.load.image('2can', 'assets/physics/2cans.png')
     game.load.image('layover', 'assets/menulayover.png')


},




create: function() {
  points = 0
  game.world.setBounds(0,0,8000,380)

  game.physics.startSystem(Phaser.Physics.ARCADE);


   bb = game.add.sprite(0, 0, 'background');
   bb.fixedToCamera = true


      ll = game.add.sprite(0, 0, 'layover');
   ll.fixedToCamera = true
   ll.alpha = 0;

   var skyline = game.add.sprite(0, 0, 'cityline');
   skyline.fixedToCamera = true
   skyline.scale.x = 0.5
   skyline.scale.y = 0.5

 map = game.add.tilemap('mapofTile');


    map.addTilesetImage('photoshopAssets', 'tiles');

        map.setCollisionBetween(1, 100);
    map.setCollisionBetween(20, 25);
    map.setCollisionBetween(27, 29);
    map.setCollision(40);


layer3 = map.createLayer('roads');
houses = map.createLayer('Tile Layer 1');
var sidewalk = map.createLayer('sidewalk');

var skate2 = map.createLayer('skateit2')
var skate1 = map.createLayer('skateit')
var forground2 = map.createLayer('forground2')
// var forground = map.createLayer('forground')
// var stairs = map.createLayer('stairs');
// skateable = map.createLayer('skateable');

houses.resizeWorld();



// backgroundlayer = map.createLayer('Tile Layer 3');
//        groundLayer = map.createLayer('Tile Layer 1');

//         map.setCollisionBetween(1, 100, true, 'Tile Layer 1');




//starts Timer loop in updateTimer function
  timerEvents = game.time.events.loop(1000, updateTimer, timer)


  //sets original conditions starts physics boundries and gravity
  // game.world.setBounds(0, 0, 800, 300);
  // game.stage.backgroundColor = '#124184';

  game.physics.arcade.gravity.y = 650;


  //adds player and player animations
  player = game.add.sprite(100, 250, 'mummy', 10);
  player.anchor.setTo(0.5, 0.5)
  player.scale.setTo(0.8, 0.8)



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
  // bb = game.add.image(0, 0,800, 300, "background");






  //bb.fixedToCamera = true;


  //Counter text
  text = game.add.text(game.world.centerX, game.world.centerY, 'Counter: 0', { font: "64px Arial", fill: "#ffffff", align: "center" });
  text.anchor.setTo(0.5, 0.5);
  text.alpha = 0


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
  menus = game.add.sprite(200, 200,  'menu')
  // menus.anchor.setTo(3.2, 1.1);

  menus.alpha = 0
  menus.fixedToCamera= true;
    game.world.bringToTop(menus)


  //adds ground to skate on
  ground = game.add.sprite(0, 485, 'ground');
  ground2 = game.add.sprite(2000, 520, 'ground', 3);
  ground3 = game.add.sprite(4000, 520, 'ground', 3);
  grounder = game.add.sprite(6000, 520, 'ground', 3);
  ground4 = game.add.sprite(8000, 520, 'ground', 3);
  ground5 = game.add.sprite(10000, 520, 'ground', 3);



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
  game.physics.arcade.enable([player, layer3, ground, ground2, ground3, ground4, grounder, bb]);
  // game.slopes.enable(player);
  ground.body.allowGravity = false;//first platform
  ground.body.immovable = true;
  ground2.body.allowGravity = false;//first platform
  ground2.body.immovable = true;
  ground3.body.allowGravity = false;//first platform
  ground3.body.immovable = true;
  grounder.body.allowGravity = false;//second platform
  grounder.body.immovable = true;
  ground4.body.allowGravity = false;//second platform
  ground4.body.immovable = true;
   bb.body.allowGravity = false;//second platform
  bb.body.immovable = true;
  grounder.body.checkCollision.down = false;

  // ground.visible= false
  // ground2.visible= false
  // ground4.visible= false
  // ground3.visible= false
  // grounder.visible= false





  //sets z-index of all objects
  game.world.bringToTop(points)
  game.world.bringToTop(lives)
  game.world.bringToTop(timenumber)
  game.world.bringToTop(pauseText)
  game.world.bringToTop(player)
    game.world.bringToTop(trickText)
      game.world.bringToTop(ll)
  game.world.bringToTop(menus)



  //handles pause button event//
  ////////////////////////////////////////////////////////
  pauseText.events.onInputUp.add(function(){


    //sets opacity enables visibility of menu
    menus.alpha = 1;
    //sets background color so stage behind menu looks greyed out
    game.stage.backgroundColor = '##000000';

    //sets opacity down on all stage lements//
    bb.alpha = 0.5;
    ll.alpha = 0.5;
    player.alpha = 0.5;
    pointtext.alpha =0.5;
    ground.alpha = 0.5;
    grounder.alpha = 0.5;
    text.alpha =0.5;
    graphics.alpha =0;
    //////////////////////////

    //pauses game
    game.paused = true;


    })

    //handles unpausing button event/////
    game.input.onDown.add(unpaws)

  function unpaws(event){

    function work(x){
        game.paused = false;
         game.state.start(x)
    }

    //checks if games paused then listens to location of click
    if(game.paused && menus.alpha == 1){

      if(event.x > 283 && event.x < 523){
          if(event.y > 250 && event.y < 304){

               menus.alpha = 0
        bb.alpha = 1;
        player.alpha = 1;
        pointtext.alpha =1;
        ground.alpha = 1;
        grounder.alpha = 1;
        text.alpha =1;
        graphics.alpha =1;
        ll.alpha = 0;
        game.paused = false;


          }
          else if(event.y > 324 && event.y < 378){
                        work('play')

               // game.state.start('play')
          }
          else if(event.y > 400 && event.y < 451){
                        work('mainmenu')



          }
          else {
            //if click outside menu items but in menu unpause
            menus.alpha = 0
            ll.alpha = 0;
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
        ll.alpha = 0;
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
  // bb.body.x -=1
  ground.body.x -=3

  ground2.body.x -=3
  ground3.body.x -=3
  ground4.body.x -=3
  grounder.body.x -=3
  player.x +=3


  //listens for colision between both platforms and player
  game.physics.arcade.collide(ground, player,);
  game.physics.arcade.collide(ground2, player,);
  game.physics.arcade.collide(ground3, player,);
  game.physics.arcade.collide(grounder, player,);
  game.physics.arcade.collide(ground4, player,);
  game.physics.arcade.collide(layer3, player,);


  //listens for release of spacebar after olliebar charges
  game.input.keyboard.onUpCallback = function( e ){
    if(e.keyCode == Phaser.Keyboard.SPACEBAR){
      var countertoVeloc = -counter * 7 + person.currentBoard.pop

      if(player.body.velocity.y == 0){

        if(countertoVeloc < -400){
          countertoVeloc =-400 + person.currentBoard.pop}

        else if(countertoVeloc < -320 + person.currentBoard.pop && countertoVeloc > -400 + person.currentBoard.pop){
          countertoVeloc = -500 + person.currentBoard.pop;
          var graphics = game.add.graphics();
          graphics.beginFill('0xFF4FF2',1)
          graphics.drawRect(cent + 1,531,298,20,50);
          graphics.beginFill(0xFF4FF2,1)
          graphics.endFill()
          graphics.fixedToCamera = true;
          game.world.bringToTop(graphics)
            setTimeout(() => {graphics.clear()},500)}

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

    if(cursors.up.isDown && cursors.left.isDown && player.body.velocity.y !== 0|| cursors.up.isDown && cursors.right.isDown && player.body.velocity.y !== 0){
      treyflip()
    }

    else if(cursors.right.isDown && player.body.velocity.y !== 0){
      kickflip()
    }

    else if(cursors.left.isDown && player.body.velocity.y !== 0){
      kickflip()
    }
  }
}


// if(cursors.up.isDown && cursors.left.isDown && player.body.velocity.y !== 0|| cursors.up.isDown && cursors.right.isDown && player.body.velocity.y !== 0){
// treyflip()
// }


function kickflip(){
        player.animations.play('kick', person.currentBoard.flip , false)
      trickText.setText('kickflip \uFF0B 100');
      points+= 100;
      pointtext.setText('points: ' + points);
        setTimeout(() => {trickText.setText(' ')},1200);
        player.events.onAnimationComplete.add(function(){
           player.animations.play('crouch', 10, true)
        })
    }


function treyflip(){
  player.animations.play('trey', person.currentBoard.flip, false)
  trickText.setText('360 flip \uFF0B 200');
  points+= 200;
  pointtext.setText('points: ' + points)
    setTimeout(() => {trickText.setText(' ')},1200)
    player.events.onAnimationComplete.add(function(){
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
    player.x -= person.currentBoard.speed;
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
    player.x += person.currentBoard.speed;
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


game.paused = true;
   var gameoverMenu = game.add.sprite(200, 200,  'gameover')
   game.time.events.remove(timerEvents)
  // gameoverMenu.anchor.setTo(0.1, -0.1);
  game.world.bringToTop(ll)
  ll.alpha = 0.5;
  game.world.bringToTop(gameoverMenu)
  gameoverMenu.fixedToCamera = true;
  game.input.onDown.add(choose)
    function choose(event){

      //checks for click in entire menu
      if(event.x > 283 && event.x < 523){
        //checks for click in first button
        if(event.y > 324 && event.y < 378){
          game.paused = false;
          game.state.start('play')
        }
        //checls for click in second button
        else if(event.y > 400 && event.y < 451){
          game.paused = false;
          game.state.start('mainmenu')
        } else {
          ll.alpha = 0.5;
          game.paused = true;
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
  player.angle -= person.currentBoard.spin
  if(fireButton.isDown){
    player.animations.play('backflip', 10, false)
    player.angle -= person.currentBoard.spin + 3
  }
}

//allows for rotating sprite for backflip
if(cursors.right.isDown && player.body.velocity.y !== 0){
  player.angle += person.currentBoard.spin
  if(fireButton.isDown){
    player.animations.play('backflip', 10, false)
    player.angle += person.currentBoard.spin + 3
  }
}


function falling(){
    player.animations.play('fall', 10, false)
      livesgroup.children[0].destroy()
      player.events.onAnimationComplete.add(function(){

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

//for landing animation
// if(player.body.touching.down){
//  alert('hello')
// }



//handles falling off map
if(player.body.y > 1000){
  player.animations.play('fall', 10, false)
  livesgroup.children[0].destroy()
  game.state.start('play')
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
   falling()
}


if(player.body.velocity.y !== 0){
game.add.tween(bb.scale).to( {x: 0.43, y: 0.43}, 500, Phaser.Easing.Linear.None, true);
} else if(player.body.velocity.y == 0){
  game.add.tween(bb.scale).to( {x: 0.5, y: 0.5}, 500, Phaser.Easing.Linear.None, true);

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




