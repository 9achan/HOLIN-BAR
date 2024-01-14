$(function () {
    $(".carousel-item").eq(0).addClass("active");
    var total = $(".carousel-item").length;
    var current = 0;
    var intervalId;

    function startInterval() {
        // 啟動定時器，每隔3500毫秒（3.5秒）切換到下一張輪播項
        intervalId = setInterval(function () {
            var next = (current + 1) % total;
            setSlide(current, next);
            current = next;
        }, 3500);
    }

    startInterval(); // 初始啟動定時器

    $("#moveRight").on("click", function () {
        var next = (current + 1) % total;
        setSlide(current, next);
        current = next;
        clearInterval(intervalId); // 清除定時器
        startInterval(); // 重新啟動定時器
    });

    $("#moveLeft").on("click", function () {
        var prev = (current - 1 + total) % total;
        setSlide(current, prev);
        current = prev;
        clearInterval(intervalId); // 清除定時器
        startInterval(); // 重新啟動定時器
    });

    function setSlide(prev, next) {
        $(".carousel-item").eq(prev).removeClass("active");
        $(".carousel-item").eq(next).addClass("active");
    }
});

/*
$(function () {
    $('.carousel-item').eq(0).addClass('active');
    var total = $('.carousel-item').length;
    var current = 0;
    $('#moveRight').on('click', function () {
        var next = current;
        current = current + 1;
        setSlide(next, current);
    });
    $('#moveLeft').on('click', function () {
        var prev = current;
        current = current - 1;
        setSlide(prev, current);
    });
    function setSlide(prev, next) {
        var slide = current;
        if (next > total - 1) {
            slide = 0;
            current = 0;
        }
        if (next < 0) {
            slide = total - 1;
            current = total - 1;
        }
        $('.carousel-item').eq(prev).removeClass('active');
        $('.carousel-item').eq(slide).addClass('active');
        setTimeout(function () {

        }, 800);



        console.log('current ' + current);
        console.log('prev ' + prev);
    }
});
*/