let hamburger_Menu = document.getElementById('hm_menu')
let navLinks = document.getElementById('nav-links')
let closeBtn =  document.getElementById('close-btn')


hamburger_Menu.addEventListener('click', displayMenu)
function displayMenu (){
    navLinks.style.display = 'block'
    hamburger_Menu.style.display = 'none'
    closeBtn.style.display = 'block'
    hamburger_Menu.style.display = 'none'
}

navLinks.addEventListener('click', displayClose)
function displayClose (){
    navLinks.style.display = 'none'
    hamburger_Menu.style.display = "block"
    closeBtn.style.display = 'none'
}

closeBtn.addEventListener('click', closeMenu)
function closeMenu (){
    navLinks.style.display = 'none'
    hamburger_Menu.style.display = 'block'
    closeBtn.style.display = 'none'
}