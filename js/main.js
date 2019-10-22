var game = new Phaser.Game(800, 750, Phaser.CANVAS, 'phaser-example');


////Global Variables for PlayState////
////////////////////////////////////////////////////////////////////

//counter used for ollieBar


var loOne;



  // cost: 100,
  // pop: -10,//velocity
  // speed: 10,
  // flip: 10, //animation speed
  // spin: 0.1


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
var cans2;
var road;
var map;
var backgroundlayer
var groundLayer
var road;
var layer3;
var player;


//three kinds of skateboard objects
var skateboardA = {
  cost: 0,
  pop: -50,//velocity
  speed: 10,
  flip: 10, //animation speed
  spin: 0.1
}
var skateboardB = {
  cost: 5000,
  pop: -20,//velocity
  speed: 8,
  flip: 12, //animation speed
  spin: 0.2
}
var skateboardC = {
  cost: 8000,
  pop: -30,//velocity
  speed: 15,
  flip: 7, //animation speed
  spin: 0.4
}

var person = {
  money: 10000,
  skateboards: [skateboardA],
  currentBoard: skateboardA

}


var skateboard1 = loOne


/////////////////////////////////////////////
///////End of global variables////////



  game.state.add('mainmenu', menuState);
  game.state.add('second', secondState);
  game.state.add('controls', controllerState);
  game.state.add('play', playState);
  game.state.add('play2', playState2);
  game.state.start('mainmenu')



//things to tighten up tomorrow/////////////////////////
//score multiplyer
//fall off platform
//remove input on fall
//tweak specs to feel more comfortable
//keep time from going into negatives
//get rid of first frame of sprite
//see if tricks are to high to notice if not on ground




