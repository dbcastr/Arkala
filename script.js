/* 
global keyCode, translate, RIGHT_ARROW, LEFT_ARROW, DOWN_ARROW, UP_ARROW, loadImage, image, fill, circle, stroke, line, createCanvas, background,  frameRate, ellipseMode, noStroke, ellipse, RADIUS, width, height, push, pop
global imageMode, CENTER, CORNER, keyIsDown, text, textSize
global noFill, rect, noStroke, strokeWeight, backgroundImage, loadSound, soundFormats
*/

let idleRight = [];
let counter = 0;
let counter2 = 0;
let counter_runLeft = 0;
let counter_runRight = 0;
let counter_attackRight = 0;
let counter_attackLeft = 0;
let counter_falling = 0;
let counter_idleRight = 0;
let counter_jumpUp = 0;
let counter_bowAttackRight = 0;
let counter_bowAttackLeft = 0;
let counter_characterDeath = 0;
let counter_wizardDieLeft = 0;
let counter_wizardDieRight = 0;
let fallRight;
let fallLeft;

let currentImage;
let forrestImage;
let pfpInterface;
let evilWizardpfp;
let arrow_current_state = "idle";
let current_state = "idleing";
let knight = [];
let idle = [];
let runLeft = [];
let runRight = [];
let attackLeft = [];
let attackRight = [];
let bowRight = [];
let bowLeft = [];
let characterDie = [];
let timer = 0;
let bowTimerRight = 0;
let bowTimerLeft = 0;
let jumpUp = [];
let fallDown = [];

let wizard_current_image;
let wizardLeft = [];
let wizardRight = [];
let wizardAttackRight = [];
let wizardAttackLeft = [];
let wizardHurtLeft = [];
let wizardHurtRight = [];
let wizardDieLeft = [];
let wizardDieRight = [];
let wizard_current_state = "wizard_right";
let wizard_x = 150;
let wizard_y = 386;
let wizardHeight = 250;
let wizardWidth = 200;
let counter_runRight_wizard = 0;
let counter_runLeft_wizard = 0;
let counter_wizard_attack_right = 0;
let counter_wizard_attack_left = 0;
let counter_wizard_hurt_left = 0;
let counter_wizard_hurt_right = 0;
let wizard_attackR_timer = 0;
let wizard_attackL_timer = 0;
let wizardVelocityRight = 16;
let wizardVelocityLeft = -16;

let jumpSpeed = 12;
let maxJumpHeight = 320;
let startingHeight = 483;
let jumpStatus;

let healthbar = 100;
let healthbar_2 = 100;
let healthbarLength = 250;
let healthbarLength_2 = 250;
let textColor;
let healthbarColor;

let img_x = 500;
let img_y = startingHeight;
let imgHeight = 70;
let imgWidth = 90;

let arrowRight1;
let arrowLeft1;
let arrowWidth = 70;
let arrowHeight = 100;
let arrow_y = 485;
let arrow_x = -100;
let arrow_x_2 = -150;
let arrow_y_2 = 485;
let arrow_timerRight1 = 0;
let arrow_used;
let arrow_usedL;
let arrow_timer = 0;
let arrow_counter = 0;

let immunity;

var song
let loadSound

let message = "Controls";
let loseText;
let winText;

function preload() {
  forrestImage = loadImage(
    "https://cdn.glitch.com/b3ac6fb0-1c03-4368-af11-dc9a24c09ab8%2FBackground.png?v=1620860677852"
  );

  for (let n = 0; n < 3; n++) {
    idle[n] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fadventurer-idle_2-0" +
        n +
        ".png?v=1621461052172"
    );
  }
  for (let b = 0; b < 5; b++) {
    runLeft[b] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Frun_left_0" +
        b +
        ".png?v=1621461886791"
    );
  }
  for (let c = 0; c < 6; c++) {
    runRight[c] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fadventurer-run-0" +
        c +
        ".png?v=1621462534862"
    );
  }
  for (let l = 0; l < 6; l++) {
    attackLeft[l] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fadventurer-attack2_left-0" +
        l +
        ".png?v=1622064198927"
    );
  }
  for (let e = 0; e < 6; e++) {
    attackRight[e] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fadventurer-attack2-0" +
        e +
        ".png?v=1621464582370"
    );
  }
  for (let f = 0; f < 4; f++) {
    jumpUp[f] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fadventurer-jump-0" +
        f +
        ".png?v=1621471372449"
    );
  }
  // for (let g = 0; g < 2; g++) {
  //   fallDown[g] = loadImage(
  //     "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fadventurer-fall-0" +
  //       g +
  //       ".png?v=1621472716814"
  //   );
  // }

  for (let h = 0; h < 3; h++) {
    idleRight[h] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fadventurer-idle-0" +
        h +
        ".png?v=1622127363954"
    );
  }

  for (let i = 0; i < 8; i++) {
    wizardLeft[i] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fmove_left00" +
        i +
        ".png?v=1622133940014"
    );
  }

  for (let j = 0; j < 8; j++) {
    wizardRight[j] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fmove_right00" +
        j +
        ".png?v=1622133949885"
    );
  }
  for (let k = 0; k < 9; k++) {
    bowRight[k] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fadventurer-bow-0" +
        k +
        ".png?v=1622638997076"
    );
  }
  for (let m = 0; m < 9; m++) {
    bowLeft[m] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fadventurer-bow-left-0" +
        m +
        ".png?v=1622640080128"
    );
  }
  for (let n = 0; n < 8; n++) {
    wizardAttackRight[n] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fattack_right00" +
        n +
        ".png?v=1622664522939"
    );
  }
  for (let o = 0; o < 8; o++) {
    wizardAttackLeft[o] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fattack_left00" +
        o +
        ".png?v=1623032140975"
    );
  }
  for (let p = 0; p < 4; p++) {
    wizardHurtLeft[p] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fhurt_left00" +
        p +
        ".png?v=1623094047579"
    );
  }
  for (let q = 0; q < 7; q++) {
    characterDie[q] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fadventurer-die-0" +
        q +
        ".png?v=1623083106813"
    );
  }
  for (let r = 0; r < 5; r++) {
    wizardDieLeft[r] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fdie_left00" +
        r +
        ".png?v=1623085740799"
    );
  }
  for (let s = 0; s < 5; s++) {
    wizardDieRight[s] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fdie_right00" +
        s +
        ".png?v=1623085745607"
    );
  }
  for (let t = 0; t < 4; t++) {
    wizardHurtRight[t] = loadImage(
      "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fhurt_right00" +
        t +
        ".png?v=1623166626559"
    );
  }
  pfpInterface = loadImage(
    "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2FScreenshot%202021-05-26%20172901.png?v=1622126237628"
  );

  arrowRight1 = loadImage(
    "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2FarrowRight.png?v=1622650429070"
  );

  evilWizardpfp = loadImage(
    "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fimage%20(2).png?v=1622670693571"
  );

  fallRight = loadImage(
    "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fadventurer-fall-01.png?v=1621472716814"
  );
  fallLeft = loadImage(
    "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2Fadventurer-fall-00.png?v=1622047521844"
  );
  arrowLeft1 = loadImage(
    "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2FarrowLeft.png?v=1622650427332"
  );
  loseText = loadImage(
    "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2FNew%20Project%20(5).png?v=1623258069652"
  );
  winText = loadImage(
    "https://cdn.glitch.com/dd9d9550-bb9c-4062-a9fe-6b82f2daf4f6%2FNew%20Project%20(6).png?v=1623258111650"
  );
  song = loadSound('assets/Battle-Forbidden_SNES.mp3')
}


function setup() {
  createCanvas(1100, 700);
  frameRate(10);
  background(21, 24, 42);

}

function draw() {
  backgroundImage = forrestImage;
  image(backgroundImage, 0, 0, 1100, 600);
  image(pfpInterface, 10, 10, 70, 70);
  image(evilWizardpfp, 1010, 8, 75, 75);
  
  //controls
  noFill();
  fill("white");
  textSize(22);
  text("controls", 10, 620);
  text("W", 26, 650);
  text("A", 10, 680);
  text("S", 30, 680);
  text("D", 50, 680);
  text("(Movement)", 80, 665);
  text("Q - Bow Left", 280, 650);
  text("E - Bow Right", 280, 680);
  text("R - Sword Attack Left", 500, 650);
  text("T - Sword Attack Right", 500, 680);
  textSize(15);
  text("Note : The faster the enemy gets,", 750, 620);
  text("bow shots become less accurate", 750, 640);
  text("Also jump at the start", 750, 670);
  text("Don't spam, it won't help", 750, 690);
  // Conditions

  if (img_y < startingHeight) {
      fall();
  }

  if (img_x < -15) {
    img_x = -10;
  }

  if (img_x > 1020) {
    img_x = 1020;
  }
  if (wizard_x < -40) {
    wizard_current_state = "wizard_right";
  }

  if (wizard_x > 980) {
    wizard_current_state = "wizard_left";
  }

  // console.log('current_state ' + current_state);
  if (current_state === "running_left") {
    runLeft1();
  } else if (current_state === "idleing") {
    idle1();
  } else if (current_state === "idleing_right") {
    idleRight1();
  } else if (current_state === "running_right") {
    running_right();
  } else if (current_state === "attacking_right") {
    attack();
  } else if (current_state === "attacking_left") {
    attack2();
  } else if (current_state === "bow_attack_right") {
    bowAttackRight();
  } else if (current_state === "bow_attack_left") {
    bowAttackLeft();
  } else if (current_state === "dead") {
    die();
  }

  if (wizard_current_state === "wizard_right") {
    wizard_running_right();
    immunity = false;
  } else if (wizard_current_state === "wizard_left") {
    wizard_running_left();
    immunity = false;
  } else if (wizard_current_state === "wizard_attack_Right") {
    wizardAttackR();
    immunity = true;
  } else if (wizard_current_state === "wizard_attack_Left") {
    wizardAttackL();
    immunity = true;
  } else if (wizard_current_state === "wizard_hurt_left") {
    wizardHurtL();
  } else if (wizard_current_state === "wizard_die_left") {
    wizardDieL();
  } else if (wizard_current_state === "wizard_die_right") {
    wizardDieR();
  } else if (wizard_current_state === "wizard_hurt_right") {
    wizardHurtR();
  }

  //Arrow State
  if (arrow_current_state === "moving_right") {
    arrowMovingRight();
  } else if (arrow_current_state === "moving_left") {
    arrowMovingLeft();
  } else if (arrow_current_state === "idle") {
    console.log("arrow idle");
    let arrow_x = -100;
  }

  //Health Bar
  noFill();
  strokeWeight(5);
  rect(100, 58, 250, 20);
  strokeWeight(2);
  fill("green");
  textSize(30);
  text(healthbar, 200, 50);
  rect(100, 60, healthbarLength, 15);

  if (img_x >= wizard_x + 30 && img_x <= wizard_x + 140 && img_y > 460) {
    wizard_current_state = "wizard_attack_Right";
  }
  if (img_x >= wizard_x - 40 && img_x <= wizard_x + 40 && img_y > 460) {
    wizard_current_state = "wizard_attack_Left";
  }

  //Wizard Health Bar
  noFill();
  strokeWeight(5);
  rect(750, 58, 250, 20);
  strokeWeight(2);
  fill("green");
  textSize(30);
  text(healthbar_2, 850, 50);
  rect(750, 60, healthbarLength_2, 15);

  //Updates Arrow X Pos

  if (arrow_used == true) {
    arrow_x = img_x + 45;
    arrow_used = false;
  }
  if (arrow_usedL == true) {
    arrow_x_2 = img_x - 45;
    arrow_usedL = false;
  }

  // arrow hits wizard

  if (arrow_x > wizard_x + 20 && arrow_x < wizard_x + 50 && immunity == false) {
    wizard_current_state = "wizard_hurt_left";
    healthbarLength_2 = healthbarLength_2 - 25;
    healthbar_2 = healthbar_2 - 10;
    arrow_current_state = "idle";
    arrow_x = 10000;
    wizardVelocityRight = wizardVelocityRight + 3.5;
    wizardVelocityLeft = wizardVelocityLeft - 3.5;
  }

  if (arrow_x_2 > wizard_x && arrow_x_2 < wizard_x + 70 && immunity == false) {
    wizard_current_state = "wizard_hurt_right";
    healthbarLength_2 = healthbarLength_2 - 25;
    healthbar_2 = healthbar_2 - 10;
    arrow_current_state = "idle";
    arrow_x_2 = 10000;
    wizardVelocityLeft = wizardVelocityLeft - 3.5;
    wizardVelocityRight = wizardVelocityRight + 3.5;
  }
  if (healthbar_2 < 0) {
    healthbar_2 = 0;
  }
  if (healthbarLength_2 < 1) {
    healthbarLength_2 = 0;
    wizard_current_state = "wizard_die_left";
    image(winText, 250, 100, 600, 600);

  }
  console.log("Velocity Right " + wizardVelocityRight);
  console.log("Velocity Left :" + wizardVelocityLeft);
  
}

function runLeft1() {
  currentImage = runLeft[counter_runLeft];

  counter_runLeft++;
  if (counter_runLeft == 4) {
    counter_runLeft = 0;
  }
  image(currentImage, img_x, img_y, imgWidth, imgHeight);

  if (keyIsDown(65)) {
    img_x = img_x - 15;
  }
}

let print_once = true;
let idle1_counter = 0;

function idle1() {
  currentImage = idle[idle1_counter];

  idle1_counter++;
  if (idle1_counter === 3) {
    idle1_counter = 0;
  }

  if (print_once) {
    console.log(currentImage);
    print_once = false;
  }

  image(currentImage, img_x, img_y, 90, imgHeight);
}

function idleRight1() {
  currentImage = idleRight[counter_idleRight];

  counter_idleRight++;
  if (counter_idleRight === 3) {
    counter_idleRight = 0;
  }
  console.log(img_x);
  image(currentImage, img_x, img_y, 90, imgHeight);
}

function running_right() {
  currentImage = runRight[counter_runRight];

  counter_runRight++;
  if (counter_runRight == 4) {
    counter_runRight = 0;
  }
  image(currentImage, img_x, img_y, imgWidth, imgHeight);

  if (keyIsDown(68)) {
    img_x = img_x + 15;
  }
  if (keyIsDown(84)) {
    attack();
  }
}
function attack() {
  currentImage = attackRight[counter_attackRight];

  counter_attackRight++;
  if (counter_attackRight == 6) {
    counter_attackRight = 0;
  }
  if (
    counter_attackRight == 5 &&
    img_x >= wizard_x - 10 &&
    img_x <= wizard_x + 40 &&
    img_y > 460
  ) {
    healthbarLength_2 = healthbarLength_2 - 25;
    healthbar_2 = healthbar_2 - 10;
  }
  if (healthbar_2 < 0) {
    healthbar_2 = 0;
  }
  if (healthbarLength_2 < 0) {
    healthbarLength_2 = 0;
    wizard_current_state = "wizard_die_left";
  }

  image(currentImage, img_x, img_y, imgWidth, imgHeight);
  timer++;
  if (timer == 6) {
    counter_attackRight = 0;
    current_state = "idleing_right";
    timer = 0;
  }
}

function attack2() {
  currentImage = attackLeft[counter_attackLeft];

  counter_attackLeft++;
  if (counter_attackLeft == 6) {
    counter_attackLeft = 0;
  }

  image(currentImage, img_x, img_y, imgWidth, imgHeight);

  timer++;
  if (timer == 6) {
    current_state = "idleing";
    timer = 0;
    counter_attackLeft = 0;
  }
}

function jump() {
  if (jumpStatus == true && img_y == startingHeight) {
    img_y = maxJumpHeight;
    jumpStatus = false;
  }
}

function fall() {
  current_state = "falling";

  currentImage = fallRight;
  // counter_falling++;
  // if ((counter_falling = 2)) {
  //   counter_falling = 0;
  // }

  img_y = img_y + jumpSpeed;

  if(img_y >= startingHeight){
    img_y = startingHeight
    current_state = "idleing"
  }
  
  console.log("img Y is : " +img_y);
  if (keyCode == 65) {
    currentImage = fallLeft;
    img_x = img_x - 15;
    if (img_y >= startingHeight) {
      img_y = startingHeight;
      current_state = "idleing";
    }
  }
  if (keyCode == 68) {
    currentImage = fallRight;
    img_x = img_x + 15;
    if (img_y >= startingHeight) {
      img_y = startingHeight;
      current_state = "idleing_right";
    }
    
  }
  image(currentImage, img_x, img_y, imgWidth, imgHeight);
}

function die() {
  currentImage = characterDie[counter_characterDeath];

  counter_characterDeath++;
  if (counter_characterDeath > 6) {
    counter_characterDeath = 6;
  }

  image(currentImage, img_x, img_y, imgWidth, imgHeight);

  if (keyCode == 65) {
    img_x = img_x - 0;
  }
  if (keyCode == 68) {
    img_x = img_x + 0;
  }
}

function wizard_running_right() {
  wizard_current_image = wizardRight[counter_runRight_wizard];

  counter_runRight_wizard++;
  if (counter_runRight_wizard == 7) {
    counter_runRight_wizard = 0;
  }
  image(wizard_current_image, wizard_x, wizard_y, wizardWidth, wizardHeight);

  wizard_x = wizard_x + wizardVelocityRight;
}

function wizard_running_left() {
  wizard_current_image = wizardLeft[counter_runLeft_wizard];

  counter_runLeft_wizard++;
  if (counter_runLeft_wizard == 7) {
    counter_runLeft_wizard = 0;
  }
  image(wizard_current_image, wizard_x, wizard_y, wizardWidth, wizardHeight);

  wizard_x = wizard_x + wizardVelocityLeft;
}

function wizardAttackR() {
  wizard_current_image = wizardAttackRight[counter_wizard_attack_right];

  counter_wizard_attack_right++;
  if (counter_wizard_attack_right == 7) {
    counter_wizard_attack_right = 0;
  }
  image(wizard_current_image, wizard_x, wizard_y, wizardWidth, wizardHeight);

  wizard_attackR_timer++;
  if (wizard_attackR_timer == 10) {
    wizard_current_state = "wizard_right";
    wizard_attackR_timer = 0;
  }
  healthbarLength = healthbarLength - 10;
  healthbar = healthbar - 4;

  if (healthbarLength <= 1) {
    healthbarLength = 0;
    current_state = "dead";
    image(loseText, 250, 100, 600, 600);
  }
  if (healthbar < 0) {
    healthbar = 0;
  }
}

function wizardAttackL() {
  wizard_current_image = wizardAttackLeft[counter_wizard_attack_left];

  counter_wizard_attack_left++;
  if (counter_wizard_attack_left == 7) {
    counter_wizard_attack_left = 0;
  }
  image(wizard_current_image, wizard_x, wizard_y, wizardWidth, wizardHeight);

  wizard_attackL_timer++;
  if (wizard_attackL_timer == 10) {
    wizard_current_state = "wizard_left";
    wizard_attackL_timer = 0;
  }
  healthbarLength = healthbarLength - 10;
  healthbar = healthbar - 4;

  if (healthbarLength < 1) {
    healthbarLength = 0;
    current_state = "dead";
    image(loseText, 250, 100, 600, 600);
  }
  if (healthbar < 0) {
    healthbar = 0;
  }
}

function wizardHurtL() {
  wizard_current_image = wizardHurtLeft[counter_wizard_hurt_left];
  counter_wizard_hurt_left++;
  if (counter_wizard_hurt_left == 4) {
    wizard_current_state = "wizard_left";
    counter_wizard_hurt_left = 0;
  }
  image(wizard_current_image, wizard_x, wizard_y, wizardWidth, wizardHeight);
}

function wizardHurtR() {
  wizard_current_image = wizardHurtRight[counter_wizard_hurt_right];
  counter_wizard_hurt_right++;
  if (counter_wizard_hurt_right == 4) {
    wizard_current_state = "wizard_right";
    counter_wizard_hurt_right = 0;
  }
  image(wizard_current_image, wizard_x, wizard_y, wizardWidth, wizardHeight);
}

function wizardDieL() {
  wizard_current_image = wizardDieLeft[counter_wizardDieLeft];

  counter_wizardDieLeft++;

  if (counter_wizardDieLeft > 4) {
    counter_wizardDieLeft = 4;
  }
  image(wizard_current_image, wizard_x, wizard_y, wizardWidth, wizardHeight);
}

function wizardDieR() {
  wizard_current_image = wizardDieRight[counter_wizardDieRight];

  counter_wizardDieRight++;

  if (counter_wizardDieRight > 4) {
    counter_wizardDieRight = 4;
  }
  image(wizard_current_image, wizard_x, wizard_y, wizardWidth, wizardHeight);

}

function bowAttackRight() {
  console.log("bow right " + counter_bowAttackRight);

  let currentImage = bowRight[counter_bowAttackRight];

  counter_bowAttackRight++;
  if (counter_bowAttackRight == 9) {
    current_state = "idleing_right";
    arrow_current_state = "moving_right";
    counter_bowAttackRight = 0;
  }

  if (counter_bowAttackRight > 0 && counter_bowAttackRight < 8) {
    arrow_current_state = "idle";
  }

  image(currentImage, img_x, img_y, imgWidth, imgHeight);
}

function arrowMovingRight() {
  console.log("arrowMovingRight");
  // if it hits the enemy, arrow_current_state = 'idle'
  // if counter == 15, arrow_current_state = 'idle'

  image(arrowRight1, arrow_x, arrow_y, arrowWidth, arrowHeight);
  arrow_x = arrow_x + 30;
}

function bowAttackLeft() {
  currentImage = bowLeft[counter_bowAttackLeft];

  counter_bowAttackLeft++;
  if (counter_bowAttackLeft == 9) {
    current_state = "idleing";
    arrow_current_state = "moving_left";
    counter_bowAttackLeft = 0;
  }
  if (counter_bowAttackLeft > 0 && counter_bowAttackLeft < 8) {
    arrow_current_state = "idle";
  }
  image(currentImage, img_x, img_y, imgWidth, imgHeight);
}

function arrowMovingLeft() {
  console.log("arrowMovingLeft");
  // if it hits the enemy, arrow_current_state = 'idle'
  // if counter == 15, arrow_current_state = 'idle'

  image(arrowLeft1, arrow_x_2, arrow_y_2, arrowWidth, arrowHeight);
  arrow_x_2 = arrow_x_2 - 30;
}

function keyPressed() {
  if(current_state === "dead"){
    die()} else if (keyCode == 65 ) {
    console.log("running left");
    current_state = "running_left";
  }
  if(current_state === "dead"){
    die()
  } else if (keyCode == 68) {
    console.log("running Right");
    current_state = "running_right";
  }

  if (keyCode == 84) {
    console.log("attack right");
    current_state = "attacking_right";
  }
  if (keyCode == 82) {
    console.log("attacking_left");
    current_state = "attacking_left";
  }
if(current_state == "dead"){
    die()}
 else if (keyCode == 87) {
    jump();
    jumpStatus = true;
  }
  if (keyCode == 69) {
    current_state = "bow_attack_right";
    arrow_used = true;
  }
  if (keyCode == 81) {
    current_state = "bow_attack_left";
    arrow_usedL = true;
  }
}

function keyReleased() {
  if(current_state == "dead"){
    die()}
  else if (keyCode === 65) {
    current_state = "idleing";
  }
  if(current_state == "dead"){
    die()}
  else if (keyCode === 68) {
    current_state = "idleing_right";
  }
}
