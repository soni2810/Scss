const mainMenu = document.querySelector(".main-menu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll('nav .main-menu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '38%';
}
function close(){
    mainMenu.style.top = '-100%';
}