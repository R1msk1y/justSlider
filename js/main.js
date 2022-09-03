const slider = document.querySelector(`#slider`);
const sliderItems = Array.from(slider.children);

sliderItems.forEach((slide, index)=>{

    if(index !== 0){
        slide.classList.add(`none`);
    }

    slide.dataset.index = index;

    slide.addEventListener('click', ()=>{

        slide.classList.add(`none`);

        let nextSlideIndex;

        if(index + 1 === sliderItems.length){
            nextSlideIndex = 0;
        } else{
            nextSlideIndex = index + 1;
        }

        const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);

        nextSlide.classList.remove(`none`);

    });

});
