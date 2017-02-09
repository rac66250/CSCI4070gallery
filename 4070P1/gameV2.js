//------------
//System Vars
//------------
//the canvas
//hello
var stage = document.getElementById("gameCanvas");
stage.width = STAGE_WIDTH;
stage.height = STAGE_HEIGHT;
var ctx = stage.getContext("2d");
ctx.fillStyle = "white";
ctx.font = GAME_FONTS;
var speed = 1;//what direction the Pacman goes
//the dirction the ghost goes in
var up = false;
var down = false;
var left = false;
var right = false;
var gameOver = false;//is the game over
//open close animation for the pacmen
var open = true;
var openT = true;
var openV = true;
//scoring mechanic
var checkT = 0;
var checkV = 0;
var check = 0;
//button listeners
window.addEventListener( 'keydown',onKeyDown,true );
window.addEventListener( 'keyup',onKeyUp,true );
//the wall objects
var rect2 = {x: 145.5, y: 78, width: 7, height: 33}
var rect1 = {x: 120, y: 76, width: 60, height: 9}
var rect3 = {x: 93, y: 75, width: 9, height: 60}
var rect4 = {x: 95, y: 100, width: 34, height: 9}
var rect5 = {x: 196, y: 75, width: 9, height: 60}
var rect6 = {x: 169, y: 100.5, width: 33, height: 9}
var rect7 = {x: 220, y: 100, width: 100, height: 35}
var rect8 = {x: 220, y: 153, width: 100, height: 35}
var rect9 = {x: 0, y: 100, width: 77, height: 35}
var rect10 = {x: 0, y: 153, width: 77, height: 35}
var rect11 = {x: 0, y: 0, width: 35, height: 130}
var rect12 = {x: 0, y: 156, width: 35, height: 150}
var rect13 = {x: 0, y: 280, width: 301, height: 25}
var rect14 = {x: 0, y: 0, width: 301, height: 25}
var rect15 = {x: 263, y: 154, width: 30, height: 150}
var rect16 = {x: 263, y: 0, width: 35, height: 130}
var rect17 = {x: 52, y: 40, width: 25, height: 20}
var rect18 = {x: 52, y: 73, width: 26, height: 10}
var rect19 = {x: 94, y: 40, width: 34, height: 20}
var rect20 = {x: 223, y: 40, width: 25, height: 20}
var rect21 = {x: 171, y: 40, width: 34, height: 20}
var rect22 = {x: 222, y: 74, width: 26, height: 10}
var rect23 = {x: 119, y: 128, width: 20, height: 25}
var rect24 = {x: 26, y: 229, width: 26, height: 10}
var rect25 = {x: 145, y: 25, width: 10, height: 35}
var rect26 = {x: 159, y: 128, width: 20, height: 25}
var rect27 = {x: 119, y: 158, width: 59, height: 5}
var rect28 = {x: 245, y: 229, width: 26, height: 10}
var rect29 = {x: 93, y: 153, width: 10, height: 35}
var rect30 = {x: 93, y: 203, width: 35, height: 10}
var rect31 = {x: 68, y: 205, width: 10, height: 35}
var rect32 = {x: 195, y: 153, width: 10, height: 35}
var rect33 = {x: 48, y: 202, width: 28, height: 10}
var rect34 = {x: 170, y: 203, width: 35, height: 10}
var rect35 = {x: 222, y: 205, width: 10, height: 35}
var rect36 = {x: 219, y: 202, width: 27, height: 10}
var rect37 = {x: 145.5, y: 179, width: 7, height: 33}
var rect38 = {x: 119, y: 177, width: 60, height: 9}
var rect39 = {x: 145.5, y: 232, width: 7, height: 33}
var rect40 = {x: 119, y: 229, width: 60, height: 9}
var rect41 = {x: 50, y: 255, width: 80, height: 10}
var rect42 = {x: 95, y: 228, width: 10, height: 35}
var rect43 = {x: 195, y: 228, width: 10, height: 35}
var rect44 = {x: 170, y: 255, width: 75, height: 10}
var ghostD = {x: 145, y: 140, width: 10, height: 10}//ghost object
//pacmen object
var pacM = {x: 145, y: 165, width: 10, height: 10}
var pacT = {x: 207, y: 138, width: 10, height: 10}
var pacV = {x: 80, y: 138, width: 10, height: 10}
//pellet objects
var pel = {x: 45, y: 40, width: 10, height: 10}
var pel1 = {x: 40, y: 217, width: 10, height: 10}
var pel2 = {x: 253, y: 217, width: 10, height: 10}
var pel3 = {x: 253, y: 45, width: 10, height: 10}
//pacman directions
var goingUp = false;
var goingDown = false;
var goingRight = false;
var goingLeft = true;
var goingUpT = true;
var goingDownT = false;
var goingRightT = false;
var goingLeftT = false;
var speed2 = 2;
var goingUpV = true;
var goingDownV = false;
var goingRightV = false;
var goingLeftV = false;
var speed3 = 4;
var weak = false;//is the ghost vulnerable
var lasting = 100;//how long the ghost is vulnerable
var winner = false;//did you win
var counter = 0;//counter to see if you won
var start = true;//start screen
//is the pacman dead
var tell = false;
var tellT = false;
var tellV = false;

//---------------
//Preloading ...
//---------------
//Preload Art Assets
// - Sprite Sheet: Image API:

//load the different sprites
var charImage = new Image();
charImage.ready = false;
charImage.onload = setAssetReady;
charImage.src = PATH_CHAR;  // source image location set in constants.js

var charImage5 = new Image();
charImage5.ready = false;
charImage5.src = PATH_CHAR5;

var charImage8 = new Image();
charImage8.ready = false;
charImage8.src = PATH_CHAR8;

var charImage7 = new Image();
charImage7.ready = false;
charImage7.src = PATH_CHAR7;

var charImage6 = new Image();
charImage6.ready = false;
charImage6.src = PATH_CHAR6;

var charImage2 = new Image();
charImage2.ready = false;
charImage2.src = PATH_CHAR2;

var charImage3 = new Image();
charImage3.ready = false;
charImage3.src = PATH_CHAR3;

var charImage4 = new Image();
charImage4.ready = false;
charImage4.src = PATH_CHAR4;

function setAssetReady()
{
    this.ready = true;
}

//Display Preloading
ctx.fillRect(0,0,stage.width,stage.height);
ctx.fillStyle = "#000";
ctx.fillText(TEXT_PRELOADING, TEXT_PRELOADING_X, TEXT_PRELOADING_Y);
var preloader = setInterval(preloading, TIME_PER_FRAME);
var gameloop, currX, currY, currY2, currY3, currY4, currY5, currX3, currX4, currX5, currX9, currX2;

function preloading()
{
    if (charImage.ready)
    {
        clearInterval(preloader);
        gameloop = setInterval(update, TIME_PER_FRAME);
    }
}

//------------
//Game Loop
//------------
//currX, currY is a reference to  the image in sprite sheet
currX = IMAGE_START_X;
currY = IMAGE_START_Y;
currY2 = 96;
currX2 = 33;
currY3 = 0;
currY4 = 95;
currY5 = 63;
currX3 = 0;
currX4 = 0;
currX5 = 0;
currX9 = 0;

function onKeyDown(evt) {
    // 39 is the right arrow
    // 37 is the left arrow
    // 38 is the up arrow
    // 40 is the down arrow
    // 32 is the space bar
    if(evt.keyCode == 39){
        right = true;
    }
    else if(evt.keyCode == 37){
        left = true;
    }
    else if(evt.keyCode == 38) {
        up = true;
    }
    else if(evt.keyCode == 40){
        down = true;
    }
    else if(evt.keyCode == 32){
        start = false;
    }
}

//*** and UNSET them when the right or left key is released
function onKeyUp(evt)
{
    if (evt.keyCode == 39) 		right = false; // right arrow key
    else if (evt.keyCode == 37) 	left = false;  // left arrow key
    else if (evt.keyCode == 38) 	up = false;  // up arrow key
    else if (evt.keyCode == 40) 	down = false;  // down arrow key
}

function update()
{
    //Clear Canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, stage.width, stage.height);

    if(start){//start screen
        ctx.drawImage(charImage5,
            currX, currY,            // sprite upper left position
            600, 300, // size of a sprite
            0, 0,  // canvas position
            18 * CHAR_WIDTH, 9.5 * CHAR_HEIGHT      // sprite size shrinkage
        );

        currX += 300;
        if (currX >= 600)
            currX = 0;
    }
    else if(winner){//win screen
        ctx.drawImage(charImage6,
            0, 0,
            300, 300,
            1, 0,
            9 * CHAR_WIDTH, 10 * CHAR_HEIGHT
        );
    }
    else if(gameOver){//lose screen
        ctx.drawImage(charImage7,
            0, 0,
            300, 300,
            0, 0,
            9 * CHAR_WIDTH, 10 * CHAR_HEIGHT
        );
    }
    else if(weak) {//vulnerable ghost
        currX=0;
        //pacman is dead so dont move
        if(tell){
            currY3 = 0;
            currX3 += 32;
            if(currX3 >= 128){
                currX3 = 0;
            }
        }
        if(tellT){
            currY4 = 0;
            currX4 += 32;
            if(currX4 >= 128){
                currX4 = 0;
            }
        }
        if(tellV){
            currY5 = 0;
            currX5 += 32;
            if(currX5 >= 128){
                currX5 = 0;
            }
        }
        lasting--;//vulnerability timer
        if(lasting == 0){
            lasting = 100;
            weak = false;
        }
        //draw sprites
        //map
        ctx.drawImage(charImage3,
            10, 5,
            300, 300,
            0, 0,
            10 * CHAR_WIDTH, 10 * CHAR_HEIGHT
        );
        //score
        ctx.drawImage(charImage8,
            currX9, 0,
            CHAR_WIDTH, CHAR_HEIGHT,
            1, 253,
            3 * CHAR_WIDTH, 2.9 * CHAR_HEIGHT
        );
        //pellets
        ctx.drawImage(charImage4,
            0, 0,
            300, 300,
            CHAR_START_X6, CHAR_START_Y6,
            1.5 * CHAR_WIDTH, 1.5 * CHAR_HEIGHT
        );

        ctx.drawImage(charImage4,
            0, 0,
            300, 300,
            CHAR_START_X8, CHAR_START_Y8,
            1.5 * CHAR_WIDTH, 1.5 * CHAR_HEIGHT
        );

        ctx.drawImage(charImage4,
            0, 0,
            300, 300,
            CHAR_START_X9, CHAR_START_Y9,
            1.5 * CHAR_WIDTH, 1.5 * CHAR_HEIGHT
        );

        ctx.drawImage(charImage4,
            0, 0,
            300, 300,
            CHAR_START_X7, CHAR_START_Y7,
            1.5 * CHAR_WIDTH, 1.5 * CHAR_HEIGHT
        );
        //ghost
        ctx.drawImage(charImage,
            currX, currY,
            CHAR_WIDTH, CHAR_HEIGHT,
            CHAR_START_X, CHAR_START_Y,
            .3 * CHAR_WIDTH, .3 * CHAR_HEIGHT
        );
        //pacmen
        ctx.drawImage(charImage2,
            currX3, currY3,
            CHAR_WIDTH, CHAR_HEIGHT,
            CHAR_START_X2, CHAR_START_Y2,
            .3 * CHAR_WIDTH, .3 * CHAR_HEIGHT
        );

        ctx.drawImage(charImage2,
            currX4, currY4,
            CHAR_WIDTH, CHAR_HEIGHT,
            CHAR_START_X4, CHAR_START_Y4,
            .3 * CHAR_WIDTH, .3 * CHAR_HEIGHT
        );

        ctx.drawImage(charImage2,
            currX5, currY5,
            CHAR_WIDTH, CHAR_HEIGHT,
            CHAR_START_X5, CHAR_START_Y5,
            .3 * CHAR_WIDTH, .3 * CHAR_HEIGHT
        );

        //draw ghost
        if (right) CHAR_START_X += 2;
        else if (left) CHAR_START_X -= 2;
        else if (down) CHAR_START_Y += 2;
        else if (up) CHAR_START_Y -= 2;

        //collision detection update
        ghostD.x = CHAR_START_X;
        ghostD.y = CHAR_START_Y;
        pacM.x = CHAR_START_X2;
        pacM.y = CHAR_START_Y2;
        pacT.x = CHAR_START_X4;
        pacT.y = CHAR_START_Y4;
        pacV.x = CHAR_START_X5;
        pacV.y = CHAR_START_Y5;
        //portal through map
        if (CHAR_START_X < 0) {
            CHAR_START_X = 290;
        }
        if (CHAR_START_X > 301) {
            CHAR_START_X = 0;
        }
        //ghost collision detection
        if (rect1.x < ghostD.x + ghostD.width &&
            rect1.x + rect1.width > ghostD.x &&
            rect1.y < ghostD.y + ghostD.height &&
            rect1.height + rect1.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect2.x < ghostD.x + ghostD.width &&
            rect2.x + rect2.width > ghostD.x &&
            rect2.y < ghostD.y + ghostD.height &&
            rect2.height + rect2.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect3.x < ghostD.x + ghostD.width &&
            rect3.x + rect3.width > ghostD.x &&
            rect3.y < ghostD.y + ghostD.height &&
            rect3.height + rect3.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect4.x < ghostD.x + ghostD.width &&
            rect4.x + rect4.width > ghostD.x &&
            rect4.y < ghostD.y + ghostD.height &&
            rect4.height + rect4.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect5.x < ghostD.x + ghostD.width &&
            rect5.x + rect5.width > ghostD.x &&
            rect5.y < ghostD.y + ghostD.height &&
            rect5.height + rect5.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect6.x < ghostD.x + ghostD.width &&
            rect6.x + rect6.width > ghostD.x &&
            rect6.y < ghostD.y + ghostD.height &&
            rect6.height + rect6.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect7.x < ghostD.x + ghostD.width &&
            rect7.x + rect7.width > ghostD.x &&
            rect7.y < ghostD.y + ghostD.height &&
            rect7.height + rect7.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect8.x < ghostD.x + ghostD.width &&
            rect8.x + rect8.width > ghostD.x &&
            rect8.y < ghostD.y + ghostD.height &&
            rect8.height + rect8.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect10.x < ghostD.x + ghostD.width &&
            rect10.x + rect10.width > ghostD.x &&
            rect10.y < ghostD.y + ghostD.height &&
            rect10.height + rect10.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect9.x < ghostD.x + ghostD.width &&
            rect9.x + rect9.width > ghostD.x &&
            rect9.y < ghostD.y + ghostD.height &&
            rect9.height + rect9.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect12.x < ghostD.x + ghostD.width &&
            rect12.x + rect12.width > ghostD.x &&
            rect12.y < ghostD.y + ghostD.height &&
            rect12.height + rect12.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect11.x < ghostD.x + ghostD.width &&
            rect11.x + rect11.width > ghostD.x &&
            rect11.y < ghostD.y + ghostD.height &&
            rect11.height + rect11.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect13.x < ghostD.x + ghostD.width &&
            rect13.x + rect13.width > ghostD.x &&
            rect13.y < ghostD.y + ghostD.height &&
            rect13.height + rect13.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect14.x < ghostD.x + ghostD.width &&
            rect14.x + rect14.width > ghostD.x &&
            rect14.y < ghostD.y + ghostD.height &&
            rect14.height + rect14.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect15.x < ghostD.x + ghostD.width &&
            rect15.x + rect15.width > ghostD.x &&
            rect15.y < ghostD.y + ghostD.height &&
            rect15.height + rect15.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect16.x < ghostD.x + ghostD.width &&
            rect16.x + rect16.width > ghostD.x &&
            rect16.y < ghostD.y + ghostD.height &&
            rect16.height + rect16.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect17.x < ghostD.x + ghostD.width &&
            rect17.x + rect17.width > ghostD.x &&
            rect17.y < ghostD.y + ghostD.height &&
            rect17.height + rect17.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect18.x < ghostD.x + ghostD.width &&
            rect18.x + rect18.width > ghostD.x &&
            rect18.y < ghostD.y + ghostD.height &&
            rect18.height + rect18.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect19.x < ghostD.x + ghostD.width &&
            rect19.x + rect19.width > ghostD.x &&
            rect19.y < ghostD.y + ghostD.height &&
            rect19.height + rect19.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect20.x < ghostD.x + ghostD.width &&
            rect20.x + rect20.width > ghostD.x &&
            rect20.y < ghostD.y + ghostD.height &&
            rect20.height + rect20.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect21.x < ghostD.x + ghostD.width &&
            rect21.x + rect21.width > ghostD.x &&
            rect21.y < ghostD.y + ghostD.height &&
            rect21.height + rect21.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect22.x < ghostD.x + ghostD.width &&
            rect22.x + rect22.width > ghostD.x &&
            rect22.y < ghostD.y + ghostD.height &&
            rect22.height + rect22.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect23.x < ghostD.x + ghostD.width &&
            rect23.x + rect23.width > ghostD.x &&
            rect23.y < ghostD.y + ghostD.height &&
            rect23.height + rect23.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect24.x < ghostD.x + ghostD.width &&
            rect24.x + rect24.width > ghostD.x &&
            rect24.y < ghostD.y + ghostD.height &&
            rect24.height + rect24.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect25.x < ghostD.x + ghostD.width &&
            rect25.x + rect25.width > ghostD.x &&
            rect25.y < ghostD.y + ghostD.height &&
            rect25.height + rect25.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect26.x < ghostD.x + ghostD.width &&
            rect26.x + rect26.width > ghostD.x &&
            rect26.y < ghostD.y + ghostD.height &&
            rect26.height + rect26.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect27.x < ghostD.x + ghostD.width &&
            rect27.x + rect27.width > ghostD.x &&
            rect27.y < ghostD.y + ghostD.height &&
            rect27.height + rect27.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect28.x < ghostD.x + ghostD.width &&
            rect28.x + rect28.width > ghostD.x &&
            rect28.y < ghostD.y + ghostD.height &&
            rect28.height + rect28.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect29.x < ghostD.x + ghostD.width &&
            rect29.x + rect29.width > ghostD.x &&
            rect29.y < ghostD.y + ghostD.height &&
            rect29.height + rect29.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect30.x < ghostD.x + ghostD.width &&
            rect30.x + rect30.width > ghostD.x &&
            rect30.y < ghostD.y + ghostD.height &&
            rect30.height + rect30.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect31.x < ghostD.x + ghostD.width &&
            rect31.x + rect31.width > ghostD.x &&
            rect31.y < ghostD.y + ghostD.height &&
            rect31.height + rect31.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect32.x < ghostD.x + ghostD.width &&
            rect32.x + rect32.width > ghostD.x &&
            rect32.y < ghostD.y + ghostD.height &&
            rect32.height + rect32.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect33.x < ghostD.x + ghostD.width &&
            rect33.x + rect33.width > ghostD.x &&
            rect33.y < ghostD.y + ghostD.height &&
            rect33.height + rect33.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect34.x < ghostD.x + ghostD.width &&
            rect34.x + rect34.width > ghostD.x &&
            rect34.y < ghostD.y + ghostD.height &&
            rect34.height + rect34.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect35.x < ghostD.x + ghostD.width &&
            rect35.x + rect35.width > ghostD.x &&
            rect35.y < ghostD.y + ghostD.height &&
            rect35.height + rect35.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect36.x < ghostD.x + ghostD.width &&
            rect36.x + rect36.width > ghostD.x &&
            rect36.y < ghostD.y + ghostD.height &&
            rect36.height + rect36.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect37.x < ghostD.x + ghostD.width &&
            rect37.x + rect37.width > ghostD.x &&
            rect37.y < ghostD.y + ghostD.height &&
            rect37.height + rect37.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect38.x < ghostD.x + ghostD.width &&
            rect38.x + rect38.width > ghostD.x &&
            rect38.y < ghostD.y + ghostD.height &&
            rect38.height + rect38.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect39.x < ghostD.x + ghostD.width &&
            rect39.x + rect39.width > ghostD.x &&
            rect39.y < ghostD.y + ghostD.height &&
            rect39.height + rect39.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect40.x < ghostD.x + ghostD.width &&
            rect40.x + rect40.width > ghostD.x &&
            rect40.y < ghostD.y + ghostD.height &&
            rect40.height + rect40.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect41.x < ghostD.x + ghostD.width &&
            rect41.x + rect41.width > ghostD.x &&
            rect41.y < ghostD.y + ghostD.height &&
            rect41.height + rect41.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect42.x < ghostD.x + ghostD.width &&
            rect42.x + rect42.width > ghostD.x &&
            rect42.y < ghostD.y + ghostD.height &&
            rect42.height + rect42.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect43.x < ghostD.x + ghostD.width &&
            rect43.x + rect43.width > ghostD.x &&
            rect43.y < ghostD.y + ghostD.height &&
            rect43.height + rect43.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect44.x < ghostD.x + ghostD.width &&
            rect44.x + rect44.width > ghostD.x &&
            rect44.y < ghostD.y + ghostD.height &&
            rect44.height + rect44.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }

        //PACMAN COLLISION
        if (rect1.x < pacM.x + pacM.width &&
            rect1.x + rect1.width > pacM.x &&
            rect1.y < pacM.y + pacM.height &&
            rect1.height + rect1.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect2.x < pacM.x + pacM.width &&
            rect2.x + rect2.width > pacM.x &&
            rect2.y < pacM.y + pacM.height &&
            rect2.height + rect2.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect3.x < pacM.x + pacM.width &&
            rect3.x + rect3.width > pacM.x &&
            rect3.y < pacM.y + pacM.height &&
            rect3.height + rect3.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect4.x < pacM.x + pacM.width &&
            rect4.x + rect4.width > pacM.x &&
            rect4.y < pacM.y + pacM.height &&
            rect4.height + rect4.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect5.x < pacM.x + pacM.width &&
            rect5.x + rect5.width > pacM.x &&
            rect5.y < pacM.y + pacM.height &&
            rect5.height + rect5.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect6.x < pacM.x + pacM.width &&
            rect6.x + rect6.width > pacM.x &&
            rect6.y < pacM.y + pacM.height &&
            rect6.height + rect6.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect7.x < pacM.x + pacM.width &&
            rect7.x + rect7.width > pacM.x &&
            rect7.y < pacM.y + pacM.height &&
            rect7.height + rect7.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect8.x < pacM.x + pacM.width &&
            rect8.x + rect8.width > pacM.x &&
            rect8.y < pacM.y + pacM.height &&
            rect8.height + rect8.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect10.x < pacM.x + pacM.width &&
            rect10.x + rect10.width > pacM.x &&
            rect10.y < pacM.y + pacM.height &&
            rect10.height + rect10.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect9.x < pacM.x + pacM.width &&
            rect9.x + rect9.width > pacM.x &&
            rect9.y < pacM.y + pacM.height &&
            rect9.height + rect9.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect12.x < pacM.x + pacM.width &&
            rect12.x + rect12.width > pacM.x &&
            rect12.y < pacM.y + pacM.height &&
            rect12.height + rect12.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect11.x < pacM.x + pacM.width &&
            rect11.x + rect11.width > pacM.x &&
            rect11.y < pacM.y + pacM.height &&
            rect11.height + rect11.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect13.x < pacM.x + pacM.width &&
            rect13.x + rect13.width > pacM.x &&
            rect13.y < pacM.y + pacM.height &&
            rect13.height + rect13.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect14.x < pacM.x + pacM.width &&
            rect14.x + rect14.width > pacM.x &&
            rect14.y < pacM.y + pacM.height &&
            rect14.height + rect14.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect15.x < pacM.x + pacM.width &&
            rect15.x + rect15.width > pacM.x &&
            rect15.y < pacM.y + pacM.height &&
            rect15.height + rect15.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect16.x < pacM.x + pacM.width &&
            rect16.x + rect16.width > pacM.x &&
            rect16.y < pacM.y + pacM.height &&
            rect16.height + rect16.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect17.x < pacM.x + pacM.width &&
            rect17.x + rect17.width > pacM.x &&
            rect17.y < pacM.y + pacM.height &&
            rect17.height + rect17.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect18.x < pacM.x + pacM.width &&
            rect18.x + rect18.width > pacM.x &&
            rect18.y < pacM.y + pacM.height &&
            rect18.height + rect18.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect19.x < pacM.x + pacM.width &&
            rect19.x + rect19.width > pacM.x &&
            rect19.y < pacM.y + pacM.height &&
            rect19.height + rect19.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect20.x < pacM.x + pacM.width &&
            rect20.x + rect20.width > pacM.x &&
            rect20.y < pacM.y + pacM.height &&
            rect20.height + rect20.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect21.x < pacM.x + pacM.width &&
            rect21.x + rect21.width > pacM.x &&
            rect21.y < pacM.y + pacM.height &&
            rect21.height + rect21.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect22.x < pacM.x + pacM.width &&
            rect22.x + rect22.width > pacM.x &&
            rect22.y < pacM.y + pacM.height &&
            rect22.height + rect22.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect23.x < pacM.x + pacM.width &&
            rect23.x + rect23.width > pacM.x &&
            rect23.y < pacM.y + pacM.height &&
            rect23.height + rect23.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect24.x < pacM.x + pacM.width &&
            rect24.x + rect24.width > pacM.x &&
            rect24.y < pacM.y + pacM.height &&
            rect24.height + rect24.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect25.x < pacM.x + pacM.width &&
            rect25.x + rect25.width > pacM.x &&
            rect25.y < pacM.y + pacM.height &&
            rect25.height + rect25.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect26.x < pacM.x + pacM.width &&
            rect26.x + rect26.width > pacM.x &&
            rect26.y < pacM.y + pacM.height &&
            rect26.height + rect26.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect27.x < pacM.x + pacM.width &&
            rect27.x + rect27.width > pacM.x &&
            rect27.y < pacM.y + pacM.height &&
            rect27.height + rect27.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect28.x < pacM.x + pacM.width &&
            rect28.x + rect28.width > pacM.x &&
            rect28.y < pacM.y + pacM.height &&
            rect28.height + rect28.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect29.x < pacM.x + pacM.width &&
            rect29.x + rect29.width > pacM.x &&
            rect29.y < pacM.y + pacM.height &&
            rect29.height + rect29.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect30.x < pacM.x + pacM.width &&
            rect30.x + rect30.width > pacM.x &&
            rect30.y < pacM.y + pacM.height &&
            rect30.height + rect30.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect31.x < pacM.x + pacM.width &&
            rect31.x + rect31.width > pacM.x &&
            rect31.y < pacM.y + pacM.height &&
            rect31.height + rect31.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect32.x < pacM.x + pacM.width &&
            rect32.x + rect32.width > pacM.x &&
            rect32.y < pacM.y + pacM.height &&
            rect32.height + rect32.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect33.x < pacM.x + pacM.width &&
            rect33.x + rect33.width > pacM.x &&
            rect33.y < pacM.y + pacM.height &&
            rect33.height + rect33.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect34.x < pacM.x + pacM.width &&
            rect34.x + rect34.width > pacM.x &&
            rect34.y < pacM.y + pacM.height &&
            rect34.height + rect34.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect35.x < pacM.x + pacM.width &&
            rect35.x + rect35.width > pacM.x &&
            rect35.y < pacM.y + pacM.height &&
            rect35.height + rect35.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect36.x < pacM.x + pacM.width &&
            rect36.x + rect36.width > pacM.x &&
            rect36.y < pacM.y + pacM.height &&
            rect36.height + rect36.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect37.x < pacM.x + pacM.width &&
            rect37.x + rect37.width > pacM.x &&
            rect37.y < pacM.y + pacM.height &&
            rect37.height + rect37.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect38.x < pacM.x + pacM.width &&
            rect38.x + rect38.width > pacM.x &&
            rect38.y < pacM.y + pacM.height &&
            rect38.height + rect38.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect39.x < pacM.x + pacM.width &&
            rect39.x + rect39.width > pacM.x &&
            rect39.y < pacM.y + pacM.height &&
            rect39.height + rect39.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect40.x < pacM.x + pacM.width &&
            rect40.x + rect40.width > pacM.x &&
            rect40.y < pacM.y + pacM.height &&
            rect40.height + rect40.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect41.x < pacM.x + pacM.width &&
            rect41.x + rect41.width > pacM.x &&
            rect41.y < pacM.y + pacM.height &&
            rect41.height + rect41.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect42.x < pacM.x + pacM.width &&
            rect42.x + rect42.width > pacM.x &&
            rect42.y < pacM.y + pacM.height &&
            rect42.height + rect42.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect43.x < pacM.x + pacM.width &&
            rect43.x + rect43.width > pacM.x &&
            rect43.y < pacM.y + pacM.height &&
            rect43.height + rect43.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect44.x < pacM.x + pacM.width &&
            rect44.x + rect44.width > pacM.x &&
            rect44.y < pacM.y + pacM.height &&
            rect44.height + rect44.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        //pacman directionality
        if (speed == 1) {
            goingLeft = true;
            goingUp = false;
            goingDown = false;
            goingRight = false;
        }
        else if (speed == 2) {
            goingLeft = false;
            goingUp = true;
            goingDown = false;
            goingRight = false;
        }
        else if (speed == 3) {
            goingLeft = false;
            goingUp = false;
            goingDown = false;
            goingRight = true;
        }
        else if (speed == 4) {
            goingLeft = false;
            goingUp = false;
            goingDown = true;
            goingRight = false;
        }

        if (goingUp) {
            CHAR_START_Y2 -= 2;
            currY3 = 95;
            if(open){
                currX3 = 0;
                open = false;
            }
            else {
                currX3 = 31;
                open = true;
            }
        }
        else if (goingDown) {
            CHAR_START_Y2 += 2;
            currY3 = 63;
            if(open){
                currX3 = 0;
                open = false;
            }
            else {
                currX3 = 31;
                open = true;
            }
        }
        else if (goingLeft) {
            CHAR_START_X2 -= 2;
            currY3 = 0;
            if(open){
                currX3 = 0;
                open = false;
            }
            else {
                currX3 = 31;
                open = true;
            }
        }
        else if (goingRight) {
            CHAR_START_X2 += 2;
            currY3 = 31;
            if(open){
                currX3 = 0;
                open = false;
            }
            else {
                currX3 = 31;
                open = true;
            }
        }

        if (ghostD.x < pacM.x + pacM.width &&
            ghostD.x + ghostD.width > pacM.x &&
            ghostD.y < pacM.y + pacM.height &&
            ghostD.height + ghostD.y > pacM.y) {
            gameOver = true;
        }

        //Pacman 2

        if (rect1.x < pacT.x + pacT.width &&
            rect1.x + rect1.width > pacT.x &&
            rect1.y < pacT.y + pacT.height &&
            rect1.height + rect1.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect2.x < pacT.x + pacT.width &&
            rect2.x + rect2.width > pacT.x &&
            rect2.y < pacT.y + pacT.height &&
            rect2.height + rect2.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect3.x < pacT.x + pacT.width &&
            rect3.x + rect3.width > pacT.x &&
            rect3.y < pacT.y + pacT.height &&
            rect3.height + rect3.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect4.x < pacT.x + pacT.width &&
            rect4.x + rect4.width > pacT.x &&
            rect4.y < pacT.y + pacT.height &&
            rect4.height + rect4.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect5.x < pacT.x + pacT.width &&
            rect5.x + rect5.width > pacT.x &&
            rect5.y < pacT.y + pacT.height &&
            rect5.height + rect5.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect6.x < pacT.x + pacT.width &&
            rect6.x + rect6.width > pacT.x &&
            rect6.y < pacT.y + pacT.height &&
            rect6.height + rect6.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect7.x < pacT.x + pacT.width &&
            rect7.x + rect7.width > pacT.x &&
            rect7.y < pacT.y + pacT.height &&
            rect7.height + rect7.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect8.x < pacT.x + pacT.width &&
            rect8.x + rect8.width > pacT.x &&
            rect8.y < pacT.y + pacT.height &&
            rect8.height + rect8.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect10.x < pacT.x + pacT.width &&
            rect10.x + rect10.width > pacT.x &&
            rect10.y < pacT.y + pacT.height &&
            rect10.height + rect10.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect9.x < pacT.x + pacT.width &&
            rect9.x + rect9.width > pacT.x &&
            rect9.y < pacT.y + pacT.height &&
            rect9.height + rect9.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect12.x < pacT.x + pacT.width &&
            rect12.x + rect12.width > pacT.x &&
            rect12.y < pacT.y + pacT.height &&
            rect12.height + rect12.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect11.x < pacT.x + pacT.width &&
            rect11.x + rect11.width > pacT.x &&
            rect11.y < pacT.y + pacT.height &&
            rect11.height + rect11.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect13.x < pacT.x + pacT.width &&
            rect13.x + rect13.width > pacT.x &&
            rect13.y < pacT.y + pacT.height &&
            rect13.height + rect13.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect14.x < pacT.x + pacT.width &&
            rect14.x + rect14.width > pacT.x &&
            rect14.y < pacT.y + pacT.height &&
            rect14.height + rect14.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect15.x < pacT.x + pacT.width &&
            rect15.x + rect15.width > pacT.x &&
            rect15.y < pacT.y + pacT.height &&
            rect15.height + rect15.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect16.x < pacT.x + pacT.width &&
            rect16.x + rect16.width > pacT.x &&
            rect16.y < pacT.y + pacT.height &&
            rect16.height + rect16.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect17.x < pacT.x + pacT.width &&
            rect17.x + rect17.width > pacT.x &&
            rect17.y < pacT.y + pacT.height &&
            rect17.height + rect17.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect18.x < pacT.x + pacT.width &&
            rect18.x + rect18.width > pacT.x &&
            rect18.y < pacT.y + pacT.height &&
            rect18.height + rect18.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect19.x < pacT.x + pacT.width &&
            rect19.x + rect19.width > pacT.x &&
            rect19.y < pacT.y + pacT.height &&
            rect19.height + rect19.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect20.x < pacT.x + pacT.width &&
            rect20.x + rect20.width > pacT.x &&
            rect20.y < pacT.y + pacT.height &&
            rect20.height + rect20.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect21.x < pacT.x + pacT.width &&
            rect21.x + rect21.width > pacT.x &&
            rect21.y < pacT.y + pacT.height &&
            rect21.height + rect21.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect22.x < pacT.x + pacT.width &&
            rect22.x + rect22.width > pacT.x &&
            rect22.y < pacT.y + pacT.height &&
            rect22.height + rect22.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect23.x < pacT.x + pacT.width &&
            rect23.x + rect23.width > pacT.x &&
            rect23.y < pacT.y + pacT.height &&
            rect23.height + rect23.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect24.x < pacT.x + pacT.width &&
            rect24.x + rect24.width > pacT.x &&
            rect24.y < pacT.y + pacT.height &&
            rect24.height + rect24.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect25.x < pacT.x + pacT.width &&
            rect25.x + rect25.width > pacT.x &&
            rect25.y < pacT.y + pacT.height &&
            rect25.height + rect25.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect26.x < pacT.x + pacT.width &&
            rect26.x + rect26.width > pacT.x &&
            rect26.y < pacT.y + pacT.height &&
            rect26.height + rect26.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect27.x < pacT.x + pacT.width &&
            rect27.x + rect27.width > pacT.x &&
            rect27.y < pacT.y + pacT.height &&
            rect27.height + rect27.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect28.x < pacT.x + pacT.width &&
            rect28.x + rect28.width > pacT.x &&
            rect28.y < pacT.y + pacT.height &&
            rect28.height + rect28.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect29.x < pacT.x + pacT.width &&
            rect29.x + rect29.width > pacT.x &&
            rect29.y < pacT.y + pacT.height &&
            rect29.height + rect29.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect30.x < pacT.x + pacT.width &&
            rect30.x + rect30.width > pacT.x &&
            rect30.y < pacT.y + pacT.height &&
            rect30.height + rect30.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect31.x < pacT.x + pacT.width &&
            rect31.x + rect31.width > pacT.x &&
            rect31.y < pacT.y + pacT.height &&
            rect31.height + rect31.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect32.x < pacT.x + pacT.width &&
            rect32.x + rect32.width > pacT.x &&
            rect32.y < pacT.y + pacT.height &&
            rect32.height + rect32.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect33.x < pacT.x + pacT.width &&
            rect33.x + rect33.width > pacT.x &&
            rect33.y < pacT.y + pacT.height &&
            rect33.height + rect33.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect34.x < pacT.x + pacT.width &&
            rect34.x + rect34.width > pacT.x &&
            rect34.y < pacT.y + pacT.height &&
            rect34.height + rect34.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect35.x < pacT.x + pacT.width &&
            rect35.x + rect35.width > pacT.x &&
            rect35.y < pacT.y + pacT.height &&
            rect35.height + rect35.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect36.x < pacT.x + pacT.width &&
            rect36.x + rect36.width > pacT.x &&
            rect36.y < pacT.y + pacT.height &&
            rect36.height + rect36.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect37.x < pacT.x + pacT.width &&
            rect37.x + rect37.width > pacT.x &&
            rect37.y < pacT.y + pacT.height &&
            rect37.height + rect37.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect38.x < pacT.x + pacT.width &&
            rect38.x + rect38.width > pacT.x &&
            rect38.y < pacT.y + pacT.height &&
            rect38.height + rect38.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect39.x < pacT.x + pacT.width &&
            rect39.x + rect39.width > pacT.x &&
            rect39.y < pacT.y + pacT.height &&
            rect39.height + rect39.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect40.x < pacT.x + pacT.width &&
            rect40.x + rect40.width > pacT.x &&
            rect40.y < pacT.y + pacT.height &&
            rect40.height + rect40.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect41.x < pacT.x + pacT.width &&
            rect41.x + rect41.width > pacT.x &&
            rect41.y < pacT.y + pacT.height &&
            rect41.height + rect41.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect42.x < pacT.x + pacT.width &&
            rect42.x + rect42.width > pacT.x &&
            rect42.y < pacT.y + pacT.height &&
            rect42.height + rect42.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect43.x < pacT.x + pacT.width &&
            rect43.x + rect43.width > pacT.x &&
            rect43.y < pacT.y + pacT.height &&
            rect43.height + rect43.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect44.x < pacT.x + pacT.width &&
            rect44.x + rect44.width > pacT.x &&
            rect44.y < pacT.y + pacT.height &&
            rect44.height + rect44.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }

        if (speed2 == 1) {
            goingLeftT = true;
            goingUpT = false;
            goingDownT = false;
            goingRightT = false;
        }
        else if (speed2 == 2) {
            goingLeftT = false;
            goingUpT = true;
            goingDownT = false;
            goingRightt = false;
        }
        else if (speed2 == 3) {
            goingLeftT = false;
            goingUpT = false;
            goingDownT = false;
            goingRightT = true;
        }
        else if (speed2 == 4) {
            goingLeftT = false;
            goingUpT = false;
            goingDownT = true;
            goingRightT = false;
        }

        if (goingUpT) {
            CHAR_START_Y4 -= 2;
            currY4 = 95;
            if(openT){
                currX4 = 0;
                openT = false;
            }
            else {
                currX4 = 31;
                openT = true;
            }
        }
        else if (goingDownT) {
            CHAR_START_Y4 += 2;
            currY4 = 63;
            if(openT){
                currX4 = 0;
                openT = false;
            }
            else {
                currX4 = 31;
                openT = true;
            }
        }
        else if (goingLeftT) {
            CHAR_START_X4 -= 2;
            currY4 = 0;
            if(openT){
                currX4 = 0;
                openT = false;
            }
            else {
                currX4 = 31;
                openT = true;
            }
        }
        else if (goingRightT) {
            CHAR_START_X4 += 2;
            currY4 = 31;
            if(openT){
                currX4 = 0;
                openT = false;
            }
            else {
                currX4 = 31;
                openT = true;
            }
        }

        if (ghostD.x < pacT.x + pacT.width &&
            ghostD.x + ghostD.width > pacT.x &&
            ghostD.y < pacT.y + pacT.height &&
            ghostD.height + ghostD.y > pacT.y) {
            gameOver = true;
        }

        //Pacman 3

        if (rect1.x < pacV.x + pacV.width &&
            rect1.x + rect1.width > pacV.x &&
            rect1.y < pacV.y + pacV.height &&
            rect1.height + rect1.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect2.x < pacV.x + pacV.width &&
            rect2.x + rect2.width > pacV.x &&
            rect2.y < pacV.y + pacV.height &&
            rect2.height + rect2.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect3.x < pacV.x + pacV.width &&
            rect3.x + rect3.width > pacV.x &&
            rect3.y < pacV.y + pacV.height &&
            rect3.height + rect3.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect4.x < pacV.x + pacV.width &&
            rect4.x + rect4.width > pacV.x &&
            rect4.y < pacV.y + pacV.height &&
            rect4.height + rect4.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect5.x < pacV.x + pacV.width &&
            rect5.x + rect5.width > pacV.x &&
            rect5.y < pacV.y + pacV.height &&
            rect5.height + rect5.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect6.x < pacV.x + pacV.width &&
            rect6.x + rect6.width > pacV.x &&
            rect6.y < pacV.y + pacV.height &&
            rect6.height + rect6.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect7.x < pacV.x + pacV.width &&
            rect7.x + rect7.width > pacV.x &&
            rect7.y < pacV.y + pacV.height &&
            rect7.height + rect7.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect8.x < pacV.x + pacV.width &&
            rect8.x + rect8.width > pacV.x &&
            rect8.y < pacV.y + pacV.height &&
            rect8.height + rect8.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect10.x < pacV.x + pacV.width &&
            rect10.x + rect10.width > pacV.x &&
            rect10.y < pacV.y + pacV.height &&
            rect10.height + rect10.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect9.x < pacV.x + pacV.width &&
            rect9.x + rect9.width > pacV.x &&
            rect9.y < pacV.y + pacV.height &&
            rect9.height + rect9.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect12.x < pacV.x + pacV.width &&
            rect12.x + rect12.width > pacV.x &&
            rect12.y < pacV.y + pacV.height &&
            rect12.height + rect12.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect11.x < pacV.x + pacV.width &&
            rect11.x + rect11.width > pacV.x &&
            rect11.y < pacV.y + pacV.height &&
            rect11.height + rect11.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect13.x < pacV.x + pacV.width &&
            rect13.x + rect13.width > pacV.x &&
            rect13.y < pacV.y + pacV.height &&
            rect13.height + rect13.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect14.x < pacV.x + pacV.width &&
            rect14.x + rect14.width > pacV.x &&
            rect14.y < pacV.y + pacV.height &&
            rect14.height + rect14.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect15.x < pacV.x + pacV.width &&
            rect15.x + rect15.width > pacV.x &&
            rect15.y < pacV.y + pacV.height &&
            rect15.height + rect15.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect16.x < pacV.x + pacV.width &&
            rect16.x + rect16.width > pacV.x &&
            rect16.y < pacV.y + pacV.height &&
            rect16.height + rect16.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect17.x < pacV.x + pacV.width &&
            rect17.x + rect17.width > pacV.x &&
            rect17.y < pacV.y + pacV.height &&
            rect17.height + rect17.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect18.x < pacV.x + pacV.width &&
            rect18.x + rect18.width > pacV.x &&
            rect18.y < pacV.y + pacV.height &&
            rect18.height + rect18.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect19.x < pacV.x + pacV.width &&
            rect19.x + rect19.width > pacV.x &&
            rect19.y < pacV.y + pacV.height &&
            rect19.height + rect19.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect20.x < pacV.x + pacV.width &&
            rect20.x + rect20.width > pacV.x &&
            rect20.y < pacV.y + pacV.height &&
            rect20.height + rect20.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect21.x < pacV.x + pacV.width &&
            rect21.x + rect21.width > pacV.x &&
            rect21.y < pacV.y + pacV.height &&
            rect21.height + rect21.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect22.x < pacV.x + pacV.width &&
            rect22.x + rect22.width > pacV.x &&
            rect22.y < pacV.y + pacV.height &&
            rect22.height + rect22.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect23.x < pacV.x + pacV.width &&
            rect23.x + rect23.width > pacV.x &&
            rect23.y < pacV.y + pacV.height &&
            rect23.height + rect23.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect24.x < pacV.x + pacV.width &&
            rect24.x + rect24.width > pacV.x &&
            rect24.y < pacV.y + pacV.height &&
            rect24.height + rect24.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect25.x < pacV.x + pacV.width &&
            rect25.x + rect25.width > pacV.x &&
            rect25.y < pacV.y + pacV.height &&
            rect25.height + rect25.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect26.x < pacV.x + pacV.width &&
            rect26.x + rect26.width > pacV.x &&
            rect26.y < pacV.y + pacV.height &&
            rect26.height + rect26.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect27.x < pacV.x + pacV.width &&
            rect27.x + rect27.width > pacV.x &&
            rect27.y < pacV.y + pacV.height &&
            rect27.height + rect27.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect28.x < pacV.x + pacV.width &&
            rect28.x + rect28.width > pacV.x &&
            rect28.y < pacV.y + pacV.height &&
            rect28.height + rect28.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect29.x < pacV.x + pacV.width &&
            rect29.x + rect29.width > pacV.x &&
            rect29.y < pacV.y + pacV.height &&
            rect29.height + rect29.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect30.x < pacV.x + pacV.width &&
            rect30.x + rect30.width > pacV.x &&
            rect30.y < pacV.y + pacV.height &&
            rect30.height + rect30.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect31.x < pacV.x + pacV.width &&
            rect31.x + rect31.width > pacV.x &&
            rect31.y < pacV.y + pacV.height &&
            rect31.height + rect31.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect32.x < pacV.x + pacV.width &&
            rect32.x + rect32.width > pacV.x &&
            rect32.y < pacV.y + pacV.height &&
            rect32.height + rect32.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect33.x < pacV.x + pacV.width &&
            rect33.x + rect33.width > pacV.x &&
            rect33.y < pacV.y + pacV.height &&
            rect33.height + rect33.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect34.x < pacV.x + pacV.width &&
            rect34.x + rect34.width > pacV.x &&
            rect34.y < pacV.y + pacV.height &&
            rect34.height + rect34.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect35.x < pacV.x + pacV.width &&
            rect35.x + rect35.width > pacV.x &&
            rect35.y < pacV.y + pacV.height &&
            rect35.height + rect35.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect36.x < pacV.x + pacV.width &&
            rect36.x + rect36.width > pacV.x &&
            rect36.y < pacV.y + pacV.height &&
            rect36.height + rect36.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect37.x < pacV.x + pacV.width &&
            rect37.x + rect37.width > pacV.x &&
            rect37.y < pacV.y + pacV.height &&
            rect37.height + rect37.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect38.x < pacV.x + pacV.width &&
            rect38.x + rect38.width > pacV.x &&
            rect38.y < pacV.y + pacV.height &&
            rect38.height + rect38.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect39.x < pacV.x + pacV.width &&
            rect39.x + rect39.width > pacV.x &&
            rect39.y < pacV.y + pacV.height &&
            rect39.height + rect39.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect40.x < pacV.x + pacV.width &&
            rect40.x + rect40.width > pacV.x &&
            rect40.y < pacV.y + pacV.height &&
            rect40.height + rect40.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect41.x < pacV.x + pacV.width &&
            rect41.x + rect41.width > pacV.x &&
            rect41.y < pacV.y + pacV.height &&
            rect41.height + rect41.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect42.x < pacV.x + pacV.width &&
            rect42.x + rect42.width > pacV.x &&
            rect42.y < pacV.y + pacV.height &&
            rect42.height + rect42.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect43.x < pacV.x + pacV.width &&
            rect43.x + rect43.width > pacV.x &&
            rect43.y < pacV.y + pacV.height &&
            rect43.height + rect43.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect44.x < pacV.x + pacV.width &&
            rect44.x + rect44.width > pacV.x &&
            rect44.y < pacV.y + pacV.height &&
            rect44.height + rect44.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }

        if (speed3 == 1) {
            goingLeftV = true;
            goingUpV = false;
            goingDownV = false;
            goingRightV = false;
        }
        else if (speed3 == 2) {
            goingLeftV = false;
            goingUpV = true;
            goingDownV = false;
            goingRightV = false;
        }
        else if (speed3 == 3) {
            goingLeftV = false;
            goingUpV = false;
            goingDownV = false;
            goingRightV = true;
        }
        else if (speed3 == 4) {
            goingLeftV = false;
            goingUpV = false;
            goingDownV = true;
            goingRightV = false;
        }

        if (goingUpV) {
            CHAR_START_Y5 -= 2;
            currY5 = 95;
            if(openV){
                currX5 = 0;
                openV = false;
            }
            else {
                currX5 = 31;
                openV = true;
            }
        }
        else if (goingDownV) {
            CHAR_START_Y5 += 2;
            currY5 = 63;
            if(openV){
                currX5 = 0;
                openV = false;
            }
            else {
                currX5 = 31;
                openV = true;
            }
        }
        else if (goingLeftV) {
            CHAR_START_X5 -= 2;
            currY5 = 0;
            if(openV){
                currX5 = 0;
                openV = false;
            }
            else {
                currX5 = 31;
                openV = true;
            }
        }
        else if (goingRightV) {
            CHAR_START_X5 += 2;
            currY5 = 31;
            if(openV){
                currX5 = 0;
                openV = false;
            }
            else {
                currX5 = 31;
                openV = true;
            }
        }

        if (ghostD.x < pacV.x + pacV.width &&
            ghostD.x + ghostD.width > pacV.x &&
            ghostD.y < pacV.y + pacV.height &&
            ghostD.height + ghostD.y > pacV.y) {
            gameOver = true;
        }

        //pellet
        if (pel.x < pacV.x + pacV.width &&
            pel.x + pel.width > pacV.x &&
            pel.y < pacV.y + pacV.height &&
            pel.height + pel.y > pacV.y) {
            CHAR_START_X6 = 500;
            weak = true;
            pel.x = 600;
            pel.y = 600;
            grab1 = true;
        }
        if (pel.x < pacM.x + pacM.width &&
            pel.x + pel.width > pacM.x &&
            pel.y < pacM.y + pacM.height &&
            pel.height + pel.y > pacM.y) {
            CHAR_START_X6 = 500;
            weak = true;
            pel.x = 600;
            pel.y = 600;
            grab1 = true;
        }
        if (pel.x < pacT.x + pacT.width &&
            pel.x + pel.width > pacT.x &&
            pel.y < pacT.y + pacT.height &&
            pel.height + pel.y > pacT.y) {
            CHAR_START_X6 = 500;
            weak = true;
            pel.x = 600;
            pel.y = 600;
            grab1 = true;
        }

        if (pel1.x < pacV.x + pacV.width &&
            pel1.x + pel1.width > pacV.x &&
            pel1.y < pacV.y + pacV.height &&
            pel1.height + pel1.y > pacV.y) {
            CHAR_START_X7 = 500;
            weak = true;
            pel1.x = 600;
            pel1.y = 600;
            grab2 = true;
        }
        if (pel1.x < pacM.x + pacM.width &&
            pel1.x + pel1.width > pacM.x &&
            pel1.y < pacM.y + pacM.height &&
            pel1.height + pel1.y > pacM.y) {
            CHAR_START_X7 = 500;
            weak = true;
            pel1.x = 600;
            pel1.y = 600;
            grab2 = true;
        }
        if (pel1.x < pacT.x + pacT.width &&
            pel1.x + pel1.width > pacT.x &&
            pel1.y < pacT.y + pacT.height &&
            pel1.height + pel1.y > pacT.y) {
            CHAR_START_X7 = 500;
            weak = true;
            pel1.x = 600;
            pel1.y = 600;
            grab2 = true;
        }

        if (pel2.x < pacV.x + pacV.width &&
            pel2.x + pel2.width > pacV.x &&
            pel2.y < pacV.y + pacV.height &&
            pel2.height + pel2.y > pacV.y) {
            CHAR_START_X8 = 500;
            weak = true;
            pel2.x = 600;
            pel2.y = 600;
            grab3 = true;
        }
        if (pel2.x < pacM.x + pacM.width &&
            pel2.x + pel2.width > pacM.x &&
            pel2.y < pacM.y + pacM.height &&
            pel2.height + pel2.y > pacM.y) {
            CHAR_START_X8 = 500;
            weak = true;
            pel2.x = 600;
            pel2.y = 600;
            grab3 = true;
        }
        if (pel2.x < pacT.x + pacT.width &&
            pel2.x + pel2.width > pacT.x &&
            pel2.y < pacT.y + pacT.height &&
            pel2.height + pel2.y > pacT.y) {
            CHAR_START_X8 = 500;
            weak = true;
            pel2.x = 600;
            pel2.y = 600;
            grab3 = true;
        }

        if (pel3.x < pacV.x + pacV.width &&
            pel3.x + pel3.width > pacV.x &&
            pel3.y < pacV.y + pacV.height &&
            pel3.height + pel3.y > pacV.y) {
            CHAR_START_X9 = 500;
            weak = true;
            pel3.x = 600;
            pel3.y = 600;
            grab4 = true;
        }
        if (pel3.x < pacM.x + pacM.width &&
            pel3.x + pel3.width > pacM.x &&
            pel3.y < pacM.y + pacM.height &&
            pel3.height + pel3.y > pacM.y) {
            CHAR_START_X9 = 500;
            weak = true;
            pel3.x = 600;
            pel3.y = 600;
            grab4 = true;
        }
        if (pel3.x < pacT.x + pacT.width &&
            pel3.x + pel3.width > pacT.x &&
            pel3.y < pacT.y + pacT.height &&
            pel3.height + pel3.y > pacT.y) {
            CHAR_START_X9 = 500;
            weak = true;
            pel3.x = 600;
            pel3.y = 600;
            grab4 = true;
        }
    }
    else{//normal game state
        currX = 0;
        ctx.drawImage(charImage3,
            10, 5,
            300, 300,
            0, 0,
            10 * CHAR_WIDTH, 10 * CHAR_HEIGHT
        );

        ctx.drawImage(charImage8,
            currX9, 0,
            CHAR_WIDTH, CHAR_HEIGHT,
            1, 253,
            3 * CHAR_WIDTH, 2.9 * CHAR_HEIGHT
        );

        ctx.drawImage(charImage4,
            0, 0,
            300, 300,
            CHAR_START_X6, CHAR_START_Y6,
            1.5 * CHAR_WIDTH, 1.5 * CHAR_HEIGHT
        );

        ctx.drawImage(charImage4,
            0, 0,
            300, 300,
            CHAR_START_X8, CHAR_START_Y8,
            1.5 * CHAR_WIDTH, 1.5 * CHAR_HEIGHT
        );

        ctx.drawImage(charImage4,
            0, 0,
            300, 300,
            CHAR_START_X9, CHAR_START_Y9,
            1.5 * CHAR_WIDTH, 1.5 * CHAR_HEIGHT
        );

        ctx.drawImage(charImage4,
            0, 0,
            300, 300,
            CHAR_START_X7, CHAR_START_Y7,
            1.5 * CHAR_WIDTH, 1.5 * CHAR_HEIGHT
        );

        ctx.drawImage(charImage,
            currX2, currY,
            CHAR_WIDTH, CHAR_HEIGHT,
            CHAR_START_X, CHAR_START_Y,
            .3 * CHAR_WIDTH, .3 * CHAR_HEIGHT
        );

        ctx.drawImage(charImage2,
            currX3, currY3,
            CHAR_WIDTH, CHAR_HEIGHT,
            CHAR_START_X2, CHAR_START_Y2,
            .3 * CHAR_WIDTH, .3 * CHAR_HEIGHT
        );

        ctx.drawImage(charImage2,
            currX4, currY4,
            CHAR_WIDTH, CHAR_HEIGHT,
            CHAR_START_X4, CHAR_START_Y4,
            .3 * CHAR_WIDTH, .3 * CHAR_HEIGHT
        );

        ctx.drawImage(charImage2,
            currX5, currY5,
            CHAR_WIDTH, CHAR_HEIGHT,
            CHAR_START_X5, CHAR_START_Y5,
            .3 * CHAR_WIDTH, .3 * CHAR_HEIGHT
        );

        if (right) CHAR_START_X += 2;
        else if (left) CHAR_START_X -= 2;
        else if (down) CHAR_START_Y += 2;
        else if (up) CHAR_START_Y -= 2;

        ghostD.x = CHAR_START_X;
        ghostD.y = CHAR_START_Y;
        pacM.x = CHAR_START_X2;
        pacM.y = CHAR_START_Y2;
        pacT.x = CHAR_START_X4;
        pacT.y = CHAR_START_Y4;
        pacV.x = CHAR_START_X5;
        pacV.y = CHAR_START_Y5;

        if (CHAR_START_X < 0) {
            CHAR_START_X = 290;
        }
        if (CHAR_START_X > 301) {
            CHAR_START_X = 0;
        }

        if (rect1.x < ghostD.x + ghostD.width &&
            rect1.x + rect1.width > ghostD.x &&
            rect1.y < ghostD.y + ghostD.height &&
            rect1.height + rect1.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect2.x < ghostD.x + ghostD.width &&
            rect2.x + rect2.width > ghostD.x &&
            rect2.y < ghostD.y + ghostD.height &&
            rect2.height + rect2.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect3.x < ghostD.x + ghostD.width &&
            rect3.x + rect3.width > ghostD.x &&
            rect3.y < ghostD.y + ghostD.height &&
            rect3.height + rect3.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect4.x < ghostD.x + ghostD.width &&
            rect4.x + rect4.width > ghostD.x &&
            rect4.y < ghostD.y + ghostD.height &&
            rect4.height + rect4.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect5.x < ghostD.x + ghostD.width &&
            rect5.x + rect5.width > ghostD.x &&
            rect5.y < ghostD.y + ghostD.height &&
            rect5.height + rect5.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect6.x < ghostD.x + ghostD.width &&
            rect6.x + rect6.width > ghostD.x &&
            rect6.y < ghostD.y + ghostD.height &&
            rect6.height + rect6.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect7.x < ghostD.x + ghostD.width &&
            rect7.x + rect7.width > ghostD.x &&
            rect7.y < ghostD.y + ghostD.height &&
            rect7.height + rect7.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect8.x < ghostD.x + ghostD.width &&
            rect8.x + rect8.width > ghostD.x &&
            rect8.y < ghostD.y + ghostD.height &&
            rect8.height + rect8.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect10.x < ghostD.x + ghostD.width &&
            rect10.x + rect10.width > ghostD.x &&
            rect10.y < ghostD.y + ghostD.height &&
            rect10.height + rect10.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect9.x < ghostD.x + ghostD.width &&
            rect9.x + rect9.width > ghostD.x &&
            rect9.y < ghostD.y + ghostD.height &&
            rect9.height + rect9.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect12.x < ghostD.x + ghostD.width &&
            rect12.x + rect12.width > ghostD.x &&
            rect12.y < ghostD.y + ghostD.height &&
            rect12.height + rect12.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect11.x < ghostD.x + ghostD.width &&
            rect11.x + rect11.width > ghostD.x &&
            rect11.y < ghostD.y + ghostD.height &&
            rect11.height + rect11.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect13.x < ghostD.x + ghostD.width &&
            rect13.x + rect13.width > ghostD.x &&
            rect13.y < ghostD.y + ghostD.height &&
            rect13.height + rect13.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect14.x < ghostD.x + ghostD.width &&
            rect14.x + rect14.width > ghostD.x &&
            rect14.y < ghostD.y + ghostD.height &&
            rect14.height + rect14.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect15.x < ghostD.x + ghostD.width &&
            rect15.x + rect15.width > ghostD.x &&
            rect15.y < ghostD.y + ghostD.height &&
            rect15.height + rect15.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect16.x < ghostD.x + ghostD.width &&
            rect16.x + rect16.width > ghostD.x &&
            rect16.y < ghostD.y + ghostD.height &&
            rect16.height + rect16.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect17.x < ghostD.x + ghostD.width &&
            rect17.x + rect17.width > ghostD.x &&
            rect17.y < ghostD.y + ghostD.height &&
            rect17.height + rect17.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect18.x < ghostD.x + ghostD.width &&
            rect18.x + rect18.width > ghostD.x &&
            rect18.y < ghostD.y + ghostD.height &&
            rect18.height + rect18.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect19.x < ghostD.x + ghostD.width &&
            rect19.x + rect19.width > ghostD.x &&
            rect19.y < ghostD.y + ghostD.height &&
            rect19.height + rect19.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect20.x < ghostD.x + ghostD.width &&
            rect20.x + rect20.width > ghostD.x &&
            rect20.y < ghostD.y + ghostD.height &&
            rect20.height + rect20.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect21.x < ghostD.x + ghostD.width &&
            rect21.x + rect21.width > ghostD.x &&
            rect21.y < ghostD.y + ghostD.height &&
            rect21.height + rect21.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect22.x < ghostD.x + ghostD.width &&
            rect22.x + rect22.width > ghostD.x &&
            rect22.y < ghostD.y + ghostD.height &&
            rect22.height + rect22.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect23.x < ghostD.x + ghostD.width &&
            rect23.x + rect23.width > ghostD.x &&
            rect23.y < ghostD.y + ghostD.height &&
            rect23.height + rect23.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect24.x < ghostD.x + ghostD.width &&
            rect24.x + rect24.width > ghostD.x &&
            rect24.y < ghostD.y + ghostD.height &&
            rect24.height + rect24.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect25.x < ghostD.x + ghostD.width &&
            rect25.x + rect25.width > ghostD.x &&
            rect25.y < ghostD.y + ghostD.height &&
            rect25.height + rect25.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect26.x < ghostD.x + ghostD.width &&
            rect26.x + rect26.width > ghostD.x &&
            rect26.y < ghostD.y + ghostD.height &&
            rect26.height + rect26.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect27.x < ghostD.x + ghostD.width &&
            rect27.x + rect27.width > ghostD.x &&
            rect27.y < ghostD.y + ghostD.height &&
            rect27.height + rect27.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect28.x < ghostD.x + ghostD.width &&
            rect28.x + rect28.width > ghostD.x &&
            rect28.y < ghostD.y + ghostD.height &&
            rect28.height + rect28.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect29.x < ghostD.x + ghostD.width &&
            rect29.x + rect29.width > ghostD.x &&
            rect29.y < ghostD.y + ghostD.height &&
            rect29.height + rect29.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect30.x < ghostD.x + ghostD.width &&
            rect30.x + rect30.width > ghostD.x &&
            rect30.y < ghostD.y + ghostD.height &&
            rect30.height + rect30.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect31.x < ghostD.x + ghostD.width &&
            rect31.x + rect31.width > ghostD.x &&
            rect31.y < ghostD.y + ghostD.height &&
            rect31.height + rect31.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect32.x < ghostD.x + ghostD.width &&
            rect32.x + rect32.width > ghostD.x &&
            rect32.y < ghostD.y + ghostD.height &&
            rect32.height + rect32.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect33.x < ghostD.x + ghostD.width &&
            rect33.x + rect33.width > ghostD.x &&
            rect33.y < ghostD.y + ghostD.height &&
            rect33.height + rect33.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect34.x < ghostD.x + ghostD.width &&
            rect34.x + rect34.width > ghostD.x &&
            rect34.y < ghostD.y + ghostD.height &&
            rect34.height + rect34.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect35.x < ghostD.x + ghostD.width &&
            rect35.x + rect35.width > ghostD.x &&
            rect35.y < ghostD.y + ghostD.height &&
            rect35.height + rect35.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect36.x < ghostD.x + ghostD.width &&
            rect36.x + rect36.width > ghostD.x &&
            rect36.y < ghostD.y + ghostD.height &&
            rect36.height + rect36.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect37.x < ghostD.x + ghostD.width &&
            rect37.x + rect37.width > ghostD.x &&
            rect37.y < ghostD.y + ghostD.height &&
            rect37.height + rect37.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect38.x < ghostD.x + ghostD.width &&
            rect38.x + rect38.width > ghostD.x &&
            rect38.y < ghostD.y + ghostD.height &&
            rect38.height + rect38.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect39.x < ghostD.x + ghostD.width &&
            rect39.x + rect39.width > ghostD.x &&
            rect39.y < ghostD.y + ghostD.height &&
            rect39.height + rect39.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect40.x < ghostD.x + ghostD.width &&
            rect40.x + rect40.width > ghostD.x &&
            rect40.y < ghostD.y + ghostD.height &&
            rect40.height + rect40.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect41.x < ghostD.x + ghostD.width &&
            rect41.x + rect41.width > ghostD.x &&
            rect41.y < ghostD.y + ghostD.height &&
            rect41.height + rect41.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect42.x < ghostD.x + ghostD.width &&
            rect42.x + rect42.width > ghostD.x &&
            rect42.y < ghostD.y + ghostD.height &&
            rect42.height + rect42.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect43.x < ghostD.x + ghostD.width &&
            rect43.x + rect43.width > ghostD.x &&
            rect43.y < ghostD.y + ghostD.height &&
            rect43.height + rect43.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }
        if (rect44.x < ghostD.x + ghostD.width &&
            rect44.x + rect44.width > ghostD.x &&
            rect44.y < ghostD.y + ghostD.height &&
            rect44.height + rect44.y > ghostD.y) {
            if (up) {
                CHAR_START_Y += 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (down) {
                CHAR_START_Y -= 2;
                if (right) {
                    CHAR_START_X -= 2;
                }
                if (left) {
                    CHAR_START_X += 2;
                }
            }
            else if (right) {
                CHAR_START_X -= 2;
                if (up) {
                    CHAR_START_Y -= 2;
                }
                if (down) {
                    CHAR_START_Y += 2;
                }
            }
            else if (left) {
                CHAR_START_X += 2;
                if (up) {
                    CHAR_START_Y += 2;
                }
                if (down) {
                    CHAR_START_Y -= 2;
                }
            }
        }

        //PACMAN COLLISION
        if (rect1.x < pacM.x + pacM.width &&
            rect1.x + rect1.width > pacM.x &&
            rect1.y < pacM.y + pacM.height &&
            rect1.height + rect1.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect2.x < pacM.x + pacM.width &&
            rect2.x + rect2.width > pacM.x &&
            rect2.y < pacM.y + pacM.height &&
            rect2.height + rect2.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect3.x < pacM.x + pacM.width &&
            rect3.x + rect3.width > pacM.x &&
            rect3.y < pacM.y + pacM.height &&
            rect3.height + rect3.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect4.x < pacM.x + pacM.width &&
            rect4.x + rect4.width > pacM.x &&
            rect4.y < pacM.y + pacM.height &&
            rect4.height + rect4.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect5.x < pacM.x + pacM.width &&
            rect5.x + rect5.width > pacM.x &&
            rect5.y < pacM.y + pacM.height &&
            rect5.height + rect5.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect6.x < pacM.x + pacM.width &&
            rect6.x + rect6.width > pacM.x &&
            rect6.y < pacM.y + pacM.height &&
            rect6.height + rect6.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect7.x < pacM.x + pacM.width &&
            rect7.x + rect7.width > pacM.x &&
            rect7.y < pacM.y + pacM.height &&
            rect7.height + rect7.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect8.x < pacM.x + pacM.width &&
            rect8.x + rect8.width > pacM.x &&
            rect8.y < pacM.y + pacM.height &&
            rect8.height + rect8.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect10.x < pacM.x + pacM.width &&
            rect10.x + rect10.width > pacM.x &&
            rect10.y < pacM.y + pacM.height &&
            rect10.height + rect10.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect9.x < pacM.x + pacM.width &&
            rect9.x + rect9.width > pacM.x &&
            rect9.y < pacM.y + pacM.height &&
            rect9.height + rect9.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect12.x < pacM.x + pacM.width &&
            rect12.x + rect12.width > pacM.x &&
            rect12.y < pacM.y + pacM.height &&
            rect12.height + rect12.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect11.x < pacM.x + pacM.width &&
            rect11.x + rect11.width > pacM.x &&
            rect11.y < pacM.y + pacM.height &&
            rect11.height + rect11.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect13.x < pacM.x + pacM.width &&
            rect13.x + rect13.width > pacM.x &&
            rect13.y < pacM.y + pacM.height &&
            rect13.height + rect13.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect14.x < pacM.x + pacM.width &&
            rect14.x + rect14.width > pacM.x &&
            rect14.y < pacM.y + pacM.height &&
            rect14.height + rect14.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect15.x < pacM.x + pacM.width &&
            rect15.x + rect15.width > pacM.x &&
            rect15.y < pacM.y + pacM.height &&
            rect15.height + rect15.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect16.x < pacM.x + pacM.width &&
            rect16.x + rect16.width > pacM.x &&
            rect16.y < pacM.y + pacM.height &&
            rect16.height + rect16.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect17.x < pacM.x + pacM.width &&
            rect17.x + rect17.width > pacM.x &&
            rect17.y < pacM.y + pacM.height &&
            rect17.height + rect17.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect18.x < pacM.x + pacM.width &&
            rect18.x + rect18.width > pacM.x &&
            rect18.y < pacM.y + pacM.height &&
            rect18.height + rect18.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect19.x < pacM.x + pacM.width &&
            rect19.x + rect19.width > pacM.x &&
            rect19.y < pacM.y + pacM.height &&
            rect19.height + rect19.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect20.x < pacM.x + pacM.width &&
            rect20.x + rect20.width > pacM.x &&
            rect20.y < pacM.y + pacM.height &&
            rect20.height + rect20.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect21.x < pacM.x + pacM.width &&
            rect21.x + rect21.width > pacM.x &&
            rect21.y < pacM.y + pacM.height &&
            rect21.height + rect21.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect22.x < pacM.x + pacM.width &&
            rect22.x + rect22.width > pacM.x &&
            rect22.y < pacM.y + pacM.height &&
            rect22.height + rect22.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect23.x < pacM.x + pacM.width &&
            rect23.x + rect23.width > pacM.x &&
            rect23.y < pacM.y + pacM.height &&
            rect23.height + rect23.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect24.x < pacM.x + pacM.width &&
            rect24.x + rect24.width > pacM.x &&
            rect24.y < pacM.y + pacM.height &&
            rect24.height + rect24.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect25.x < pacM.x + pacM.width &&
            rect25.x + rect25.width > pacM.x &&
            rect25.y < pacM.y + pacM.height &&
            rect25.height + rect25.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect26.x < pacM.x + pacM.width &&
            rect26.x + rect26.width > pacM.x &&
            rect26.y < pacM.y + pacM.height &&
            rect26.height + rect26.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect27.x < pacM.x + pacM.width &&
            rect27.x + rect27.width > pacM.x &&
            rect27.y < pacM.y + pacM.height &&
            rect27.height + rect27.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect28.x < pacM.x + pacM.width &&
            rect28.x + rect28.width > pacM.x &&
            rect28.y < pacM.y + pacM.height &&
            rect28.height + rect28.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect29.x < pacM.x + pacM.width &&
            rect29.x + rect29.width > pacM.x &&
            rect29.y < pacM.y + pacM.height &&
            rect29.height + rect29.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect30.x < pacM.x + pacM.width &&
            rect30.x + rect30.width > pacM.x &&
            rect30.y < pacM.y + pacM.height &&
            rect30.height + rect30.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect31.x < pacM.x + pacM.width &&
            rect31.x + rect31.width > pacM.x &&
            rect31.y < pacM.y + pacM.height &&
            rect31.height + rect31.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect32.x < pacM.x + pacM.width &&
            rect32.x + rect32.width > pacM.x &&
            rect32.y < pacM.y + pacM.height &&
            rect32.height + rect32.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect33.x < pacM.x + pacM.width &&
            rect33.x + rect33.width > pacM.x &&
            rect33.y < pacM.y + pacM.height &&
            rect33.height + rect33.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect34.x < pacM.x + pacM.width &&
            rect34.x + rect34.width > pacM.x &&
            rect34.y < pacM.y + pacM.height &&
            rect34.height + rect34.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect35.x < pacM.x + pacM.width &&
            rect35.x + rect35.width > pacM.x &&
            rect35.y < pacM.y + pacM.height &&
            rect35.height + rect35.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect36.x < pacM.x + pacM.width &&
            rect36.x + rect36.width > pacM.x &&
            rect36.y < pacM.y + pacM.height &&
            rect36.height + rect36.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect37.x < pacM.x + pacM.width &&
            rect37.x + rect37.width > pacM.x &&
            rect37.y < pacM.y + pacM.height &&
            rect37.height + rect37.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect38.x < pacM.x + pacM.width &&
            rect38.x + rect38.width > pacM.x &&
            rect38.y < pacM.y + pacM.height &&
            rect38.height + rect38.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect39.x < pacM.x + pacM.width &&
            rect39.x + rect39.width > pacM.x &&
            rect39.y < pacM.y + pacM.height &&
            rect39.height + rect39.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect40.x < pacM.x + pacM.width &&
            rect40.x + rect40.width > pacM.x &&
            rect40.y < pacM.y + pacM.height &&
            rect40.height + rect40.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect41.x < pacM.x + pacM.width &&
            rect41.x + rect41.width > pacM.x &&
            rect41.y < pacM.y + pacM.height &&
            rect41.height + rect41.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect42.x < pacM.x + pacM.width &&
            rect42.x + rect42.width > pacM.x &&
            rect42.y < pacM.y + pacM.height &&
            rect42.height + rect42.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect43.x < pacM.x + pacM.width &&
            rect43.x + rect43.width > pacM.x &&
            rect43.y < pacM.y + pacM.height &&
            rect43.height + rect43.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }
        if (rect44.x < pacM.x + pacM.width &&
            rect44.x + rect44.width > pacM.x &&
            rect44.y < pacM.y + pacM.height &&
            rect44.height + rect44.y > pacM.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed = Math.floor(Math.random() * (max - min)) + min;
            if (goingUp) {
                if (speed == 2) {
                    speed++;
                }
                CHAR_START_Y2 += 6;
            }
            else if (goingDown) {
                if (speed == 4) {
                    speed == 1;
                }
                CHAR_START_Y2 -= 6;
            }
            else if (goingRight) {
                if (speed == 3) {
                    speed++;
                }
                CHAR_START_X2 -= 6;
            }
            else if (goingLeft) {
                if (speed == 1) {
                    speed++;
                }
                CHAR_START_X2 += 6;
            }
        }

        if (speed == 1) {
            goingLeft = true;
            goingUp = false;
            goingDown = false;
            goingRight = false;
        }
        else if (speed == 2) {
            goingLeft = false;
            goingUp = true;
            goingDown = false;
            goingRight = false;
        }
        else if (speed == 3) {
            goingLeft = false;
            goingUp = false;
            goingDown = false;
            goingRight = true;
        }
        else if (speed == 4) {
            goingLeft = false;
            goingUp = false;
            goingDown = true;
            goingRight = false;
        }

        if (goingUp) {
            CHAR_START_Y2 -= 2;
            currY3 = 95;
            if(open){
                currX3 = 0;
                open = false;
            }
            else {
                currX3 = 31;
                open = true;
            }
        }
        else if (goingDown) {
            CHAR_START_Y2 += 2;
            currY3 = 63;
            if(open){
                currX3 = 0;
                open = false;
            }
            else {
                currX3 = 31;
                open = true;
            }
        }
        else if (goingLeft) {
            CHAR_START_X2 -= 2;
            currY3 = 0;
            if(open){
                currX3 = 0;
                open = false;
            }
            else {
                currX3 = 31;
                open = true;
            }
        }
        else if (goingRight) {
            CHAR_START_X2 += 2;
            currY3 = 31;
            if(open){
                currX3 = 0;
                open = false;
            }
            else {
                currX3 = 31;
                open = true;
            }
        }
        else{
            currY3 = 0;
            currX3 += 32;
            if(currX3 >= 128){
                currX3 = 0;
            }
        }

        if (ghostD.x < pacM.x + pacM.width &&
            ghostD.x + ghostD.width > pacM.x &&
            ghostD.y < pacM.y + pacM.height &&
            ghostD.height + ghostD.y > pacM.y) {
            //CHAR_START_X2 = 1000;
            goingUp = false;
            goingDown = false;
            goingRight = false;
            goingLeft = false;
            speed = 0;
            check += 1;
            hit3 = true;
            if(check == 1){
                currX9 += 31;
            }
            tell = true;
            counter += 1;
            if(counter == 2){
                winner == true;
            }
        }

        //Pacman 2

        if (rect1.x < pacT.x + pacT.width &&
            rect1.x + rect1.width > pacT.x &&
            rect1.y < pacT.y + pacT.height &&
            rect1.height + rect1.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect2.x < pacT.x + pacT.width &&
            rect2.x + rect2.width > pacT.x &&
            rect2.y < pacT.y + pacT.height &&
            rect2.height + rect2.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect3.x < pacT.x + pacT.width &&
            rect3.x + rect3.width > pacT.x &&
            rect3.y < pacT.y + pacT.height &&
            rect3.height + rect3.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect4.x < pacT.x + pacT.width &&
            rect4.x + rect4.width > pacT.x &&
            rect4.y < pacT.y + pacT.height &&
            rect4.height + rect4.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect5.x < pacT.x + pacT.width &&
            rect5.x + rect5.width > pacT.x &&
            rect5.y < pacT.y + pacT.height &&
            rect5.height + rect5.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect6.x < pacT.x + pacT.width &&
            rect6.x + rect6.width > pacT.x &&
            rect6.y < pacT.y + pacT.height &&
            rect6.height + rect6.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect7.x < pacT.x + pacT.width &&
            rect7.x + rect7.width > pacT.x &&
            rect7.y < pacT.y + pacT.height &&
            rect7.height + rect7.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect8.x < pacT.x + pacT.width &&
            rect8.x + rect8.width > pacT.x &&
            rect8.y < pacT.y + pacT.height &&
            rect8.height + rect8.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect10.x < pacT.x + pacT.width &&
            rect10.x + rect10.width > pacT.x &&
            rect10.y < pacT.y + pacT.height &&
            rect10.height + rect10.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect9.x < pacT.x + pacT.width &&
            rect9.x + rect9.width > pacT.x &&
            rect9.y < pacT.y + pacT.height &&
            rect9.height + rect9.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect12.x < pacT.x + pacT.width &&
            rect12.x + rect12.width > pacT.x &&
            rect12.y < pacT.y + pacT.height &&
            rect12.height + rect12.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect11.x < pacT.x + pacT.width &&
            rect11.x + rect11.width > pacT.x &&
            rect11.y < pacT.y + pacT.height &&
            rect11.height + rect11.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect13.x < pacT.x + pacT.width &&
            rect13.x + rect13.width > pacT.x &&
            rect13.y < pacT.y + pacT.height &&
            rect13.height + rect13.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect14.x < pacT.x + pacT.width &&
            rect14.x + rect14.width > pacT.x &&
            rect14.y < pacT.y + pacT.height &&
            rect14.height + rect14.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect15.x < pacT.x + pacT.width &&
            rect15.x + rect15.width > pacT.x &&
            rect15.y < pacT.y + pacT.height &&
            rect15.height + rect15.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect16.x < pacT.x + pacT.width &&
            rect16.x + rect16.width > pacT.x &&
            rect16.y < pacT.y + pacT.height &&
            rect16.height + rect16.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect17.x < pacT.x + pacT.width &&
            rect17.x + rect17.width > pacT.x &&
            rect17.y < pacT.y + pacT.height &&
            rect17.height + rect17.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect18.x < pacT.x + pacT.width &&
            rect18.x + rect18.width > pacT.x &&
            rect18.y < pacT.y + pacT.height &&
            rect18.height + rect18.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect19.x < pacT.x + pacT.width &&
            rect19.x + rect19.width > pacT.x &&
            rect19.y < pacT.y + pacT.height &&
            rect19.height + rect19.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect20.x < pacT.x + pacT.width &&
            rect20.x + rect20.width > pacT.x &&
            rect20.y < pacT.y + pacT.height &&
            rect20.height + rect20.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect21.x < pacT.x + pacT.width &&
            rect21.x + rect21.width > pacT.x &&
            rect21.y < pacT.y + pacT.height &&
            rect21.height + rect21.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect22.x < pacT.x + pacT.width &&
            rect22.x + rect22.width > pacT.x &&
            rect22.y < pacT.y + pacT.height &&
            rect22.height + rect22.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect23.x < pacT.x + pacT.width &&
            rect23.x + rect23.width > pacT.x &&
            rect23.y < pacT.y + pacT.height &&
            rect23.height + rect23.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect24.x < pacT.x + pacT.width &&
            rect24.x + rect24.width > pacT.x &&
            rect24.y < pacT.y + pacT.height &&
            rect24.height + rect24.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect25.x < pacT.x + pacT.width &&
            rect25.x + rect25.width > pacT.x &&
            rect25.y < pacT.y + pacT.height &&
            rect25.height + rect25.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect26.x < pacT.x + pacT.width &&
            rect26.x + rect26.width > pacT.x &&
            rect26.y < pacT.y + pacT.height &&
            rect26.height + rect26.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect27.x < pacT.x + pacT.width &&
            rect27.x + rect27.width > pacT.x &&
            rect27.y < pacT.y + pacT.height &&
            rect27.height + rect27.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect28.x < pacT.x + pacT.width &&
            rect28.x + rect28.width > pacT.x &&
            rect28.y < pacT.y + pacT.height &&
            rect28.height + rect28.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect29.x < pacT.x + pacT.width &&
            rect29.x + rect29.width > pacT.x &&
            rect29.y < pacT.y + pacT.height &&
            rect29.height + rect29.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect30.x < pacT.x + pacT.width &&
            rect30.x + rect30.width > pacT.x &&
            rect30.y < pacT.y + pacT.height &&
            rect30.height + rect30.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect31.x < pacT.x + pacT.width &&
            rect31.x + rect31.width > pacT.x &&
            rect31.y < pacT.y + pacT.height &&
            rect31.height + rect31.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect32.x < pacT.x + pacT.width &&
            rect32.x + rect32.width > pacT.x &&
            rect32.y < pacT.y + pacT.height &&
            rect32.height + rect32.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect33.x < pacT.x + pacT.width &&
            rect33.x + rect33.width > pacT.x &&
            rect33.y < pacT.y + pacT.height &&
            rect33.height + rect33.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect34.x < pacT.x + pacT.width &&
            rect34.x + rect34.width > pacT.x &&
            rect34.y < pacT.y + pacT.height &&
            rect34.height + rect34.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect35.x < pacT.x + pacT.width &&
            rect35.x + rect35.width > pacT.x &&
            rect35.y < pacT.y + pacT.height &&
            rect35.height + rect35.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect36.x < pacT.x + pacT.width &&
            rect36.x + rect36.width > pacT.x &&
            rect36.y < pacT.y + pacT.height &&
            rect36.height + rect36.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect37.x < pacT.x + pacT.width &&
            rect37.x + rect37.width > pacT.x &&
            rect37.y < pacT.y + pacT.height &&
            rect37.height + rect37.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect38.x < pacT.x + pacT.width &&
            rect38.x + rect38.width > pacT.x &&
            rect38.y < pacT.y + pacT.height &&
            rect38.height + rect38.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect39.x < pacT.x + pacT.width &&
            rect39.x + rect39.width > pacT.x &&
            rect39.y < pacT.y + pacT.height &&
            rect39.height + rect39.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect40.x < pacT.x + pacT.width &&
            rect40.x + rect40.width > pacT.x &&
            rect40.y < pacT.y + pacT.height &&
            rect40.height + rect40.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect41.x < pacT.x + pacT.width &&
            rect41.x + rect41.width > pacT.x &&
            rect41.y < pacT.y + pacT.height &&
            rect41.height + rect41.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect42.x < pacT.x + pacT.width &&
            rect42.x + rect42.width > pacT.x &&
            rect42.y < pacT.y + pacT.height &&
            rect42.height + rect42.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect43.x < pacT.x + pacT.width &&
            rect43.x + rect43.width > pacT.x &&
            rect43.y < pacT.y + pacT.height &&
            rect43.height + rect43.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }
        if (rect44.x < pacT.x + pacT.width &&
            rect44.x + rect44.width > pacT.x &&
            rect44.y < pacT.y + pacT.height &&
            rect44.height + rect44.y > pacT.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed2 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpT) {
                if (speed2 == 2) {
                    speed2++;
                }
                CHAR_START_Y4 += 6;
            }
            else if (goingDownT) {
                if (speed2 == 4) {
                    speed2 == 1;
                }
                CHAR_START_Y4 -= 6;
            }
            else if (goingRightT) {
                if (speed2 == 3) {
                    speed2++;
                }
                CHAR_START_X4 -= 6;
            }
            else if (goingLeftT) {
                if (speed2 == 1) {
                    speed2++;
                }
                CHAR_START_X4 += 6;
            }
        }

        if (speed2 == 1) {
            goingLeftT = true;
            goingUpT = false;
            goingDownT = false;
            goingRightT = false;
        }
        else if (speed2 == 2) {
            goingLeftT = false;
            goingUpT = true;
            goingDownT = false;
            goingRightT = false;

        }
        else if (speed2 == 3) {
            goingLeftT = false;
            goingUpT = false;
            goingDownT = false;
            goingRightT = true;
        }
        else if (speed2 == 4) {
            goingLeftT = false;
            goingUpT = false;
            goingDownT = true;
            goingRightT = false;
        }

        if (goingUpT) {
            CHAR_START_Y4 -= 2;
            currY4 = 95;
            if(openT){
                currX4 = 0;
                openT = false;
            }
            else {
                currX4 = 31;
                openT = true;
            }
        }
        else if (goingDownT) {
            CHAR_START_Y4 += 2;
            currY4 = 63;
            if(openT){
                currX4 = 0;
                openT = false;
            }
            else {
                currX4 = 31;
                openT = true;
            }
        }
        else if (goingLeftT) {
            CHAR_START_X4 -= 2;
            currY4 = 0;
            if(openT){
                currX4 = 0;
                openT = false;
            }
            else {
                currX4 = 31;
                openT = true;
            }
        }
        else if (goingRightT) {
            CHAR_START_X4 += 2;
            currY4 = 31;
            if(openT){
                currX4 = 0;
                openT = false;
            }
            else {
                currX4 = 31;
                openT = true;
            }
        }
        else{
            currY4 = 0;
            currX4 += 32;
            if(currX4 >= 128){
                currX4 = 0;
            }
        }

        if (ghostD.x < pacT.x + pacT.width &&
            ghostD.x + ghostD.width > pacT.x &&
            ghostD.y < pacT.y + pacT.height &&
            ghostD.height + ghostD.y > pacT.y) {
            //CHAR_START_X4 = 1000;
            goingUpT = false;
            goingDownT = false;
            goingRightT = false;
            goingLeftT = false;
            speed2 = 0;
            hit1 = true;
            checkT += 1;
            if(checkT == 1){
                currX9 += 31;
            }
            tellT = true;
            counter += 1;
            if(counter == 2){
                winner == true;
            }
        }

        //Pacman 3

        if (rect1.x < pacV.x + pacV.width &&
            rect1.x + rect1.width > pacV.x &&
            rect1.y < pacV.y + pacV.height &&
            rect1.height + rect1.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect2.x < pacV.x + pacV.width &&
            rect2.x + rect2.width > pacV.x &&
            rect2.y < pacV.y + pacV.height &&
            rect2.height + rect2.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect3.x < pacV.x + pacV.width &&
            rect3.x + rect3.width > pacV.x &&
            rect3.y < pacV.y + pacV.height &&
            rect3.height + rect3.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect4.x < pacV.x + pacV.width &&
            rect4.x + rect4.width > pacV.x &&
            rect4.y < pacV.y + pacV.height &&
            rect4.height + rect4.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect5.x < pacV.x + pacV.width &&
            rect5.x + rect5.width > pacV.x &&
            rect5.y < pacV.y + pacV.height &&
            rect5.height + rect5.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect6.x < pacV.x + pacV.width &&
            rect6.x + rect6.width > pacV.x &&
            rect6.y < pacV.y + pacV.height &&
            rect6.height + rect6.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect7.x < pacV.x + pacV.width &&
            rect7.x + rect7.width > pacV.x &&
            rect7.y < pacV.y + pacV.height &&
            rect7.height + rect7.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect8.x < pacV.x + pacV.width &&
            rect8.x + rect8.width > pacV.x &&
            rect8.y < pacV.y + pacV.height &&
            rect8.height + rect8.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect10.x < pacV.x + pacV.width &&
            rect10.x + rect10.width > pacV.x &&
            rect10.y < pacV.y + pacV.height &&
            rect10.height + rect10.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect9.x < pacV.x + pacV.width &&
            rect9.x + rect9.width > pacV.x &&
            rect9.y < pacV.y + pacV.height &&
            rect9.height + rect9.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect12.x < pacV.x + pacV.width &&
            rect12.x + rect12.width > pacV.x &&
            rect12.y < pacV.y + pacV.height &&
            rect12.height + rect12.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect11.x < pacV.x + pacV.width &&
            rect11.x + rect11.width > pacV.x &&
            rect11.y < pacV.y + pacV.height &&
            rect11.height + rect11.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect13.x < pacV.x + pacV.width &&
            rect13.x + rect13.width > pacV.x &&
            rect13.y < pacV.y + pacV.height &&
            rect13.height + rect13.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect14.x < pacV.x + pacV.width &&
            rect14.x + rect14.width > pacV.x &&
            rect14.y < pacV.y + pacV.height &&
            rect14.height + rect14.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect15.x < pacV.x + pacV.width &&
            rect15.x + rect15.width > pacV.x &&
            rect15.y < pacV.y + pacV.height &&
            rect15.height + rect15.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect16.x < pacV.x + pacV.width &&
            rect16.x + rect16.width > pacV.x &&
            rect16.y < pacV.y + pacV.height &&
            rect16.height + rect16.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect17.x < pacV.x + pacV.width &&
            rect17.x + rect17.width > pacV.x &&
            rect17.y < pacV.y + pacV.height &&
            rect17.height + rect17.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect18.x < pacV.x + pacV.width &&
            rect18.x + rect18.width > pacV.x &&
            rect18.y < pacV.y + pacV.height &&
            rect18.height + rect18.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect19.x < pacV.x + pacV.width &&
            rect19.x + rect19.width > pacV.x &&
            rect19.y < pacV.y + pacV.height &&
            rect19.height + rect19.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect20.x < pacV.x + pacV.width &&
            rect20.x + rect20.width > pacV.x &&
            rect20.y < pacV.y + pacV.height &&
            rect20.height + rect20.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect21.x < pacV.x + pacV.width &&
            rect21.x + rect21.width > pacV.x &&
            rect21.y < pacV.y + pacV.height &&
            rect21.height + rect21.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect22.x < pacV.x + pacV.width &&
            rect22.x + rect22.width > pacV.x &&
            rect22.y < pacV.y + pacV.height &&
            rect22.height + rect22.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect23.x < pacV.x + pacV.width &&
            rect23.x + rect23.width > pacV.x &&
            rect23.y < pacV.y + pacV.height &&
            rect23.height + rect23.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect24.x < pacV.x + pacV.width &&
            rect24.x + rect24.width > pacV.x &&
            rect24.y < pacV.y + pacV.height &&
            rect24.height + rect24.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect25.x < pacV.x + pacV.width &&
            rect25.x + rect25.width > pacV.x &&
            rect25.y < pacV.y + pacV.height &&
            rect25.height + rect25.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect26.x < pacV.x + pacV.width &&
            rect26.x + rect26.width > pacV.x &&
            rect26.y < pacV.y + pacV.height &&
            rect26.height + rect26.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect27.x < pacV.x + pacV.width &&
            rect27.x + rect27.width > pacV.x &&
            rect27.y < pacV.y + pacV.height &&
            rect27.height + rect27.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect28.x < pacV.x + pacV.width &&
            rect28.x + rect28.width > pacV.x &&
            rect28.y < pacV.y + pacV.height &&
            rect28.height + rect28.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect29.x < pacV.x + pacV.width &&
            rect29.x + rect29.width > pacV.x &&
            rect29.y < pacV.y + pacV.height &&
            rect29.height + rect29.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect30.x < pacV.x + pacV.width &&
            rect30.x + rect30.width > pacV.x &&
            rect30.y < pacV.y + pacV.height &&
            rect30.height + rect30.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect31.x < pacV.x + pacV.width &&
            rect31.x + rect31.width > pacV.x &&
            rect31.y < pacV.y + pacV.height &&
            rect31.height + rect31.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect32.x < pacV.x + pacV.width &&
            rect32.x + rect32.width > pacV.x &&
            rect32.y < pacV.y + pacV.height &&
            rect32.height + rect32.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect33.x < pacV.x + pacV.width &&
            rect33.x + rect33.width > pacV.x &&
            rect33.y < pacV.y + pacV.height &&
            rect33.height + rect33.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect34.x < pacV.x + pacV.width &&
            rect34.x + rect34.width > pacV.x &&
            rect34.y < pacV.y + pacV.height &&
            rect34.height + rect34.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect35.x < pacV.x + pacV.width &&
            rect35.x + rect35.width > pacV.x &&
            rect35.y < pacV.y + pacV.height &&
            rect35.height + rect35.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect36.x < pacV.x + pacV.width &&
            rect36.x + rect36.width > pacV.x &&
            rect36.y < pacV.y + pacV.height &&
            rect36.height + rect36.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect37.x < pacV.x + pacV.width &&
            rect37.x + rect37.width > pacV.x &&
            rect37.y < pacV.y + pacV.height &&
            rect37.height + rect37.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect38.x < pacV.x + pacV.width &&
            rect38.x + rect38.width > pacV.x &&
            rect38.y < pacV.y + pacV.height &&
            rect38.height + rect38.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect39.x < pacV.x + pacV.width &&
            rect39.x + rect39.width > pacV.x &&
            rect39.y < pacV.y + pacV.height &&
            rect39.height + rect39.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect40.x < pacV.x + pacV.width &&
            rect40.x + rect40.width > pacV.x &&
            rect40.y < pacV.y + pacV.height &&
            rect40.height + rect40.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect41.x < pacV.x + pacV.width &&
            rect41.x + rect41.width > pacV.x &&
            rect41.y < pacV.y + pacV.height &&
            rect41.height + rect41.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect42.x < pacV.x + pacV.width &&
            rect42.x + rect42.width > pacV.x &&
            rect42.y < pacV.y + pacV.height &&
            rect42.height + rect42.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect43.x < pacV.x + pacV.width &&
            rect43.x + rect43.width > pacV.x &&
            rect43.y < pacV.y + pacV.height &&
            rect43.height + rect43.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }
        if (rect44.x < pacV.x + pacV.width &&
            rect44.x + rect44.width > pacV.x &&
            rect44.y < pacV.y + pacV.height &&
            rect44.height + rect44.y > pacV.y) {
            var min = Math.ceil(1);
            var max = Math.floor(5);
            speed3 = Math.floor(Math.random() * (max - min)) + min;
            if (goingUpV) {
                if (speed3 == 2) {
                    speed3++;
                }
                CHAR_START_Y5 += 6;
            }
            else if (goingDownV) {
                if (speed3 == 4) {
                    speed3 == 1;
                }
                CHAR_START_Y5 -= 6;
            }
            else if (goingRightV) {
                if (speed3 == 3) {
                    speed3++;
                }
                CHAR_START_X5 -= 6;
            }
            else if (goingLeftV) {
                if (speed3 == 1) {
                    speed3++;
                }
                CHAR_START_X5 += 6;
            }
        }

        if (speed3 == 1) {
            goingLeftV = true;
            goingUpV = false;
            goingDownV = false;
            goingRightV = false;
        }
        else if (speed3 == 2) {
            goingLeftV = false;
            goingUpV = true;
            goingDownV = false;
            goingRightV = false;
        }
        else if (speed3 == 3) {
            goingLeftV = false;
            goingUpV = false;
            goingDownV = false;
            goingRightV = true;
        }
        else if (speed3 == 4) {
            goingLeftV = false;
            goingUpV = false;
            goingDownV = true;
            goingRightV = false;
        }

        if (goingUpV) {
            CHAR_START_Y5 -= 2;
            currY5 = 95;
            if(openV){
                currX5 = 0;
                openV = false;
            }
            else {
                currX5 = 31;
                openV = true;
            }
        }
        else if (goingDownV) {
            CHAR_START_Y5 += 2;
            currY5 = 63;
            if(openV){
                currX5 = 0;
                openV = false;
            }
            else {
                currX5 = 31;
                openV = true;
            }
        }
        else if (goingLeftV) {
            CHAR_START_X5 -= 2;
            currY5 = 0;
            if(openV){
                currX5 = 0;
                openV = false;
            }
            else {
                currX5 = 31;
                openV = true;
            }
        }
        else if (goingRightV) {
            CHAR_START_X5 += 2;
            currY5 = 31;
            if(openV){
                currX5 = 0;
                openV = false;
            }
            else{
                currX5 = 31;
                openV = true;
            }
        }
        else{
            currY5 = 0;
            currX5 += 32;
            if(currX5 >= 128){
                currX5 = 0;
            }
        }

        if (ghostD.x < pacV.x + pacV.width &&
            ghostD.x + ghostD.width > pacV.x &&
            ghostD.y < pacV.y + pacV.height &&
            ghostD.height + ghostD.y > pacV.y) {
            //CHAR_START_X5 = 1000;
            goingUpV = false;
            goingDownV = false;
            goingRightV = false;
            goingLeftV = false;
            tellV = true;
            speed3 = 0;
            checkV += 1;
            hit2 = true;
            if(checkV == 1){
                currX9 += 31;
            }
            addI = true;
            counter += 1;
            if(counter == 2){
                winner == true;
            }
        }

        //pellet
        if (pel.x < pacV.x + pacV.width &&
            pel.x + pel.width > pacV.x &&
            pel.y < pacV.y + pacV.height &&
            pel.height + pel.y > pacV.y) {
            CHAR_START_X6 = 500;
            weak = true;
            pel.x = 600;
            pel.y = 600;
            grab1 = true;
        }
        if (pel.x < pacM.x + pacM.width &&
            pel.x + pel.width > pacM.x &&
            pel.y < pacM.y + pacM.height &&
            pel.height + pel.y > pacM.y) {
            CHAR_START_X6 = 500;
            weak = true;
            pel.x = 600;
            pel.y = 600;
            grab1 = true;
        }
        if (pel.x < pacT.x + pacT.width &&
            pel.x + pel.width > pacT.x &&
            pel.y < pacT.y + pacT.height &&
            pel.height + pel.y > pacT.y) {
            CHAR_START_X6 = 500;
            weak = true;
            pel.x = 600;
            pel.y = 600;
            grab1 = true;
        }

        if (pel1.x < pacV.x + pacV.width &&
            pel1.x + pel1.width > pacV.x &&
            pel1.y < pacV.y + pacV.height &&
            pel1.height + pel1.y > pacV.y) {
            CHAR_START_X7 = 500;
            weak = true;
            pel1.x = 600;
            pel1.y = 600;
            grab2 = true;
        }
        if (pel1.x < pacM.x + pacM.width &&
            pel1.x + pel1.width > pacM.x &&
            pel1.y < pacM.y + pacM.height &&
            pel1.height + pel1.y > pacM.y) {
            CHAR_START_X7 = 500;
            weak = true;
            pel1.x = 600;
            pel1.y = 600;
            grab2 = true;
        }
        if (pel1.x < pacT.x + pacT.width &&
            pel1.x + pel1.width > pacT.x &&
            pel1.y < pacT.y + pacT.height &&
            pel1.height + pel1.y > pacT.y) {
            CHAR_START_X7 = 500;
            weak = true;
            pel1.x = 600;
            pel1.y = 600;
            grab2 = true;
        }

        if (pel2.x < pacV.x + pacV.width &&
            pel2.x + pel2.width > pacV.x &&
            pel2.y < pacV.y + pacV.height &&
            pel2.height + pel2.y > pacV.y) {
            CHAR_START_X8 = 500;
            weak = true;
            pel2.x = 600;
            pel2.y = 600;
            grab3 = true;
        }
        if (pel2.x < pacM.x + pacM.width &&
            pel2.x + pel2.width > pacM.x &&
            pel2.y < pacM.y + pacM.height &&
            pel2.height + pel2.y > pacM.y) {
            CHAR_START_X8 = 500;
            weak = true;
            pel2.x = 600;
            pel2.y = 600;
            grab3 = true;
        }
        if (pel2.x < pacT.x + pacT.width &&
            pel2.x + pel2.width > pacT.x &&
            pel2.y < pacT.y + pacT.height &&
            pel2.height + pel2.y > pacT.y) {
            CHAR_START_X8 = 500;
            weak = true;
            pel2.x = 600;
            pel2.y = 600;
            grab3 = true;
        }

        if (pel3.x < pacV.x + pacV.width &&
            pel3.x + pel3.width > pacV.x &&
            pel3.y < pacV.y + pacV.height &&
            pel3.height + pel3.y > pacV.y) {
            CHAR_START_X9 = 500;
            weak = true;
            pel3.x = 600;
            pel3.y = 600;
            grab4 = true;
        }
        if (pel3.x < pacM.x + pacM.width &&
            pel3.x + pel3.width > pacM.x &&
            pel3.y < pacM.y + pacM.height &&
            pel3.height + pel3.y > pacM.y) {
            CHAR_START_X9 = 500;
            weak = true;
            pel3.x = 600;
            pel3.y = 600;
            grab4 = true;
        }
        if (pel3.x < pacT.x + pacT.width &&
            pel3.x + pel3.width > pacT.x &&
            pel3.y < pacT.y + pacT.height &&
            pel3.height + pel3.y > pacT.y) {
            CHAR_START_X9 = 500;
            weak = true;
            pel3.x = 600;
            pel3.y = 600;
            grab4 = true;
        }

        //did you win
        if(counter == 3){
            winner == true;
        }
        if(hit1){
            if(hit2){
                if(hit3){
                    winner = true;
                }
            }
        }

    }

    //did you lose
    if(grab1){
        if(grab2){
            if(grab3){
                if(grab4){
                    gameOver = true;
                }
            }
        }
    }
}