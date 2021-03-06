$(function () {
    $("#fullpage").fullpage({
        //内容是否居中
        verticalCentered: false,
        //是否显示导航
        navigation: true,
        //滚动速度，单位毫秒
        scrollingSpeed: 1000,
        //屏幕一离开 马上触发
        // index 从那个屏幕离开
        // nextIndex 要到哪个屏幕
        // direction up还是down
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex != 1) {
                $(".bgBox").addClass("otherSec");
            } else {
                $(".bgBox").removeClass("otherSec");
            }
            if (index == 1) {
                $(".skinBox").addClass("s1_begin_status");
            }

            if (index == 2) {
                $(".sec2TitleBox").addClass("sec2TitleBox_end_status");
                setTimeout (function(){
                    //移除过渡的属性
                    $(".sec2TitleBox").css("transition","none");
                    // 会有一个 bug 会闪一闪 
                    $(".sec2TitleBox").attr("class","sec2TitleBox sec2TitleBox_begin_status");
                    //这样就偷偷告诉它了
                    document.querySelector(".sec2TitleBox").offsetTop;
                    //重新添加过渡的属性
                    $(".sec2TitleBox").css("transition","transform .5s linear");
                },800); 
            }

            if (index == 3) {
                $(".browserBox").addClass("browserBox_begin_status");
                $(".title").addClass("title_begin_status");
            }

            if (index == 4) {
                $(".sec4Box").addClass("sec4Box_end_status");
                setTimeout(function(){
                    $(".sec4Box").attr("class","sec4Box sec4Box_begin_status");
                },2000);
            }
        },
        //屏幕加载完毕之后 触发
        /* 滚动到某一屏后的回调函数，
        接收 anchorLink 和 index 两个参数，
        anchorLink 是锚链接的名称，index 是序号，从1开始计算 */
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                $(".skinBox").removeClass("s1_begin_status");
            }

            if (index == 2) {
                $(".sec2TitleBox").removeClass("sec2TitleBox_begin_status");
            }

            if (index == 3) {
                $(".browserBox").removeClass("browserBox_begin_status");
                $(".title").removeClass("title_begin_status");
            }

            if (index == 4) {
                $(".sec4Box").removeClass("sec4Box_begin_status");
            }
        }
    });
});