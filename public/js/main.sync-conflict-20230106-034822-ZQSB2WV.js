$(function () {

  $('.menu-btn').click(function () {
    $('header .sticky').css('transform', 'translateX(0)');
    $('.opacity').show();
  })

  $('.opacity').click(function () {
    $('.opacity').hide();
    $('header .sticky').css('transform', 'translateX(-100%)');
  })

  $('.post-content img').addClass('slb')
  $('.slb').simplebox({
    fadeSpeed: 100
  });

  $(".totop").click(function () { $("html,body").animate({ scrollTop: 0 }, 500); });
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 200) {
      $('.totop').addClass('is-active')
    } else {
      $('.totop').removeClass('is-active')
    }
  });

  $(document).ready(function () {
    if (window.location.pathname == "/") {
      $("#navi li:eq(0) a").addClass("active");
    }
    a = window.location;
    $("#navi li a").each(function () {
      b = String($(this).attr("href")).replace("/", "");
      if (String(a).indexOf(b) > 0) {
        $(this).closest("li a").addClass("active");
      }
    });
  });

  // Artalk
  $('.atk-main-editor>.atk-bottom').after($('.atk-main-editor>.atk-plug-panel-wrap'))

  // search
  $("#search").keypress(function (e) {
    var searchContent = $("#search").val();
    if (e.which == 13) {
      window.open("https://www.google.com/search?q=site:zburu.com%20" + searchContent, "_blank")
    }
  });

  console.log(" ......................阿弥陀佛......................\n"+
  "                       _oo0oo_                      \n"+
  "                      o8888888o                     \n"+
  "                      88\" . \"88                     \n"+
  "                      (| -_- |)                     \n"+
  "                      0\\  =  /0                     \n"+
  "                   ___/‘---’\\___                   \n"+
  "                  .' \\|       |/ '.                 \n"+
  "                 / \\\\|||  :  |||// \\                \n"+
  "                / _||||| -卍-|||||_ \\               \n"+
  "               |   | \\\\\\  -  /// |   |              \n"+
  "               | \\_|  ''\\---/''  |_/ |              \n"+
  "               \\  .-\\__  '-'  ___/-. /              \n"+
  "             ___'. .'  /--.--\\  '. .'___            \n"+
  "         .\"\" ‘<  ‘.___\\_<|>_/___.’>’ \"\".          \n"+
  "       | | :  ‘- \\‘.;‘\\ _ /’;.’/ - ’ : | |        \n"+
  "         \\  \\ ‘_.   \\_ __\\ /__ _/   .-’ /  /        \n"+
  "    =====‘-.____‘.___ \\_____/___.-’___.-’=====     \n"+
  "                       ‘=---=’                      \n"+
  "                                                    \n"+
  "....................佛祖保佑 ,永无BUG...................");

})