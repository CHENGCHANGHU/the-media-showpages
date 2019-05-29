let para = {

}

$(function () {
    const { log } = console;

    $('.main-content-box').eq(0).css('height', '1200px');
    $('.side-content-box').eq(0).css('height', '1100px');
    $('.content-container').eq(0).css('height', $('.main-content-box').height());
    $('.content-box').eq(0).css('height', $('.content-container').outerHeight());

    log($(window).height());//浏览器显示区域（可视区域）的高度
    log($(document).height());//页面的文档高度 
    log($(document.body).height());//浏览器当前窗口文档body的高度



});

// 滚动时间监听
$(document).scroll(function () {
    var scroH = $(document).scrollTop();  //滚动高度
    var viewH = $(window).height();  //可见高度 
    var contentH = $(document).height();  //内容高度

    $('.left-fix-box').eq(0).css('top', 350 + scroH + 'px');
    $('.right-fix-box').eq(0).css('top', 350 + scroH + 'px');

    // 顶部固定 右侧较矮
    if (scroH >= $('.top-nav-box').eq(0).height()) {
        $('.side-content-box').eq(0).css('top', scroH - $('.top-nav-box').eq(0).height() + 'px');
    } else {
        $('.side-content-box').eq(0).css('top', 0 + 'px');
    }

    // 底部固定 右侧较长
    if (scroH >= $('.top-nav-box').eq(0).height() + $('.side-content-box').eq(0).height() - $(window).height()) {
        $('.side-content-box').eq(0).css('top', scroH + $(window).height() - ($('.top-nav-box').eq(0).height() + $('.side-content-box').eq(0).height()) + 'px');
    }

    if (scroH >= $('.top-nav-box').eq(0).height() + $('.main-content-box').eq(0).height() - $(window).height()) {
        $('.side-content-box').eq(0).css('top', $('.main-content-box').eq(0).height() - $('.side-content-box').eq(0).height() + 'px');
    }
});