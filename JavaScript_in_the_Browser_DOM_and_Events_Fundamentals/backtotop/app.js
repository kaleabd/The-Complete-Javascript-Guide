const showOnpx = 200
const backToTopButton = document.querySelector('.back-to-top')
const pageProgressBar = document.querySelector('.progress-bar')


const scrollContainer = () => {
    return document.documentElement || document.body
}

document.addEventListener("scroll", () => {
    if(scrollContainer().scrollTop > showOnpx){
        backToTopButton.classList.remove('hidden')
    }else{
        backToTopButton.classList.add('hidden')
    }
})

const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

backToTopButton.addEventListener("click", goToTop)

document.addEventListener("scroll", () => {
    const scrolledPercentage = (scrollContainer().scrollTop / (scrollContainer().scrollHeight - scrollContainer().clientHeight)) * 100

    pageProgressBar.style.width = `${scrolledPercentage}%`
})



