//let container = document.querySelector('.container')
let container = document.querySelector(".container");
let containerHeight = container.offsetHeight;
let containerWidth = container.offsetWidth;

let imgArray = [
  "/Images/cersei.png",
  "/Images/jaime10.png",
    "/Images/joffery3.png",
    // "/Images/little-finger.png",
    // "/Images/ramsey8.png",
    // "/Images/tyrion1-img.png"
];
let offsetArr = [
    "/Images/little-finger.png",
    "/Images/ramsey8.png",
    "/Images/tyrion1-img.png"
]

let startBtn = document.querySelector(".btn");


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


  window.addEventListener("click", (el) => {
   // console.log(el.target);
    if (el.path[0] == startBtn) {
      bloodspot.style.top = 50 + "px";
      bloodspot.style.left = 50 + "px";
      startBtn.innerText = "SCORE: " + score;
    } else {
      bloodspot.style.top = el.pageY + "px";
      bloodspot.style.left = el.pageX + "px";
    }

    if (el.target === enemy) {
        
      score++;
      startBtn.innerText = "SCORE: " + score;
      container.removeChild(el.target);
     
    }

  });
  // code to push new enemies to screen --> when & how will this work?!?!?!? :'( :'( 
//   if(imgArray.length==0){
//     offsetArr.forEach(offsetElm =>{
     
//           imgArray.push(offsetElm)
//           this.print();
    
        
//       })
//  }

  startBtn.addEventListener("click", () => {
    container.appendChild(enemy);
    startBtn.innerText = "SCORE: " + score;
  });

});
 

