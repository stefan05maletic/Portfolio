
function menuBtn() {
    let nav = document.querySelector('.navbarMenu');
    let menu = document.querySelector('#menu');
    let close = document.querySelector('#closeBtn');
    nav.style.display = 'flex';
    menu.style.display = 'none';
    close.style.top = '-6.3rem';
    close.style.zindex='10';
   
}
function closeBtn(){
    let nav = document.querySelector('.navbarMenu');
    let menu = document.querySelector('#menu');
    let close = document.querySelector('#closeBtn');
    nav.style.display = 'none';
    menu.style.display = 'block';
    close.style.top = '-100rem';
}