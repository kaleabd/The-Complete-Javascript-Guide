const btn = document.querySelector('.view-btn')
const description = document.querySelector('.desc')
const show = document.querySelectorAll('.show')
const close = document.querySelector('.close')
const img = document.querySelector('.inner-card img')

let opened = true
close.classList.add('hidden')

btn.addEventListener('click', () => {
    if (opened) {
        description.classList.remove('hidden')
        show.forEach(e => e.classList.add('hidden')) 
        close.classList.remove('hidden')
        opened = false
        console.log(opened)
    }else{
        description.classList.add('hidden')
        show.forEach(e => e.classList.remove('hidden'))
        opened = true
        btn.innerHTML = "View More"
        close.classList.add('hidden')
    }
    
})
close.addEventListener('click', () => {
    description.classList.add('hidden')
    show.forEach(e => e.classList.remove('hidden'))
    opened = true
    btn.innerHTML = "View More"
    close.classList.add('hidden')
})