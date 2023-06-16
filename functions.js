//visual functions

function startMen() {
  Menu = Men
  imageMode(CENTER)
  image(Menu, X / 2, Y / 2, X, Y)
}

function scene() {
  imageMode(CORNER)
  image(Img, backX, 0, X * 1.95, seg1)
  if (action === "fall") {
    knock = Falling
  }
  else if (knockerOn) {
    knock = KnockerUp
  }
  else {
    knock = Knocker
  }
  image(knock, backX, 0, X * 1.95, seg1)
  image(strangeBug, backX + 1500, 180, 50, 50)
}

function blockOut() {
  stroke("black")
  fill("pink")
  rect(0, 0, X, seg2)
  fill("black")
  rect(0, seg1, X, (Y / 5 + Y / 50)) //black mid strip
  rect(0, seg2, X, Y / 4) //black back to menu
  if (gamePlay === "action") {
    fill("gray")
    rect(0, seg2, X / 3, Y / 4) // back to action grid
  }
}

function actionColour() {
  textSize(35)
  textAlign(CENTER)
  if (!actionDo) {
    fill("purple")
    stroke("pink")
  }
  else if (actionDo) {
    fill("lightpurple")
    stroke("pink")
  }
}

function interactColour() {
  textSize(40)
  fill("purple")
  stroke("pink")


}

function lines() {
  stroke("white")
  for (let x = 0; x <= X; x += X / nlines) {
    line(x, 0, x, Y);
  }
  for (let y = 0; y <= Y; y += Y / nlines) {
    line(0, y, X, y);

  }
}

function actionGrid() {
  textAlign(RIGHT)
  interactColour()
  text("Give", Xseg2_1, seg2_1)
  text("Open", Xseg2_1, seg2_2)
  text("Close", Xseg2_1, seg2_3)
  textAlign(CENTER)
  text("Pick Up", Xseg2_2, seg2_1)
  text("Look At", Xseg2_2, seg2_2)
  text("Talk To", Xseg2_2, seg2_3)
  textAlign(LEFT)
  text("Use", Xseg2_3, seg2_1)
  text("Push", Xseg2_3, seg2_2)
  text("Pull", Xseg2_3, seg2_3)

}

function character() {
  imageMode(CENTER)
  image(capitan, backX + 1250, Y / 3, 350, 350)
  Chara = CharaStand
  if (actionDo) {
    if (direction === -1) {
      Chara = WalkLeft
    }
    else if (direction === 1) {
      Chara = CharaWalk
    }
  }
  else if (!actionDo) {
    if (action2 === "look back") {
      if (dist(globalDestX, 0, globalPosX, 0) <= 4) {
        Chara = BackLook
      }
    }
    else if (direction === -1) {
      Chara = StandLeft
    }
    else {
      Chara = CharaStand
    }
  }
  image(Shadow, playerX + 10, Y / 3 + 80, 330, 330)
  image(Chara, playerX, Y / 3 + 50, 330, 330)

  if (gamePlay === "action") {
    BowBoyPose = BowBoy
  }
  image(Shadow, backX + 2270 + 10, Y / 3 + 20, 250, 250)
  image(BowBoyPose, backX + 2270, Y / 3 + 30, 250, 250)

}





function CharaTalk() {
  textSize(50)
  if (tick === 0) {
    CharaText = " "
  }
  else if (action === "note" && i <= 3) {
    if (actionChoice === "Push" || actionChoice === "Pull") {
      if (note === " short pirate" || note === " fancy-looking pirate") {
        CharaText = "Aim to maim, not to inconvenience"
      }
      else if (note === " caution tape" && i < 4) {
        CharaText = " meememe        No, thats there for a reason"
      }
      else if (note === " strange bug") {
        CharaText = "Nah"
      }
      else if (note !== " ") {
        CharaText = "It wont budge"
      }
    }
    else if (actionChoice === "Look at") {
      if (note === " fancy-looking pirate") {
        CharaText = "He looks pretty official"
        console.log("yes")
      }
      else if (note === " short pirate") {
        CharaText = "I wonder if the bow is his copium"
      }
      else if (note === " caution tape") {
        if (i < 3) {
          CharaText = ".memememememmemememem        Caution: this section of the game doesnt exist yet"
        }
        else {
          CharaText = "mememe              I wonder what that means"
        }
      }
      else if (note === " ship") {
        CharaText = "I really need to get on that"
      }
      else if (note === " shack door") {
        CharaText = "Looks fairy sturdy"
      }
      else if (note === " door knocker") {
        if (knockerOn) {
          CharaText = "A door knocker. Used to knock on doors"
        }
        else {
          textSize(43)
          CharaText = "A door - well, I suppose its an anything knocker now"

        }
      }
      else if (note === " vending machine") {
        CharaText = "A Grog machine, with 3 new flavours!"
      }
      else if (note === " strange bug") {
        CharaText = "Looks like theres a bug in the game!"
      }
    }
    else if (actionChoice === "Close") {
      if (note === " caution tape" && i < 3) {
        CharaText = "meme      That doesn't need closing"
      }
      else if (note === " fancy-looking pirate" || note === " short pirate" || note === " strange bug") {
        CharaText = "How would I close that?"
      }
      else {
        CharaText = "That doesnt need closing"
      }
    }
    else if (actionChoice === "Open") {
      if (note === " caution tape" && i < 3) {
        CharaText = "meme      That doesn't need opening"
      }
      else if (note === " fancy-looking pirate" || note === " short pirate" || note === " strange bug") {
        CharaText = "How would I open that?"
      }
      else if (note === " shack door") {
        CharaText = "It won't budge"
      }
      else {
        CharaText = "That doesnt need opening"
      }
    }
    else if (actionChoice === "Give") {
      textSize(40)
      CharaText = "I'm sure I want to part with it just yet"
    }
    else if (actionChoice === "Talk to") {
      if (note !== " fancy-looking pirate" && note !== " short pirate") {
        CharaText = "I'd rather not"
      }
      else if (note === " fancy-looking pirate") {
        if (i <= 1) {
          CharaText = "Hello?"
        }
        else if (i >= 3) {
          CharaText = "Okay, bye"
        }
      }
      else if (note === " short pirate") {
        CharaText = "He doesn't seem helpful"
      }
    }
    else if (actionChoice === "Pick up") {
      if (note === " short pirate" || note === " fancy-looking pirate") {
        CharaText = "Aim to maim, not to inconvenience"
      }
      else if (note === " door knocker") {
        CharaText = "It's on the door, why would I?"
      }
      else if (note === " strange bug") {
        CharaText = "I dont wan't it squirming in my pockets"
      }
      else {
        CharaText = "I'd rather not"
      }
    }
    else if (actionChoice === "Use") {
      if (note === " shack door") {
        CharaText = "It won't budge"
      }
      else if (note === " vending machine") {
        CharaText = "No thanks, I'm nearing 2 months clean"
      }
      else if (note === " ship") {
        CharaText = "I need to get on it first"
      }
      else {
        CharaText = "How would I use that?"
      }
    }
  }
  else {
    CharaText = " "
    rese()
  }
  fill("#f7d588")
  stroke("#510e0e")
  strokeWeight(2)
  text(CharaText, playerX - 10 * direction, Y / 5)
}

function othersTalk() {
  textSize(40)
  boySay = " "
  if (action3 === "BowBoy chat" && tick === 1) {
    if (i >= 2 && i <= 4) {
      boySay = "You're not the captain!                 .. "
    }
    else if (i <= 2) {
      boySay = "Go away!"
    }
    else {
      boySay = "  "
    }
  }
  else {
    boySay = " "
  }
  fill("pink")
  stroke("red")
  text(boySay, backX + 2280, Y / 5)
}





//variable changing functio5


function check() {

  //what section of the screen is the mouse
  if (mouseY < ((Y * 4 / 5) - (Y / 100))) {
    screenSector = "playworld"
  }
  if (mouseY > Y * 3 / 4 && mouseY < Y) {
    if (gamePlay === "action") {
      if (mouseX < X / 3) {
        screenSector = "actionGrid"
      }
      else if (mouseX > Xseg1) {
        screenSector = "inventory"
      }
    }
    else if (gamePlay === "chat") {
      screenSector === "chatBox"
    }
  }

  //parts of the different sectors
  if (screenSector === "actionGrid") {
    if (actionOrder === 0) {
      if (mouseX < Xseg1_1 / 3) {
        if (mouseY < seg2 + (Y / 12)) {
          actionChoice = "Give"
        }
        else if (mouseY < seg2 + (Y / 6)) {
          actionChoice = "Open"
        }
        else {
          actionChoice = "Close"
        }
      }
      else if (mouseX < Xseg1_1 * 2 / 3) {
        if (mouseY < seg2 + (Y / 12)) {
          actionChoice = "Pick up"
        }
        else if (mouseY < seg2 + (Y / 6)) {
          actionChoice = "Look at"
        }
        else {
          actionChoice = "Talk to"
        }
      }
      else if (mouseX < Xseg1_1) {
        if (mouseY < seg2 + (Y / 12)) {
          actionChoice = "Use"
        }
        else if (mouseY < seg2 + (Y / 6)) {
          actionChoice = "Push"
        }
        else {
          actionChoice = "Pull"
        }
      }
    }
  }
  if (screenSector === "playworld") {
    if (actionOrder === 0) {
      actionChoice = "Walk to"
    }
    if (!actionDo) {
      if (mouseX <= backX + 250) {
        itemChoice = " caution tape"
      }
      else if (knockerOn && mouseX >= backX + 800
          && mouseX <= backX + 890
          && mouseY <= 225
          && mouseY >= 150) {
          itemChoice = " door knocker"
        }
        else if(!knockerOn && mouseX >= backX + 1100 && mouseX <= backX + 1190 && mouseY >= 450 && mouseY <= 500){
            itemChoice = " door knocker"
        }
      else if (mouseX >= backX + 757
        && mouseX <= backX + 965
        && mouseY <= 430
        && mouseY >= 110) {
        itemChoice = " shack door"
      }
      else if (mouseX >= backX + 1160
        && mouseY >= Y / 6
        && mouseX <= backX + 1360
        && mouseY <= Y / 2) {
        itemChoice = " fancy-looking pirate"
      }
      else if (mouseX >= backX + 1162
        && mouseY >= 40
        && mouseX <= backX + 1370
        && mouseY <= 350) {
        itemChoice = " vending machine"
      }
      else if (mouseX >= backX + 2180
        && mouseX <= backX + 2340
        && mouseY >= Y / 3 - 100
        && mouseY <= Y / 2 + 50) {
        itemChoice = " short pirate"
      }
      else if (mouseX >= backX + 1970) {
        itemChoice = " ship"
      }
      else if (mouseX >= backX + 1500 && mouseX <= backX + 1550 && mouseY >= 170 && mouseY <= 230) {
        itemChoice = " strange bug"
      }
      else {
        itemChoice = " "
      }
    }
  }

  if (actionChoice === "Walk to") {
    actionValid = true
    walkTo = true
  } else {
    walkTo = false
  }
}


function checkKey() {
  //this is for the check of which butotn was pressed/held
  if (key === "u") {
    keyChoice = "Use"
  }
  else if (key === "p") {
    keyChoice = "Pick up"
  }
  else if (key === "g") {
    keyChoice = "Give"
  }
  else if (key === "t") {
    keyChoice = "Talk to"
  }
  else if (key == "o") {
    keyChoice = "Open"
  }
  else if (key === "c") {
    keyChoice = "Close"
  }
  else if (key === "l") {
    keyChoice = "Look at"
  }
  else {
    keyChoice = "empty"
  }
}

function rese() {
  action = " "
  action2 = " "
  action3 = " "
  tick = 0
  i = 0
  doAct = false
  actionChoice = "Walk to"
  actionOrder = 0
  itemChoice = " "
}