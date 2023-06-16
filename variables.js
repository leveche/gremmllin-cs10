//screen layout variables
let X = 1300;
let Y = 900;
  let nlines = 60

//Y segments
let seg1 = (Y * 7/10) //split from playworld and menu
let seg1_1 = seg1 + Y/27  //where the action shown in mid strip lays
let seg2 = Y*3/4  //top of action interact menu
//action option rows
let seg2_1 = Y * 480/600  //first action option row
let seg2_2 = Y * 525/600  //second action option row
let seg2_3 = Y * 575 / 600 // third action option row

//X segments
let Xseg0 = X/2  //middle of canvas X, where both arrows end and action shown in mid strip lays
let Xseg1_1 =  X / 3  //left side of action grid
let Xseg1 = X / 4  //
let Xseg2 = (X / 3) + (X*2/15)
//action option columns
let Xseg2_1 = Xseg1 / 3  //first action option column
let Xseg2_2 = Xseg1 * 2 / 3  //second action option column
let Xseg2_3 = Xseg1  //third action option column

//playworld variables
let Img;
let backX = -1200
let screenSide = "screenRight"

//charactervariables
let playerX = Xseg0
let playerY = Y / 2
let playerDestX = Xseg0
let playerDestY = Y / 2
let globalPosX = playerX
let globalDestX = playerX
let playerSpeed = 9
let direction = 0
let playerDistanceX = playerDestX - playerX

//menu variables
let showMenu = true
let gamePlay = "action"

//action variables
let actionChoice;
let keyChoice;
let actionOrder = 0
let actionDo = false
let actionSeg1 = actionChoice
let actionSeg2 = " "
let itemChoice = " "
let actionValid = true
let action = " "
let action2 = " "
let action3 = " "

//chatting variables
let chatTo = " "


//interaction variables
let screenSector;
let doAct = false
let captainPirate = " well-dressed pirate"
let knockerOn = false
let walkTo = true
let CharaText = " test"
let note;
let boySay = " "

//timer variabes
let i = 0
let endTime = 10
let tick = 0



// character variables
let Chara;
let BowBoyPose;