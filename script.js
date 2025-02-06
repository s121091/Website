// 初始化 Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// 初始化 GSAP 动画
gsap.from('h1', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from('p', { opacity: 0, y: 50, duration: 1, delay: 1 });