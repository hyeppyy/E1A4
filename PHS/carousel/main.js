var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    prevBtn = document.querySelector('.prev'),
    slideWidth = 886, 
    nextBtn = document.querySelector('.next');

if (slides !== null) {
    function moveSlide(num) {
        if (slides !== null) {
            slides.style.transform = 'translateX(' + (-num * slideWidth) + 'px)';
            currentIdx = num;
        }
    }

    if (nextBtn !== null) {
        nextBtn.addEventListener('click', function() {
            if (currentIdx < slideCount - 1) {
                moveSlide(currentIdx + 1);
            } else {
                moveSlide(0);
            }
        });
    }

    if (prevBtn !== null) {
        prevBtn.addEventListener('click', function() {
            if (currentIdx > 0) {
                moveSlide(currentIdx - 1);
            } else {
                moveSlide(slideCount - 1);
            }
        });
    }
} else {
    console.error('slides 요소를 찾을 수 없습니다.');
}
