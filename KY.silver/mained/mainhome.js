const swiper = new Swiper('.swiper-container', {
    autoplay: { // 자동 실행
        delay: 3000,
        disableOnInteraction: false // 사용자 상호작용 시 자동 재생 멈춤 비활성화
    },
    loop: true, // 무한 반복
    slidesPerView: 3, // 3 개 보이도록
    centeredSlides: true, // 첫번째 슬라이드를 가운데에 보이도록
    spaceBetween: 10, // 슬라이드 사이 여백
    navigation: { // 버튼 활성화
      prevEl: '.swiper-prev',
      nextEl: '.swiper-next'
    },
    effect: 'slide', // 슬라이드 전환 효과
    speed: 800, // 슬라이드 전환 속도 → 이거로 부드럽게 움직이게 할 수 있슴
    // SWIPER ACTIVE
    on: {
      slideChange: function() { // 슬라이드가 실행될 때 마다 바뀌도록 함
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(slide => { // foreach 로 slides 의 배열 요소를 실행
          slide.classList.remove('swiper-slide-active'); // active 요소를 삭제
        });
        // 현재 활성화 된 슬라이드 요소에 active 를 추가시킴
        this.slides[this.activeIndex].classList.add('swiper-slide-active');
        }
    }
});

// 아이콘 클릭 이벤트
const prevButton = document.querySelector('.swiper-prev');
const nextButton = document.querySelector('.swiper-next');

prevButton.addEventListener('click', function () {
  swiper.slidePrev(); // 이전 슬라이드로 이동
});

nextButton.addEventListener('click', function () {
  swiper.slideNext(); // 다음 슬라이드로 이동
});