let btn = document.getElementById('burger');
let btn_disable = document.getElementById('burger-disable');
let menu = document.getElementById('menu');
let menu_page_disabler = document.getElementById('menu-page-disabler')
btn.addEventListener('click', active)
function active() {
    menu.style.transition ='all, 0s'; 
    menu.style.display = 'block';
    menu_page_disabler.style.display = 'none'
}

btn_disable.addEventListener('click', disable)
function disable() {
    menu.style.transition ='all, 0s'; 
    menu.style.display = 'none';
    menu_page_disabler.style.display = 'block'
}