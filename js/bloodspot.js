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
    livesSpan.innerText = "Lives: " + lives--;
  }
  //     console.log(el.target + "el target from not being === enemy")
  //    lives--;
  //    livesSpan.innerText="Lives: "+ lives;
  //   //  console.log(lives + " from el.target=container")

  // }
});
// code to push new enemies to screen --> when & how will this work?!?!?!? :'( :'(
//   if(imgArray.length==0){
//     offsetArr.forEach(offsetElm =>{

//           imgArray.push(offsetElm)
//           this.print();

//       })
//  }
