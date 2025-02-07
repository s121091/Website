// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// 打字机效果
document.addEventListener('DOMContentLoaded', function() {
    console.log('脚本已加载！'); // 检查脚本是否执行

    const titleOptions = {
        strings: ['欢迎来到未来'],
        typeSpeed: 100,
        showCursor: false,
    };

    const subtitleOptions = {
        strings: ['探索我们的全新产品'],
        typeSpeed: 80,
        startDelay: 1500,
        showCursor: false,
    };

    const titleTyped = new Typed('#typing-title', titleOptions);
    const subtitleTyped = new Typed('#typing-subtitle', subtitleOptions);
});
