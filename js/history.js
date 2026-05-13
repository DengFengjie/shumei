window.onload = function () {
    $(document).ready(function () {
        let swiper = new Swiper('.swiper', {
            autoplay: true,
            speed: 200,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }
        })



        //判断是否为移动端
        let isMobile = 'ontouchstart' in document;
        if (isMobile) {
            $('.fadeInUp1,.fadeInUp2,.fadeInUp3').css('opacity', '1.0');
            $('.swiper').css('height', '30vh');
        } else {
            // PC端样式
            return;
        }
    });

    //元素淡入淡出效果
    $(window).on('scroll', function () {
        let isMobile1 = 'ontouchstart' in document;
        if (isMobile1) return;
        let scrollTop = $(this).scrollTop();
        let home1Top = $(".home1").outerHeight();
        let item1Top = $(".item1").outerHeight();

        if (scrollTop > home1Top  / 3) {
            $(".fadeInUp1").each(function (i) {
                $(this)
                    .delay(i * 100)
                    .queue(function () {
                        $(this).addClass("animate__animated animate__fadeInUp");
                    });
            });
        }
        if (scrollTop > (home1Top + item1Top) * 2 / 3) {
            $(".home2-items .item").each(function (i) {
                $(this)
                    .delay(i * 500)
                    .queue(function () {
                        $(this).addClass("animate__animated animate__fadeInUp");
                    });
            });
        }
    });
}