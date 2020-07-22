var img = []
var contador=0;
var tempo = 0;

function preload() {
  img[0] = loadImage('Walk (1).png');
  img[1] = loadImage('Walk (2).png');
  img[2] = loadImage('Walk (2).png');
  img[3] = loadImage('Walk (3).png');
  img[4] = loadImage('Walk (4).png');
  img[5] = loadImage('Walk (5).png');
  img[6] = loadImage('Walk (6).png');
  img[7] = loadImage('Walk (7).png');
  img[8] = loadImage('Walk (8).png');
  img[9] = loadImage('Walk (9).png');
  img[10] = loadImage('Walk (10).png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  tempo++;

  background(0);
  image(img[contador%10], 10,10,150,150);
  if(tempo>5) {
     contador++;
     tempo=0;
  }

}
    