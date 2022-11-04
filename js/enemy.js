let container = document.querySelector(".container");
let containerHeight = container.offsetHeight;
let containerWidth = container.offsetWidth;
let lives = 5;

let imgArray = [
  "../Images/cersei.png",
  "../Images/jaime10.png",
  "../Images/joffery3.png",
  "../Images/little-finger.png",
  "../Images/ramsey8.png",
  "../Images/tyrion1-img.png",
];

let startBtn = document.querySelector(".btn");
let livesSpan = document.querySelector(".lives");
let scoreCard = document.querySelector(".score");
let backgroundAudio = document.querySelector("#audio");

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
  backgroundAudio.play();
  initiateGame();
  startBtn.style.display = "none";
  scoreCard.style.display = "block";
  scoreCard.innerText = "Score: 0";
  livesSpan.style.display = "block";
  livesSpan.innerText = "Lives: ";

  initiateShooting();
});
