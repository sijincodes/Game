let bloodspot = document.querySelector(".bloodspot");
let score = 0;
let pistalAudio = document.querySelector("#pistalAudio");

function playSound() {
  pistalAudio.currentTime = 0;
  pistalAudio.play();
}

function initiateShooting() {
  window.addEventListener("click", (el) => {
    if (el.path[0] == startBtn) {
      bloodspot.style.top = 10 + "px";
      bloodspot.style.left = 250 + "px";
      scoreCard.innerText = "SCORE: " + score;
      livesSpan.innerText = "LIVES: " + lives;
    } else {
      bloodspot.style.top = el.pageY + "px";
      bloodspot.style.left = el.pageX + "px";
    }
    playSound();
    if (imgArray.includes(el.target.getAttribute("src"))) {
      score++;
      scoreCard.innerText = "SCORE: " + score;

      container.removeChild(el.target);
    } else {
      lives--;
      livesSpan.innerText = "Lives: " + lives;
    }
    scoreKeeper();
  });
}
