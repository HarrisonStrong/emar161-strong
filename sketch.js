//DAIT
//A game by Harrison Strong

//images
let title,
    tutStart, tutFinish,
    bg,
    Dia1, Dia2, Dia3, Dia4, Dia5, Dia6, Dia7, Dia8, Dia9, Dia10, Dia11, Dia12,     Dia13, Dia14, Dia15, Dia16, Dia17, Dia18, Dia19,
    nukes, nukeEnding, magicDeathEnding, magicLoveEnding, trueLoveEnding;

//graphics
let questionMark;

let state = 0;
let typed = "";

//fade
let fade = 255;

//music
let gestation; //song
let access; //song
let cemetary; //song
let gravity; //song
let safety; //song
let gameOver; //song
let success; //song

//sounds
let enterSound; //enter sound
let keySound; //key sound
let boomSound; //boom sound

var VCR; //font

function preload() {
  //music
  gestation = loadSound('gestation.mp3');
  access = loadSound('access.mp3');
  cemetary = loadSound('cemetary.mp3');
  gravity = loadSound('gravity.mp3');
  safety = loadSound('safety.mp3');
  gameOver = loadSound('gameOver.mp3');
  success = loadSound('success.mp3');
  
  //sounds
  enterSound = loadSound('enterSound.mp3');
  keySound = loadSound('keySound.mp3');
  boomSound = loadSound('boomSound.mp3');
  
  //font
  VCR = loadFont('VCR_OSD_MONO_1.001.ttf');
  
  //graphics
  questionMark = loadImage("questionMark.png");
  
  //images
  title = loadImage("title.png");
  tutStart = loadImage("tutStart.png");
  tutFinish = loadImage("tutFinish.png");
  bg = loadImage("bg.png");
  
  //Dialogue
  Dia1 = loadImage("Dia1.png");
  Dia2 = loadImage("Dia2.png");
  Dia3 = loadImage("Dia3.png");
  Dia4 = loadImage("Dia4.png");
  Dia5 = loadImage("Dia5.png");
  Dia6 = loadImage("Dia6.png");
  Dia7 = loadImage("Dia7.png");
  Dia8 = loadImage("Dia8.png");
  Dia9 = loadImage("Dia9.png");
  Dia10 = loadImage("Dia10.png");
  Dia11 = loadImage("Dia11.png");
  Dia12 = loadImage("Dia12.png");
  Dia13 = loadImage("Dia13.png");
  Dia14 = loadImage("Dia14.png");
  Dia15 = loadImage("Dia15.png");
  Dia16 = loadImage("Dia16.png");
  Dia17 = loadImage("Dia17.png");
  Dia18 = loadImage("Dia18.png");
  Dia19 = loadImage("Dia19.png");
  
  //endings
  nukes = loadImage("nukes.png");
  nukeEnding = loadImage("nukeEnding.png");
  magicDeathEnding = loadImage("magicDeathEnding.png");
  magicLoveEnding = loadImage("magicLoveEnding.png");
  trueLoveEnding = loadImage("trueLoveEnding.png");
}

function setup() {
  createCanvas(900, 600);
  textSize(24);
  gestation.loop();
  amp = new p5.Amplitude();
  
  //volume
  slider = createSlider(1, 100, 50);
  slider.position(10, 10);
  slider.style('width', '80px');
  masterVolume(0.1);
}

function draw() {
  //volume
  let val = slider.value();
  masterVolume(val*0.02);
  
  background(220);
  var vol = amp.getLevel();
  
  if (state == 0) {
    image(title, 0, 0);
    title.resize(width, 0);
  } else if (state == 1) {
    imageMode(CORNER)
    image(tutStart, 0, 0);
    tutStart.resize(width, 0);
    imageMode(CORNER)
    imageMode(CENTER);
    image(questionMark, 450, 300, 700 + vol*400, 500 + vol*400);
    questionMark.resize(width, 0);
    imageMode(CORNER)
  } else if (state == 2) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia1, 0, 0);
    
    fill(0,fade);
    rect(0,0,900,600);
  } else if (state == 3) {
    image(tutFinish, 0, 0);
    tutFinish.resize(width, 0);
  } else if (state == 4) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(nukes, 0, 0);
    nukes.resize(width, 0);
    fill(0,fade);
    rect(0,0,900,600);
    image(Dia2, 0, 0);
    Dia2.resize(width, 0);
  } else if (state == 5) {
    fill(0,fade);
    rect(0,0,900,600);
    image(nukeEnding, 0, 0);
    nukeEnding.resize(width, 0);
    fill(0,fade);
    rect(0,0,900,600);
  } else if (state == 6) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia3, 0, 0);
    Dia3.resize(width, 0);
  } else if (state == 7) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia4, 0, 0);
    Dia4.resize(width, 0);
  } else if (state == 8) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia5, 0, 0);
    Dia5.resize(width, 0);
  } else if (state == 9) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia6, 0, 0);
    Dia6.resize(width, 0);
  } else if (state == 10) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia7, 0, 0);
    Dia7.resize(width, 0);
  } else if (state == 11) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia8, 0, 0);
    Dia8.resize(width, 0);
  } else if (state == 12) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia9, 0, 0);
    Dia9.resize(width, 0);
  } else if (state == 13) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia10, 0, 0);
    Dia10.resize(width, 0);
  } else if (state == 14) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia11, 0, 0);
    Dia11.resize(width, 0);
  } else if (state == 15) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia12, 0, 0);
    Dia12.resize(width, 0);
  } else if (state == 16) {
    image(magicDeathEnding, 0, 0);
    magicDeathEnding.resize(width, 0);
    fill(0,fade);
    rect(0,0,900,600);
  } else if (state == 17) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia13, 0, 0);
    Dia13.resize(width, 0);
  } else if (state == 18) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia14, 0, 0);
    Dia14.resize(width, 0);
  } else if (state == 19) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(nukes, 0, 0);
    nukes.resize(width, 0);
    image(Dia15, 0, 0);
    Dia15.resize(width, 0);
  } else if (state == 20) {
    image(magicLoveEnding, 0, 0);
    magicLoveEnding.resize(width, 0);
    fill(0,fade);
    rect(0,0,900,600);
  } else if (state == 21) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia16, 0, 0);
    Dia16.resize(width, 0);
  } else if (state == 22) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia17, 0, 0);
    Dia17.resize(width, 0);
  } else if (state == 23) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia18, 0, 0);
    Dia18.resize(width, 0);
  } else if (state == 24) {
    image(bg, 0, 0);
    bg.resize(width, 0);
    image(Dia19, 0, 0);
    Dia19.resize(width, 0);
  } else if (state == 25) {
    image(trueLoveEnding, 0, 0);
    trueLoveEnding.resize(width, 0);
    fill(0,fade);
    rect(0,0,900,600);
  }
  
  textSize(30)
  textFont(VCR)
  fill(255)
  text(typed, 20, 581);
  fade = fade-2 //fade
}

function keyTyped() {
    keySound.play();
    if (keyCode == RETURN) {
    enterSound.play();
      
    if (typed == 'TITLE') {
      state = 0;
      gameOver.stop();
      gestation.stop();
      access.stop();
      gravity.stop();
      
      gestation.loop();
      typed = "";
      
    } else if (typed == 'START') {
      state = 1;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      access.loop();
      typed = "";
    } else if (typed == 'I HAVE') {
      state = 2;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      cemetary.loop();
      typed = "";
    } else if (typed == 'I HAVE NOT') {
      state = 3;
      typed = "";
    } else if (typed == 'LETS BEGIN') {
      state = 2;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      cemetary.loop();
      typed = "";
    } else if (typed == 'LETS NOT') {
      state = 0;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();

      gestation.loop();
      typed = "";
    } else if (typed == 'YOURE RIGHT') {
      state = 4;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      gravity.loop();
      typed = "";
    } else if (typed == 'UH OH') {
      state = 5;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      gameOver.play();
      boomSound.play();
      typed = "";
    } else if (typed == 'THATS NOT TRUE') {
      state = 6;
      typed = "";
    } else if (typed == 'NOTHING') {
      state = 4;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      gravity.loop();
      typed = "";
    } else if (typed == 'FOR LOVE') {
      state = 7;
      typed = "";
    } else if (typed == 'NO ONE') {
      state = 4;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();

      
      gravity.loop();
      typed = "";
    } else if (typed == 'ME') {
      state = 8;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      safety.loop();
      typed = "";
    } else if (typed == 'ITS DAIT') {
      state = 9;
      typed = "";
    } else if (typed == 'MAGIC TRICKS') {
      state = 10;
      typed = "";
    } else if (typed == 'NEVERMIND') {
      state = 11;
      typed = "";
    } else if (typed == 'OH') {
      state = 4;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();

      
      gravity.loop();
      typed = "";
    } else if (typed == 'I WAS JOKING') {
      state = 11;
      typed = "";
    } else if (typed == 'YES I DO') {
      state = 12;
      typed = "";
    } else if (typed == 'GOOD TO HEAR') {
      state = 13;
      typed = "";
    } else if (typed == 'KILL SPELL') {
      state = 14;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      typed = "";
    } else if (typed == 'MAYBE') {
      state = 15;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      gravity.loop();
      typed = "";
    } else if (typed == 'AAGHH') {
      state = 16;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      gameOver.play();
      boomSound.play();
      typed = "";
    } else if (typed == 'LOVE SPELL') {
      state = 17;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      //access.loop();
      typed = "";
    } else if (typed == 'HELLO?') {
      state = 18;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      access.loop();
      typed = "";
    } else if (typed == 'HUH') {
      state = 19;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      gravity.loop();
      typed = "";
    } else if (typed == 'DAMN IT') {
      state = 20;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      success.play();
      boomSound.play();
      typed = "";
    } else if (typed == 'ITS PATHOS') {
      state = 21;
      typed = "";
    } else if (typed == 'I DID') {
      state = 22;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      //access.loop();
      typed = "";
    } else if (typed == 'I DIDNT') {
      state = 23;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      access.loop();
      typed = "";
    } else if (typed == 'I HATE YOU') {
      state = 4;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();

      
      gravity.loop();
      typed = "";
    } else if (typed == 'ME LOVE U') {
      state = 24;
      typed = "";
    } else if (typed == 'AGREED') {
      state = 25;
      gestation.stop();
      access.stop();
      cemetary.stop();
      gravity.stop();
      safety.stop();
      
      success.play();
      typed = "";
    }
      
      //end
      typed = "";
      fade = 255;
  } else {
    typed += key;
  }
}

function keyPressed() {
  if(keyCode == BACKSPACE) {
    typed = "";
    enterSound.play();
  }
}