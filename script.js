function preload() {
  // photo = loadImage("Assets/Background/photo.png")
  // tree = loadImage("Assets/Background/tree.png")
  doc = loadImage("Assets/Background/Background2.jpeg")
  CharaWalk = loadImage("Assets/MC/RightWalk.gif")
  CharaStand = loadImage("Assets/MC/CharaStand.png")
  StandLeft = loadImage("Assets/MC/StandLeft.png")
  WalkLeft = loadImage("Assets/MC/LeftWalk.gif")
  BackLook = loadImage("Assets/MC/LookBack.png")
  Shadow = loadImage("Assets/MC/Shadow.png")

  //bg characters and items
  BowBoy = loadImage("Assets/Bgcharacters/BowBoy.png")

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

  
  if(tick === 1){
    tick = 0
    i = 0
    action = " "
    action2 = " "
    action3 = " "
  }
  if(gamePlay === "action"){
  console.log(mouseX.toFixed(0) + "   " + mouseY.toFixed(0))
  check()
  console.log(screenSector + " " + actionChoice + " " + actionOrder)

  if (actionOrder === 0) {
    if (screenSector == "actionGrid") {
      actionOrder = 1
      actionSeg1 = actionSeg0

    }
  }
  else if(actionOrder === 1){
    if(screenSector === "playworld"){
        if (actionChoice === "Use") {
          if(itemChoice === "door knocker"){
            actionValid = true
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
          if(itemChoice !== " "){
            actionValid = true
            doAct = true
            action = "note"
          }
        }
        else if (actionChoice === "Close") {
          if(itemChoice !== " "){
            walkTo = true
            doAct = true
            action = "note"
          }
        }
        else if (actionChoice === "Give") {
          
        }
        else if (actionChoice === "Talk to"){
          if(itemChoice === " short pirate" || itemChoice === " fancy-looking pirate"){
            actionValid = true
            doAct = true
            action = "chat"
          }
    }
        else if(actionChoice === "Pull"){
      if(itemChoice !== " "){
            actionValid = true
            doAct = true
            action = "note"
          }
    }
        else if(actionChoice === "Look at"){
      if(itemChoice !== " "){
            actionValid = true
            doAct = true
            action = "note"
          }
    }
        else if(actionChoice === "Pick up"){
      if(itemChoice !== " "){
        actionValid = true
        if(itemChoice === "doorKnocker" && !knockerOn){
          
        }
        else{
          action = "note"
        }
      }
    }
  }
      else{
    actionValid = false
  }
      if(actionValid){
        walkTo = true
      }
    }
    else if(playworld === "inventory"){
      if(actionValid){
        
      }
    }
  }
  
  if (walkTo) {
          if(itemChoice === " short pirate" && actionChoice === "Walk to"){
          doAct = true
          action = " "
          action2 = " "
          action3 = "BowBoy chat"
        }

    playerDestX = mouseX
        //for how far on the screen she can go
        if (playerDestX >= backX + 2100) {
          playerDestX = backX + 2100
        }
        else if (playerDestX <= backX + 100) {
          playerDestX = backX + 100
        }
        //for when certain triggers occur

        globalDestX = playerDestX - backX;
      }

       
   if(!actionValid){
        actionOrder = 0
        actionChoice = "Walk to"
     
      }
  
  // if (mouseX <= backX + 250) {
  //   actionSeg2 = " caution tape"
  // }
  
  else if(gamePlay === "chat"){
    
  }
  else if(gamePlay === "cutscene"){
      
  }
  else if(gamePlay === "menu"){
    
  }
}

function keyPressed() {
  if (gamePlay === "action") {
    if (actionOrder === 0) {
      checkKey()
      if (keyChoice !== "empty") {
        actionSeg0 = keyChoice
        actionOrder = 1
        actionSeg1 = actionSeg0
      }
    }
    else if(key = "b"){
      actionOrder = 0
    }
  }
}

function draw() {

  console.log(doAct + action + action2 + action3)
  
  var timeElapsed = millis() - endTime;
    if (timeElapsed > 1000) {
    console.log(i + " " + tick);
      endTime = millis()
if(tick >= 1){
  i++;
}
    }
  
  check()
  checkKey()
  blockOut()
  scene()
  interact()
  // lines()
  rectMode(CORNER)
  fill("red")
  rect(backX + 1160, Y / 6, 200, Y /3)
  character()

  globalPosX = playerX - backX;
  // console.log(globalPosX + ", " + globalDestX + ", " + playerX + ", " + actionValid);

    if (playerDestX - playerX > 0) direction = 1;
    if (playerDestX - playerX < 0) direction = -1;

    if(actionValid){
      actionDo = true
    }
  
  if (dist(playerX, 0, playerDestX, 0) > 10 && dist(globalDestX, 0, globalPosX, 0) > 10) {
    
  if(walkTo){
    
    //situtation where we move the player
    if (playerX >= 530 && playerX <= width - 530) {
      playerX += playerSpeed * direction;
    }
      
     else if (playerX <= 530 && backX < -10 && direction < 0) {
      backX += -1 * playerSpeed * direction
    }
      
    else if (playerX >= 570 && backX > -1200 && direction > 0) {
      backX += -1 * playerSpeed * direction
    }
      
    else {
      playerX += playerSpeed * direction;
    }
    
  }
  }
  else {
    actionDo = false
    if(doAct){      
      if(tick === 0){
        tick = 1 
    if(action3 === "BowBoy chat"){
      if(i > 4){
        reset()
        }
      }
    if(action === "note"){
      if(i >= 5){
       reset() 
      }
    }
  }

  }
    if(actionChoice === "Talk to" && actionOrder >1 ){
      gamePlay = "chat"
      if(itemChoice === " fancy-looking pirate"){
        chatTo = "capitan"
      }
      else if(itemChoice === " short pirate"){
        chatTo = "BowBoy"
      }
    }

  }

  

          
          
CharaTalk()
othersTalk()

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

