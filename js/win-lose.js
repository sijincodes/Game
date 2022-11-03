let lostSpan = document.querySelector(".lost");
// lostSpan.innerText=' '
//livesSpan.addEventListener(function()
// if (lives == 0 && score!=6) {
//     console.log("am here in lostspan")
//   lostSpan.style.display = "block";
//   lostSpan.innerText = "YOU LOST!!";
//   imgArray = [];
// }
//})

//isWin = false;

function scoreKeeper() {
  if (lives == 0 && score != imgArray.length) {
    // lostSpan.style.display = "block";
    //   lostSpan.innerText = "YOU LOST!!";
    livesSpan.style.display = "none";
    startBtn.style.display = "none";

    toggleModalUpdate(false);
    // toggleModal();

    // alert('You lost. Dont Cry ')
    //window.location.reload();
  } else if (score == imgArray.length) {
    startBtn.innerText = "SCORE: " + score;

    // isWin=true;
    // toggleModalUpdate();
    // toggleModal();

    document.querySelector(".background").src = "/Images/wonImage2.jpeg";
    toggleModalUpdate(true);
    //    setTimeout(() => {
    //     alert("You won");
    //   }, "500")
  }

  // window.location.reload()

  // enemy.style.display='none'
  // setTimeout(window.location.reload(), 10000);
}
