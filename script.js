
// Author:

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;
let textP2;

//Global ML Variables
let soundClassifier;

function setup() {
  canvasDiv = createDiv();
  canvas = createCanvas(640, 480);
  textDiv = createDiv();
  textP = createP("Model loading plaese wait");
  textP.parent(textDiv);
  textP2 = createP();
  textP.parent(textDiv);
  //configure options
  let options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier("SpeachCommands18w", options, modelReady);
}

function draw() {
  let label = textP.html();
  if(label.includes("up")) {
    background(190, 0, 40);

  } else if (label.includes("down")){
      background(0, 255, 0);
  } else if (label.includes("left")){
      background(0, 0, 255);
  
  } else if (label.includes("right")){
      background(180, 30, 100);
  }
}

function modelReady() {
  textP.html("Model loaded, say anything below!");
  textP2.html("<b>Commands</b>: Numbers 0 through 9, up, down, left, right, go, stop, yes, no");
  soundClassifier.classify(gotResults);
}

function gotResults(error, results) {
  if(error) {
    console.error(error);
  } else {
    // Complete the code below
    let label = results[0].label;
    let confidence  = round(results[0].confidence, 2) * 100;
    textp.html(label + ": " + confidence + "% ")

  }
}
