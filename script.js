// 等待文档加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('脚本已加载！');

    // 平滑滚动
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 导航项高亮显示
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY || window.pageYOffset;

        sections.forEach(section => {
            if (scrollPos + 100 >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                document.querySelectorAll('nav a').forEach(a => {
                    a.classList.remove('active');
                });
                let id = section.getAttribute('id');
                let navLink = document.querySelector(`nav a[href="#${id}"]`);
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    });

    // 打字机效果
    const titleOptions = {
        strings: ['欢迎来到我们的世界', '体验非凡的品质', '开启全新旅程'],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true,
        showCursor: false,
    };

    const subtitleOptions = {
        strings: ['探索我们的产品', '感受卓越的服务', '联系我们了解更多'],
        typeSpeed: 70,
        backSpeed: 35,
        startDelay: 500,
        loop: true,
        showCursor: false,
    };

    initTypedEffect('#typing-title', titleOptions);
    initTypedEffect('#typing-subtitle', subtitleOptions);

    function initTypedEffect(elementId, options) {
        if (document.querySelector(elementId)) {
            new Typed(elementId, options);
        }
    }

    // 初始化 AOS 动画
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true, // 页面滚动时，动画是否只执行一次
    });
});
