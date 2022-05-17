let nextBtn = document.querySelectorAll('.next')
let prevBtn = document.querySelectorAll('.prev')
let sliderContainer = document.querySelectorAll('.slider-container');

sliderContainer.forEach((slider,i)=>{
    let sliderWidth = slider.getBoundingClientRect().width;

    nextBtn[i].addEventListener('click',()=>{
        slider.scrollLeft += sliderWidth
    })
    prevBtn[i].addEventListener('click',()=>{
        slider.scrollLeft -= sliderWidth
    })
})


let tabBtns = document.querySelectorAll('.btns-container .btn')
tabBtns.forEach((tab, i)=>{
    tab.addEventListener('click',()=>{
        tabBtns.forEach(btn=>{
            btn.classList.remove('active')
        })
        tabBtns[i].classList.add('active')   
    })
})


let navAngerTag = document.querySelectorAll('.nav_link');
let navLinks = document.querySelectorAll('.nav_links');
let menuIcon = document.querySelectorAll('.menu_icon');

menuIcon.forEach(menu=>{
    menu.addEventListener('click',()=>{
       navLinks.forEach(eachNavLink =>{
           eachNavLink.classList.toggle('active')
       })
        // alert('wow')
    })
})
