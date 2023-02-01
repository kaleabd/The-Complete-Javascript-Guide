const sideBar = document.querySelector('.side-bar')
const overLay = document.querySelector('.overlay')
const openSidebar = document.querySelector('.open-sidebar')
const closeSidebar = document.querySelector('.close-sidebar')

openSidebar.addEventListener("click", () => {
    sideBar.classList.remove('hidden')
    overLay.classList.remove('hidden')
    openSidebar.classList.add('hidden')
})
closeSidebar.addEventListener("click", () => {
    sideBar.classList.add('hidden')
    overLay.classList.add('hidden')
    openSidebar.classList.remove('hidden')
})


