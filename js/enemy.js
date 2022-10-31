//let container = document.querySelector('.container')
let container= document.querySelector('body')
const enemy=document.createElement('img');
let startBtn = document.querySelector('.btn')
enemy.setAttribute('class','enemy');
enemy.setAttribute('src','/Images/Cersei-Lannister-PNG-Image.png')

let containerHeight=container.offsetHeight;
let containerWidth=container.offsetWidth;

setInterval(() =>{
 let randomTop =Math.random()*(containerHeight-150)
let randomLeft = Math.random()*(containerWidth-150)

enemy.style.position='absolute'
enemy.style.top=randomTop+ 'px'
enemy.style.left=randomLeft+'px'

},1000)

startBtn.addEventListener('click',() =>{
container.appendChild(enemy)
startBtn.innerText='SCORE: '+score
})