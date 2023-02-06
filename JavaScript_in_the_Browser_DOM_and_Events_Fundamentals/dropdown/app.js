const navContents = document.querySelector('.contents')
const dropDownlist = document.querySelector('.drop-content')
const upArrow = document.querySelector('#uparrow')

let opened = false
const listDropdowns = () => {
    dropDownlist.classList.remove('hidden')
    opened = true
}
const closeDropdown= () => {
    dropDownlist.classList.add('hidden')
    opened = false
}
navContents.addEventListener('mouseover', () => {
        listDropdowns()
        upArrow.innerHTML = "&uarr;"
    })
navContents.addEventListener('mouseout', () => {
    if(opened){
        closeDropdown()
        upArrow.innerHTML = "&darr;"
    }

})

dropDownlist.addEventListener('mouseover', () => {
    listDropdowns()
    opened = false
    upArrow.innerHTML = "&uarr;"
})
dropDownlist.addEventListener('mouseout', () => {
    closeDropdown()
    opened = true
    upArrow.innerHTML = "&darr;"
})