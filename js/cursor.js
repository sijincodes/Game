const cursor=document.querySelector('.cursor')
window.addEventListener('mousemove', elm =>{
    cursor.style.top= elm.pageY+'px';
    cursor.style.left= elm.pageX+'px';

})