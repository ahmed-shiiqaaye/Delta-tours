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

let myHeader = document.querySelectorAll('header.header');

myHeader.forEach((header,index)=>{
    let headerHeight = header.getBoundingClientRect().height;
    let windowHeight = window.pageYOffset;
    if(windowHeight > headerHeight){
        header.classList.add('fixed')
    }else{
        header.classList.remove('fixed')
    }
    console.log(headerHeight);
})
