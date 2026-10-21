// Add custom JavaScript here
function userScroll() {
    cost navbar = document.querySelector('navbar')

    window.addEventListener('scroll', ()=> {
        if(window.scrolly > 50){
            navbar.classsList.add('bg-dark')
        } else {
            navbar.classList.remove('bg-dark')
        }
    })  
}

document.addEventListener('DOMContentLoaded')