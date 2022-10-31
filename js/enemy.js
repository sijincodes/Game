//let container = document.querySelector('.container')
let container = document.querySelector(".container");
let containerHeight = container.offsetHeight;
let containerWidth = container.offsetWidth;

let imgArray = [
  "/Images/cersei.png",
  "/Images/jaime3.png",
  "/Images/joffery2.png",
  "/Images/little-finger.png",
  "/Images/ramsay1.png",
  "/Images/tyrion1-img.png",
];

let startBtn = document.querySelector(".btn");
imgArray.forEach((elm) => {
  //const enemy = document.createElement("img");
  let enemy = document.createElement("img");
  enemy.setAttribute("class", "enemy");
  //enemy.setAttribute("src", "/Images/tyrion1-img.png");
  enemy.setAttribute("src", elm);
//})
  setInterval(() => {
    let randomTop = Math.random() * (containerHeight - 100);
    let randomLeft = Math.random() * (containerWidth - 250);
    //let randomBottom=Math.random()*(containerHeight)

    enemy.style.position = "absolute";
    enemy.style.top = randomTop + "px";
    enemy.style.left = randomLeft + "px";
    //enemy.style.bottom=randomBottom+'px'
  }, 1000);
//});
window.addEventListener('click', elm =>{
    console.log(elm.path[0])
if(elm.path[0]==document.querySelector('.btn')){
  bloodspot.style.top=50+'px';
    bloodspot.style.left=50+'px';
   
}
else{
    bloodspot.style.top= elm.pageY +'px';
    bloodspot.style.left=elm.pageX +'px';
}

    if(elm.target===enemy)
    score++;
    startBtn.innerText='SCORE: '+score

})

startBtn.addEventListener("click", () => {
  container.appendChild(enemy);
  startBtn.innerText = "SCORE: " + score;
}); })
