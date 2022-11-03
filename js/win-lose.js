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
function scoreKeeper(){
if (lives == 0 && score!=6) {
    console.log("am here in lostspan")
  lostSpan.style.display = "block";
//   lostSpan.innerText = "YOU LOST!!";
 livesSpan.style.display='none';
 startBtn.style.display='none'
 alert('You lost. Dont Cry ')
 window.location.reload() 
 
 }
 else if(score ==6){
    startBtn.innerText = "SCORE: " + score
   document.querySelector('.background').src='/Images/wonImage2.jpeg'
   setTimeout(() => {
    alert("You won");
  }, "500")

}  
  // window.location.reload() 

 // enemy.style.display='none'
 // setTimeout(window.location.reload(), 10000);
  

}