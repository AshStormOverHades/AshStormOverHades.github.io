const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links')
    const navLinks = document.querySelectorAll('.nav_links li');

    //toggle nav for mobile
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

    //animate link fades
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.45}s`;

        }
        // Test 1: console.log(index/7);

    });
    //burger animation
    burger.classList.toggle('toggle');

        
    });

}    

navSlide();