const slider = document.querySelector(`#slider`);
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector(`#btnNext`);

sliderItems.forEach((slide, index)=>{

    if(index !== 0){
        slide.classList.add(`none`);
    }

    slide.dataset.index = index;
    slide.setAttribute(`data-active`, '');

    slide.addEventListener('click', ()=>{

        slide.classList.add(`none`);
        slide.removeAttribute('data-active','');

        let nextSlideIndex;

        if(index + 1 === sliderItems.length){
            nextSlideIndex = 0;
        } else{
            nextSlideIndex = index + 1;
        }

        const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);

        nextSlide.classList.remove(`none`);
        nextSlide.setAttribute(`data-active`, '');

    });

});


btnNext.onclick = () => {

    const activeSlide = slider.querySelector(`[data-active]`);
    const activeSlideIndex = +activeSlide.dataset.index;

   

    activeSlide.classList.add(`none`);
    activeSlide.removeAttribute(`data-active`, '');

    let nextSlideIndex;

    if(activeSlideIndex + 1 === sliderItems.length){
        nextSlideIndex = 0
    } else{
        nextSlideIndex = activeSlideIndex + 1
    }

    const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);
    nextSlide.classList.remove(`none`);
    nextSlide.setAttribute(`data-active`, '');

    

    
    
    
    
   
}


