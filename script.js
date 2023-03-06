const bar=document.getElementById('bar');
const close=doument.getElementById('close');
const navb=document.getElementsByClassName('nav');

if(bar){
    bar.addEventListener('click',()=>{
navb.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        navb.classList.remove('active');
    })
}