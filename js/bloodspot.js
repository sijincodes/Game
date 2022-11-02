let bloodspot = document.querySelector(".bloodspot");
let score = 0;

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

  if (imgArray.includes(el.target.getAttribute("src"))) {
    score++;
    startBtn.innerText = "SCORE: " + score;

    container.removeChild(el.target);
  }
  else {
   lives--;
   livesSpan.innerText = "Lives: " +lives
  }
  if (lives == 0 && score!=6) {
    console.log("am here in lostspan")
  lostSpan.style.display = "block";
 // lostSpan.innerText = "YOU LOST!!";
 livesSpan.style.display='none';
 startBtn.style.display='none'
 alert('You lost. Dont Cry ')
 window.location.reload() 
 
 }
 else if(score ==6){
   document.querySelector('.background').src='/Images/wonImage2.jpeg'
   if(document.querySelector('.background').src='/Images/wonImage2.jpeg')
    alert("You won")
   // window.location.reload() 

 // enemy.style.display='none'
 // setTimeout(window.location.reload(), 10000);
  

}
  
});
// code to push new enemies to screen --> when & how will this work?!?!?!? :'( :'(
//   if(imgArray.length==0){
//     offsetArr.forEach(offsetElm =>{

//           imgArray.push(offsetElm)
//           this.print();

//       })
//  }
