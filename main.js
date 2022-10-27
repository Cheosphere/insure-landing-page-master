const menuIcon = document.getElementById('menu_icon')
const menuMobile = document.getElementById('menu_mobile')
const ctaBtnHeader = document.querySelector('.hero_content_info_btn')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('close_menu')
    menuMobile.classList.toggle('show_menu')
    ctaBtnHeader.classList.toggle('z-index')

    anime({
        targets: '.header_navbar_menu_item',
        opacity: [0,1],
        translateY: [-100, 0],
        delay: 200,
        easing: 'easeInOutQuad'
    })

})




