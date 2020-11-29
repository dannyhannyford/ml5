let classifier;

let img;
function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  img = loadImage('images/cat.jpg');
}

function setup() {
  createCanvas(1080, 611);
  classifier.classify(img, gotResult);
  image(img, 0 ,0);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  } else {
    console.log(results);
    createDiv(`label: ${results[0].label}`);
    createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
  }
}
