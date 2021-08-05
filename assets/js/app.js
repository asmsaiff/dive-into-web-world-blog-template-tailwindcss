const has_children_menu_item        =   document.getElementById('menu-item-has-children')
const sub_menu                      =   document.getElementById('sub-menu')
const openIcon                      =   document.getElementById('open')
const closeIcon                     =   document.getElementById('close')
const menubar                       =   document.getElementById('primaryMenu')

function load_event() {
    has_children_menu_item.addEventListener('mouseenter', showSubMenu)
    has_children_menu_item.addEventListener('mouseleave', hideSubMenu)

    openIcon.addEventListener('click', openToggle)
    closeIcon.addEventListener('click', closeToggle)
}
load_event()

function showSubMenu() {
    sub_menu.style.display = 'block'
}
    
function hideSubMenu() {
    sub_menu.style.display = 'none'
}


function openToggle() {
    openIcon.style.display = 'none'
    closeIcon.style.display = 'block'
}

function closeToggle() {
    closeIcon.style.display = 'none'
    openIcon.style.display = 'block'
}