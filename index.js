document.querySelector('#btn-menu').addEventListener('click', toggleMenu)

function toggleMenu() {
    const wrapper = document.querySelector('#wrapper')
    const menu_mobile = document.querySelector('#menu-mobile')
    const btn_menu = document.querySelector('#menu-open')
    const btn_close = document.querySelector('#menu-close')

    menu_mobile.classList.toggle('hidden')
    wrapper.classList.toggle('hidden')
    btn_menu.classList.toggle('hidden')
    btn_close.classList.toggle('hidden')
}

[...document.querySelectorAll('#menu-desktop > div')].forEach(item => {
    item.addEventListener('click', setActualMenu)
})

function setActualMenu(e) {
    [...document.querySelectorAll('#menu-desktop > div > a')].forEach(item => {
        item.classList.remove('border-b-2', 'border-lime')
     })

    e.target.classList.add('border-b-2', 'border-lime')
}
