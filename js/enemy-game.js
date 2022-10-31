// let myFileArray = [
//   "/Images/Cersei-Lannister-PNG-Image.png",
//   "/Images/Cersei-Lannister-PNG-Image.png",
// ]; // picture names,, add more
// let myImageArray = [];
// let many;

// function setup() {
//   size(640, 360);
//   many = myFileArray.length;
//   myImageArray = new PImage[many]();
//   for (let i = 0; i < many; i++) myImageArray[i] = loadImage(myFileArray[i]); // load all images// from sketchdir or data/
//   frameRate(1);
// }

// function draw() {
//   let idx = random(many); // select a random index number
//   let x = random(containerWidth - 150); // and a random picture position
//   let y = random(containerHeight - 150);
//   //println("i "+idx+" "+myFileArray[idx]);
//   image(myImageArray[idx], x, y); // and show it
// }
