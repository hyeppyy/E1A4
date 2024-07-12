const swiper = new Swiper('.swiper-container', {
    autoplay: { // 자동실행
      delay: 3000, // 3초간
      disableOnInteraction: false // 사용자 상호작용 시 자동 재생 멈춤 비활성화
    },
    loop: true, // 무한 반복
    slidesPerView: 3, // 슬라이드 3개 보이도록
    centeredSlides: true, // 중간이 첫번째 이미지
    spaceBetween: 0, // 슬라이드 여백
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    effect: 'slide',
    speed: 800, // 슬라이드 전환 속도 (이걸로 부드럽게 움직일 수 있음)
    on: {
      slideChange: function() {
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(slide => {
          slide.classList.remove('swiper-slide-active');
        });
        this.slides[this.activeIndex].classList.add('swiper-slide-active');
      }
    }
});