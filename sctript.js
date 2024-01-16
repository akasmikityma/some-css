document.querySelector('#bn').addEventListener('click',()=>{
    document.querySelector('.h').style.color='rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
    document.querySelector('.card').style.visibility='visible';
})
document.querySelector('#bnus').addEventListener('click',()=>{
    document.querySelector('.card').style.visibility='hidden';
})