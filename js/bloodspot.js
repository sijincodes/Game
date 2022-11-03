let bloodspot = document.querySelector(".bloodspot");
let score = 0;
let pistalAudio = document.querySelector("#pistalAudio");

function initiateShooting() {
  window.addEventListener("click", (el) => {
    console.log(el.target.getAttribute("src") + " el.target");
    if (el.path[0] == startBtn) {
      bloodspot.style.top = 10 + "px";
      bloodspot.style.left = 250 + "px";
      startBtn.innerText = "SCORE: " + score;
      livesSpan.innerText = "LIVES: " + lives;
    } else {
      bloodspot.style.top = el.pageY + "px";
      bloodspot.style.left = el.pageX + "px";
    }
    pistalAudio.play();
    if (imgArray.includes(el.target.getAttribute("src"))) {
      score++;
      startBtn.innerText = "SCORE: " + score;

      container.removeChild(el.target);
    } else {
      lives--;
      livesSpan.innerText = "Lives: " + lives;
    }
    scoreKeeper();
  });
}
