

var menuState = {

  preload: function (){
    game.load.image('mainmenuBg', 'assets/blue.png')
    game.load.image('menuItem1', 'assets/start.png')
    game.load.image('menuItem2', 'assets/controls.png')
    game.load.image('menuItem3', 'assets/about.png')
    game.load.spritesheet('playerSheet', 'assets/wave.png', 400, 700);

  },
  create: function(){
    game.add.sprite(0, 0, 'mainmenuBg')
    var mn1 = game.add.sprite(20, 75, 'menuItem1')
    var mn2 = game.add.sprite(40, 200, 'menuItem2')
    var mn3 = game.add.sprite(60, 325, 'menuItem3')
    var mainPlayer = game.add.sprite(400, 0, 'playerSheet')
    mainPlayer.animations.add('wave', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
    mainPlayer.animations.play('wave', 10, true)

mn1.inputEnabled = true
mn2.inputEnabled = true
mn3.inputEnabled = true


mn1.scale.setTo(0.7,0.7);
mn2.scale.setTo(0.7,0.7);
mn3.scale.setTo(0.7,0.7);

mn1.events.onInputOver.add(function(){
  game.add.tween(mn1.scale).to( { x: 0.72, y: 0.72 }, 150, Phaser.Easing.Linear.None, true);
  var phaserm = new Tone.Phaser({
  "frequency" : 1,
  "octaves" : 9,
  "baseFrequency" :1000
}).toMaster();
var synth = new Tone.DuoSynth().connect(phaserm);
synth.triggerAttackRelease("E5", "8n");
})
mn1.events.onInputOut.add(function(){
  game.add.tween(mn1.scale).to( { x: 0.7, y: 0.7 }, 150, Phaser.Easing.Linear.None, true);
})

mn2.events.onInputOver.add(function(){
  game.add.tween(mn2.scale).to( { x: 0.72, y: 0.72 }, 150, Phaser.Easing.Linear.None, true);
    var phaserm = new Tone.Phaser({
  "frequency" : 1,
  "octaves" : 4,
  "baseFrequency" :1000
}).toMaster();
var synth = new Tone.DuoSynth().connect(phaserm);
synth.triggerAttackRelease("G4", "8n");
})
mn2.events.onInputOut.add(function(){
  game.add.tween(mn2.scale).to( { x: 0.7, y: 0.7 }, 150, Phaser.Easing.Linear.None, true);
})

mn3.events.onInputOver.add(function(){
  game.add.tween(mn3.scale).to( { x: 0.72, y: 0.72 }, 150, Phaser.Easing.Linear.None, true);
    var phaserm = new Tone.Phaser({
  "frequency" : 1,
  "octaves" : 2,
  "baseFrequency" :1000
}).toMaster();
var synth = new Tone.DuoSynth().connect(phaserm);
synth.triggerAttackRelease("D3", "8n");
})
mn3.events.onInputOut.add(function(){
  game.add.tween(mn3.scale).to( { x: 0.7, y: 0.7 }, 150, Phaser.Easing.Linear.None, true);
})

mn1.events.onInputUp.add(function(){
  game.state.start('second')
})

mn2.events.onInputUp.add(function(){
  game.state.start('controls')
})



  }


}

var a = 0



var secondState = {

  preload: function (){
    game.load.image('mainBG', 'assets/green3.jpg')
    game.load.image('selected', 'assets/selected.png')
    game.load.image('locked', 'assets/locked.png')
    game.load.image('clearBG', 'assets/skateboardA/BG1.png')
    game.load.image('statsA', 'assets/skateboardA/StatsA.png')
    game.load.image('statsB', 'assets/skateboardA/StatsB.png')
    game.load.image('statsC', 'assets/skateboardA/StatsC.png')
    game.load.image('nextA', 'assets/skateboardA/skateboardANext.png')
    game.load.image('contA', 'assets/skateboardA/skateboardAPrev.png')
    game.load.image('cost', 'assets/skateboardA/costSkateboardA.png')
    game.load.image('costC', 'assets/costSkateboardB.png')
    game.load.spritesheet('firstSpin', 'assets/skateboardA/SkateboardASpin.png', 250, 450)
    game.load.spritesheet('secondSpin', 'assets/skateboardA/SkateboardBSpin.png', 250, 450)
    game.load.spritesheet('thirdSpin', 'assets/skateboardA/SkateboardCSpin.png', 250, 450)
    game.load.image('rewind', 'assets/rewind.png')
    game.load.image('play', 'assets/play.png')
    game.load.image('buybutton', 'assets/skateboardA/BuySkateboard1.png')
    game.load.image('coin', 'assets/coin.png')

  },
  create: function(){


     var monies = game.add.text(680, 10, '$'+person.money ,{ font: "24px Arial", fill: "#fffff", align: "center" });
     monies.font = 'Just Me Again Down Here';



     var coin = game.add.sprite(613, 3, 'coin')
     coin.scale.setTo(0.7, 0.7)





    var round = game.add.sprite(0, 0, 'selected')
    round.alpha = 0.7
    var mainback = game.add.sprite(0, 0, 'mainBG')
    var locked = game.add.sprite(0, 0, 'locked')
    var bg = game.add.sprite(0, 0, 'clearBG')
    var statA = game.add.sprite(0, 0, 'statsA')
    var board = game.add.sprite(100, 50, 'firstSpin')
      var buy = game.add.sprite(200, 500, 'cost')




    var bg2 = game.add.sprite(-800, 0, 'clearBG')
    var locked2 = game.add.sprite(-800, 0, 'locked')
    var statA2 = game.add.sprite(-800, 0, 'statsB')
    var board2 = game.add.sprite(-700, 50, 'secondSpin')
        var buy2 = game.add.sprite(-800, 500, 'cost')



    var bg3 = game.add.sprite(-1600, 0, 'clearBG')
    var locked3 = game.add.sprite(-1600, 0, 'locked')
    var statA3 = game.add.sprite(-1600, 0, 'statsC')
    var board3 = game.add.sprite(-1600, 50, 'thirdSpin')
        var buy3 = game.add.sprite(-1600, 500, 'costC')



      var next = game.add.sprite(50, 200, 'contA')
    var contin = game.add.sprite(670, 200, 'nextA')


      game.world.bringToTop(locked)
      game.world.bringToTop(locked2)
      game.world.bringToTop(locked3)
      game.world.bringToTop(buy)
      game.world.bringToTop(buy2)
      game.world.bringToTop(buy3)

           game.world.bringToTop(monies)
           game.world.bringToTop(coin)



    buy.inputEnabled= true;
    buy2.inputEnabled= true;
    buy3.inputEnabled= true;

    board.animations.add('spin', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23])
    board.animations.play('spin', 15, true)


    board2.animations.add('spin', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23])
    board2.animations.play('spin', 15, true)


    board3.animations.add('spin', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23])
    board3.animations.play('spin', 15, true)



    next.inputEnabled = true;
    contin.inputEnabled = true;


buy.events.onInputUp.add(function(){

  if(person.money > skateboardA.cost){
    person.money= person.money-skateboardA.cost
    person.skateboards.push(skateboardA)
    buy.destroy()
    updateBoard()
    monies.setText('$'+person.money)

  }
})


buy2.events.onInputUp.add(function(){

  if(person.money > skateboardB.cost){
    person.money= person.money-skateboardB.cost
    person.skateboards.push(skateboardB)
    buy2.destroy()
    updateBoard()
    monies.setText('$'+person.money)


  }
})


buy3.events.onInputUp.add(function(){

  if(person.money > skateboardC.cost){
    person.money= person.money-skateboardC.cost
    person.skateboards.push(skateboardC)
    buy3.destroy()
    updateBoard()
       monies.setText('$'+person.money)

  }
})



board.events.onInputUp.add(function(){
  if(person.skateboards.includes(skateboardA)){
    game.world.bringToTop(round)
    game.world.bringToTop(board)
    next.inputEnabled = false;
    contin.inputEnabled = false
    board.inputEnabled = false
    rewinder = game.add.sprite(300, 470, 'rewind')
    plays = game.add.sprite(500, 470, 'play')
    plays.scale.setTo(1.2, 1.2)
    rewinder.scale.setTo(1.2, 1.2)
    plays.inputEnabled = true;
    rewinder.inputEnabled = true;

    plays.events.onInputUp.add(function(){
          person.currentBoard =skateboardA

  game.state.start('play')

})
rewinder.events.onInputUp.add(function(){
  game.world.sendToBack(round)
  next.inputEnabled = true;
  contin.inputEnabled = true;
  board.inputEnabled = true
  plays.destroy()
  rewinder.destroy()

})


  }
})

board2.events.onInputUp.add(function(){
  if(person.skateboards.includes(skateboardB)){
    game.world.bringToTop(round)
    game.world.bringToTop(board2)
    next.inputEnabled = false;
    contin.inputEnabled = false
    board2.inputEnabled = false
        rewinder = game.add.sprite(300, 470, 'rewind')
    plays = game.add.sprite(500, 470, 'play')
    plays.scale.setTo(1.2, 1.2)
    rewinder.scale.setTo(1.2, 1.2)
    plays.inputEnabled = true;
    rewinder.inputEnabled = true;

    plays.events.onInputUp.add(function(){
    person.currentBoard =skateboardB
  game.state.start('play')

})
rewinder.events.onInputUp.add(function(){
  game.world.sendToBack(round)
  board2.inputEnabled = true
  next.inputEnabled = true;
  contin.inputEnabled = true;
  plays.destroy()
  rewinder.destroy()

})
  }
})

board3.events.onInputUp.add(function(){
  if(person.skateboards.includes(skateboardC)){

    game.world.bringToTop(round)
    game.world.bringToTop(board3)
    next.inputEnabled = false;
    contin.inputEnabled = false;
    board3.inputEnabled = false
        rewinder = game.add.sprite(300, 470, 'rewind')
    plays = game.add.sprite(500, 470, 'play')
    plays.scale.setTo(1.2, 1.2)
    rewinder.scale.setTo(1.2, 1.2)
    plays.inputEnabled = true;
    rewinder.inputEnabled = true;

    plays.events.onInputUp.add(function(){
        person.currentBoard =skateboardC
  game.state.start('play')

})
rewinder.events.onInputUp.add(function(){
  game.world.sendToBack(round)
  next.inputEnabled = true;
  contin.inputEnabled = true;
  board3.inputEnabled = true
  plays.destroy()
  rewinder.destroy()

})
  }
})








    board.events.onInputOver.add(function(){
      game.add.tween(board.scale).to( {x: 1.3, y: 1.3}, 150, Phaser.Easing.Linear.In, true);

})
    board.events.onInputOut.add(function(){
      game.add.tween(board.scale).to( {x: 1, y: 1}, 150, Phaser.Easing.Linear.In, true);

})
    board2.events.onInputOver.add(function(){
      game.add.tween(board2.scale).to( {x: 1.3, y: 1.3}, 150, Phaser.Easing.Linear.In, true);

})
    board2.events.onInputOut.add(function(){
      game.add.tween(board2.scale).to( {x: 1, y: 1}, 150, Phaser.Easing.Linear.In, true);

})
    board3.events.onInputOver.add(function(){
      game.add.tween(board3.scale).to( {x: 1.3, y: 1.3}, 150, Phaser.Easing.Linear.In, true);

})
    board3.events.onInputOut.add(function(){
      game.add.tween(board3.scale).to( {x: 1, y: 1}, 150, Phaser.Easing.Linear.In, true);

})

      next.events.onInputOver.add(function(){
      game.add.tween(next.scale).to( {x: 1.3, y: 1.3}, 150, Phaser.Easing.Linear.In, true);

})
    next.events.onInputOut.add(function(){
      game.add.tween(next.scale).to( {x: 1, y: 1}, 150, Phaser.Easing.Linear.In, true);

})
          contin.events.onInputOver.add(function(){
      game.add.tween(contin.scale).to( {x: 1.3, y: 1.3}, 150, Phaser.Easing.Linear.In, true);

})
    contin.events.onInputOut.add(function(){
      game.add.tween(contin.scale).to( {x: 1, y: 1}, 150, Phaser.Easing.Linear.In, true);

})


    next.events.onInputUp.add(function(){
   a++
   if(a == 3){
    a = 0;
   }

if(a == 1){
 game.add.tween(board).to({x: +800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(statA).to({x: +800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(bg).to({x: +800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(locked).to({x: +800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(buy).to({x: +800}, 400, Phaser.Easing.Linear.In, true)

 game.add.tween(board2).to({x: +100}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(statA2).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(bg2).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(locked2).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(buy2).to({x: +200}, 400, Phaser.Easing.Linear.In, true)

 board3.x = -800
statA3.x = -800
bg3.x = -900
locked3.x = -900
buy3.x = -900

} else if(a == 2){

board.x = -800
statA.x = -800
bg.x = -900
locked.x = -900
buy.x = -900

 game.add.tween(board2).to({x: +900}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(statA2).to({x: +800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(bg2).to({x: +800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(locked2).to({x: +800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(buy2).to({x: +800}, 400, Phaser.Easing.Linear.In, true)


 game.add.tween(board3).to({x: +100}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(statA3).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(bg3).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(locked3).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(buy3).to({x: +200}, 400, Phaser.Easing.Linear.In, true)

} else if(a ==0){
   game.add.tween(board).to({x: +100}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(statA).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(bg).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(locked).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(buy).to({x: +200}, 400, Phaser.Easing.Linear.In, true)

board2.x = -800
statA2.x = -800
bg2.x = -900
locked2.x = -900
buy2.x = -900

 game.add.tween(board3).to({x: +900}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(statA3).to({x: +800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(bg3).to({x: +800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(locked3).to({x: +800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(buy3).to({x: +800}, 400, Phaser.Easing.Linear.In, true)


}


})


    contin.events.onInputUp.add(function(){
   a--
   if(a == -3){
    a = 0;
   }

if(a == -1){
 game.add.tween(board).to({x: -800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(statA).to({x: -800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(bg).to({x: -800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(locked).to({x: -800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(buy).to({x: -800}, 400, Phaser.Easing.Linear.In, true)

 game.add.tween(board2).to({x: +100}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(statA2).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(bg2).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(locked2).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(buy2).to({x: +200}, 400, Phaser.Easing.Linear.In, true)

 board3.x = +800
statA3.x = +800
bg3.x = +900
locked3.x = +900
buy3.x = +900

} else if(a == -2){

board.x = +800
statA.x = +800
bg.x = +900
locked.x = +900
buy.x = +900

 game.add.tween(board2).to({x: -900}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(statA2).to({x: -800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(bg2).to({x: -800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(locked2).to({x: -800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(buy2).to({x: -800}, 400, Phaser.Easing.Linear.In, true)

 game.add.tween(board3).to({x: +100}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(statA3).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(bg3).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(locked3).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(buy3).to({x: +200}, 400, Phaser.Easing.Linear.In, true)

} else if(a ==0){
   game.add.tween(board).to({x: +100}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(statA).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(bg).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(locked).to({x: +0}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(buy).to({x: +200}, 400, Phaser.Easing.Linear.In, true)

board2.x = +800
statA2.x = +800
bg2.x = +900
locked2.x = +900
buy2.x = +900

 game.add.tween(board3).to({x: -900}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(statA3).to({x: -800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(bg3).to({x: -800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(locked3).to({x: -800}, 400, Phaser.Easing.Linear.In, true)
 game.add.tween(buy3).to({x: -800}, 400, Phaser.Easing.Linear.In, true)


}


})
 function updateBoard(){
        if(person.skateboards.includes(skateboardA)){
        locked.alpha = 0
        board.inputEnabled = true
        buy.destroy()
      }
      if(person.skateboards.includes(skateboardB)){
        locked2.alpha = 0
        board2.inputEnabled = true
        buy2.destroy()
      }
      if (person.skateboards.includes(skateboardC)){
        locked3.alpha = 0
        board3.inputEnabled = true
        buy3.destroy()
      }
}
updateBoard()



  }
}




var controllerState = {

  preload: function (){
    game.load.image('mainBGC', 'assets/green3.jpg')

    game.load.image('controlList', 'assets/controlpage.png')


  },
  create: function(){

     var monies = game.add.text(680, 10, '$'+person.money ,{ font: "24px Arial", fill: "#fffff", align: "center" });
     monies.font = 'Just Me Again Down Here';



     var coin = game.add.sprite(613, 3, 'coin')
     coin.scale.setTo(0.7, 0.7)






    var mainback = game.add.sprite(0, 0, 'mainBGC')
    var locked = game.add.sprite(0, 0, 'controlList')

    }
}
