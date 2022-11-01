//let container = document.querySelector('.container')
let container = document.querySelector(".container");
let containerHeight = container.offsetHeight;
let containerWidth = container.offsetWidth;
let lives = 4;

let imgArray = [
  "/Images/cersei.png",
  "/Images/jaime10.png",
  "/Images/joffery3.png",
  "/Images/little-finger.png",
  "/Images/ramsey8.png",
  "/Images/tyrion1-img.png",
];
let offsetArr = [
  "/Images/little-finger.png",
  "/Images/ramsey8.png",
  "/Images/tyrion1-img.png",
];

let startBtn = document.querySelector(".btn");
let livesSpan = document.querySelector(".lives");

function initiateGame() {
  imgArray.forEach((elm) => {
    let enemy = document.createElement("img");
    enemy.setAttribute("class", "enemy");

    enemy.setAttribute("src", elm);

    setInterval(() => {
      let randomTop = Math.random() * (containerHeight - 100);
      let randomLeft = Math.random() * (containerWidth - 250);

      enemy.style.position = "absolute";
      enemy.style.top = randomTop + "px";
      enemy.style.left = randomLeft + "px";
    }, 1000);

    container.appendChild(enemy);
  });
}

startBtn.addEventListener("click", () => {
  initiateGame();
  startBtn.innerText = "SCORE: " + score;
  //livesSpan.innerText="Lives: "+lives;
});
