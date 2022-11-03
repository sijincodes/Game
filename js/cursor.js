const cursor=document.querySelector('.cursor')
//let cannon=document.querySelector('.cannon')
window.addEventListener('mousemove', elm =>{
    cursor.style.top= elm.pageY+'px';
    cursor.style.left= elm.pageX+'px';

//     centerY = containerHeight - window.pageYOffset,
// 	centerX = containerHeight - window.pageXOffset,
//  radians = Math.atan2(elm.pageX - centerX, elm.pageY - centerY)

//     // degrees= [30,45,60,90,120,145]
//     // for(let i=0;i<degress.length;i++){
//         cannon.style.transform = 'rotate('+degrees[i]+'deg)';
    // }


})