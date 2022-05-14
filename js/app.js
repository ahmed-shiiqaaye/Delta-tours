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