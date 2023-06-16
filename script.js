function preload() {
  // photo = loadImage("Assets/Background/photo.png")
  // tree = loadImage("Assets/Background/tree.png")
  doc = loadImage("Assets/Background/Background2.jpeg")
  Men = loadImage("Assets/Background/StartMen1.png")
  MenuCheck = loadImage("Assets/Background/StartMenCheck.png")
  KnockerUp = loadImage("Assets/Background/knockerUp.png")
  Falling = loadImage("Assets/Background/Falling.gif")
  Knocker = loadImage("Assets/Background/Knocker.png")
  CharaWalk = loadImage("Assets/MC/RightWalk.gif")
  CharaStand = loadImage("Assets/MC/CharaStand.png")
  StandLeft = loadImage("Assets/MC/StandLeft.png")
  WalkLeft = loadImage("Assets/MC/LeftWalk.gif")
  BackLook = loadImage("Assets/MC/LookBack.png")
  Shadow = loadImage("Assets/MC/Shadow.png")

  //bg characters and items
  BowBoy = loadImage("Assets/Bgcharacters/BowBoy.png")
  capitan = loadImage("Assets/Bgcharacters/Capitan.png")
  kapitanBang = loadImage("Assets/Bgcharacters/CapitanBang.gif")
  pile = loadImage("Assets/Bgcharacters/Capitanjack.png")
  groundHat = loadImage("Assets/Bgcharacters/Hat.png")
  strangeBug = 
    loadImage("Assets/Bgcharacters/Bug.png")

  Hatvent = loadImage("Assets/inventory/Hatinvent.png")
  Knockvent = loadImage("Assets/inventory/Knockinvent.png")

  bgSong = loadSound("Assets/Background/BGsong.mp3");
}

function setup() {
  createCanvas(X, Y)
  Img = doc
  actionChoice = "Walk to"
  actionSeg1 = actionChoice
  Chara = CharaStand
  BowBoyPose = BowBoy
}


function mouseClicked() {
  if(!bgSong.isPlaying()){
    bgSong.play()
  }
  console.log(mouseX + " " + mouseY)
  
    if(gamePlay === "menu"){
    if(mouseX >= 235 && mouseX <= 435 && mouseY >= 600 && mouseY <= 725){
      tick = 2
    }
    }
  else if(gamePlay === "action"){
    if(tick === 1){
      rese()
    }
    console.log(mouseX.toFixed(0) + "   " + mouseY.toFixed(0))
    check()
    console.log(screenSector + " " + actionChoice + " " + actionOrder)

    if (actionOrder === 0) {
      if (screenSector === "actionGrid") {
        actionOrder = 1
        actionSeg1 = actionSeg0
        actionValid = true
      }
      else if(itemChoice === " short pirate"){
        action3 = "BowBoy chat"
     }
    }
    if (actionOrder === 1){
      if (screenSector === "playworld"){
        if (itemChoice === " "){
          actionOrder = 0
        }
        else if (actionChoice === "Use") {
          if (itemChoice === " door knocker" && knockerOn){
            actionValid = true
              doAct = true
            action = "knock"
          }
            else if(inventChoice === " door knocker"){
              actionSeg2 = itemChoice
              actionOrder = 2
            }
          else{
            actionValid = true
            doAct = true
            action = "note"
          }
        }
        else if (actionChoice === "Push") {
          if(itemChoice !== " "){
            actionValid = true
            doAct = true
            action = "note"
           }
        }
        else if (actionChoice === "Open") {
          actionValid = true
          doAct = true
          action = "note"
        }
        else if (actionChoice === "Close") {
          walkTo = true
          doAct = true
          action = "note"
        }
        else if (actionChoice === "Give" && inventchoice !== " ") {
          actionOrder = 2
          actionSeg2 = inventChoice
        }
        else if (actionChoice === "Talk to"){
          if(   itemChoice === " short pirate"){
            actionValid = true
            doAct = true
            action = "chat"
          }
          else if(itemChoice === " fancy-looking pirate"){
            actionValid = true
            doAct = true
            action = "note"
          }
          else{
           actionValid = true
            doAct = true
            action = "note"
          }
        }
        else if (actionChoice === "Pull"){
          actionValid = true
          doAct = true
          action = "note"
        }
        else if(actionChoice === "Look at"){
          actionValid = true
          doAct = true
          action = "note"
        }
        else if(actionChoice === "Pick up"){
          actionValid = true
          doAct = true
          if(   itemChoice === "doorKnocker" 
             && !knockerOn){
            action = "knockpick"
          } 
          else{
            action = "note"
          }
        }
      }
      else {
        actionValid = false
      }
        if(actionValid){
          walkTo = true
      }
    } 
      else if(actionOrder === 2){
        
      }
    else if (screenSector === "inventory") {
        if(actionValid){
        
      }
    }
  }
  
  if (walkTo) {

    playerDestX = mouseX
    //for how far on the screen she can go
    if (playerDestX >= backX + 2100) {
      playerDestX = backX + 2100
    } else if (playerDestX <= backX + 100) {
        playerDestX = backX + 100
    }
    //for when certain triggers occur
    globalDestX = playerDestX - backX;
  }

       
   // if(!actionValid){
   //      actionOrder = 0
   //      actionChoice = "Walk to"
     
   //    }
  
  // if (mouseX <= backX + 250) {
  //   actionSeg2 = " caution tape"
  // }
  
  else if(gamePlay === "chat"){    
  }
  else if(gamePlay === "cutscene"){   
  }
note = itemChoice
}

function keyPressed() {
  if (gamePlay === "action") {
    if (actionOrder === 0) {
      checkKey()
      if (keyChoice !== "empty") {
        actionSeg0 = keyChoice
        actionOrder = 1
        actionSeg1 = actionSeg0
        actionChoice = keyChoice
      }
    }
    else if(key = "b"){
      actionOrder = 0
    }
  }
}

function draw() {

  console.log(tick + " " + i)
  
  var timeElapsed = millis() - endTime;
  if (timeElapsed > 1000) {
    console.log(i + " " + tick);
    endTime = millis();
    if(tick >= 1){
      i++;
    }
  }
  
  check()
  checkKey()
  if(gamePlay === "menu"){
    startMen()
    if(tick === 2){
      if( i <= 1){
        fill("#d0bdaf")
        stroke("#6796b0")
        circle(305, 650, 100)
      } else {
        gamePlay = "cutscene"
        i = 0
      }
    }
  } 
  else if(gamePlay === "cutscene"){
    if(knockerOn){
    playerX = backX + 2100
    playerDestX = backX + 1700
    blockOut()
    scene()
    interact()
    // lines()
    character()
    textSize(50)
    fill("pink")
    stroke("red")
    textAlign(CENTER)
    if ( i < 2){
      text("Hey!", backX+2280, Y / 5)
    } else if(i  < 4){
      text("We dont's leaves 'till Captain comes back!        mememememememme ."
           , backX + 2300, Y/5)
    }
      }
    else {
      gamePlay = "action"
      i = 0
      tick = 0
    } 
  }
  else {
    blockOut()
    scene()
    interact()
    // lines()
    character()
    globalPosX = playerX - backX;

    if (playerDestX - playerX > 0) direction = 1;
    if (playerDestX - playerX < 0) direction = -1;

    if(actionValid){
      actionDo = true
    }
  
    if (   dist(playerX, 0, playerDestX, 0) > 10 
        && dist(globalDestX, 0, globalPosX, 0) > 10) {
    
  // if(walkTo) {
    
    //situtation where we move the player
    if (   playerX >= 530 
        && playerX <= width - 530) {
      playerX += playerSpeed * direction;
    } else if (   playerX <= 530 
               && backX < -10
               && direction < 0) {
        backX += -1 * playerSpeed * direction
    } else if (   playerX >= 570
               && backX > -1200
               && direction > 0) {
        backX += -1 * playerSpeed * direction
    } else {
      playerX += playerSpeed * direction;
    }
  //}
} 
    else {
    actionDo = false
    if(doAct){
      if(tick === 0){
        tick = 1
        if(action3 === "BowBoy chat"){
          if(i > 4){
            rese()
          }
        }
      if(action === "note"){
        if(i >= 5){
          rese() 
          }
        }
        else if(action === "knock"){
          if(i <2){
            action = "fall"
          }
      }
    }
    if(   actionChoice === "Talk to"
       && actionOrder >1 ){
        gamePlay = "chat"
    }
      }
    }
  CharaTalk()
  othersTalk()
  
}
}

function interact() {
  //area that is on lower portion of screen and what it shows and how it changes

  // center area iwll be arrow keys to scroll up or down in inventory, which is on the left. Selection grid is on the right in 3*3 grid. 
  //black strip spereating parts will have the current function (ex. 'pick up shoe') on it, and will change colour when the player wants to make the action play oiut

  if (showMenu) {
  }
    //this is the interact grid:
    if (gamePlay === "action") {
      actionGrid()
      check()
      actionSeg0 = actionChoice
      actionColour()
      //actionSeg1 should or shouldnt be actionChoice? if actionChoice, that variable changes when mouse hovers over stuff. could fix by having the check function only work if its actionOrder1 and not anything more? 
      //or if its actionOrder0 (make an actionOrder0), change it to actionOrder1 when click and actionSeg1 is set as the current actionChoice. might work, try later
      //if anctionSeg1 isnt actionChoice to begin with, I could set it to actionChoice when click, but then it wont change during gameplay
      if (actionOrder === 0) {
        text(actionSeg0 + itemChoice, Xseg0, seg1_1)

      }
      else if (actionOrder === 1) {
        text(actionSeg1 + itemChoice, Xseg0, seg1_1)
      }
      else if (actionOrder === 2) {
        if (actionChoice === "use") {
          text(actionSeg1 + actionSeg2 + " with" + itemChoice, Xseg0, seg1_1)
        }
        else if (actionChoice === "give") {
          text(actionSeg1 + actionSeg2 + " to" + itemChoice, Xseg0, seg1_1)
        }
      }
      // else if(actionOrder === 3){
      //   if(actionChoice === "use"){
      //     text(actionSeg1 + actionSeg2 + " with" + actionSeg3, Xseg0, seg1_1)
      //   }
      //   else if(actionChoice === "give"){
      //     text(actionSeg1 + actionSeg2 + " to" + actionSeg3, Xseg0, seg1_1)
      //   }
      // }
    }
  
  else if (gamePlay === "chat") {
    if(chatTo === "capitan"){
      
    }
    else if(chatTo === "BowBoy"){
      
    }
    //maybe make a code that changes depending on a variable, which changes depending on the person?
    //find a way to make the dialogue stay around for a bit then change to next dialogue or go to 
    // check who the player is talking to?
    //check which dialogue tree its on?
    // have an option to scroll down on dialogue options
  }
  //strip that seperates menu from game for aesthetics
  stroke("purple")
  strokeWeight(3)
  line(0, seg1, X, seg1)
}
