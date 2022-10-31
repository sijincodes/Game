//let container = document.querySelector('.container')
let container= document.querySelector('.container')
const enemy=document.createElement('img');
let startBtn = document.querySelector('.btn')
enemy.setAttribute('class','enemy');
enemy.setAttribute('src','/Images/Cersei-Lannister-PNG-Image.png')

let containerHeight=container.offsetHeight;
let containerWidth=container.offsetWidth;
//console.log(containerHeight +' CH '+containerWidth)
setInterval(() =>{
 let randomTop =Math.random()*(containerHeight-100)
let randomLeft = Math.random()*(containerWidth-250)
//let randomBottom=Math.random()*(containerHeight)

enemy.style.position='absolute'
enemy.style.top=randomTop+ 'px'
enemy.style.left=randomLeft+'px'
//enemy.style.bottom=randomBottom+'px'

},1000)

startBtn.addEventListener('click',() =>{
container.appendChild(enemy)
startBtn.innerText='SCORE: '+score
})