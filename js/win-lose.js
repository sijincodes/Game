let lostSpan = document.querySelector(".lost");
function scoreKeeper() {
  if (lives == 0 && score != imgArray.length) {
    livesSpan.style.display = "none";
    scoreCard.style.display = "none";
    let looseImages = document.querySelectorAll(".enemy");
    looseImages.forEach((looseImage) => {
      container.removeChild(looseImage);
    });
    toggleModalUpdate(false);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } else if (score == imgArray.length) {
    livesSpan.style.display = "none";
    scoreCard.style.display = "none";
    scoreCard.innerText = "SCORE: " + score;
    document.querySelector(".background").src = "../Images/wonImage2.jpeg";
    toggleModalUpdate(true);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
}
