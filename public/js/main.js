$(function () {

  //pjax 刷新
  $(document).pjax('a:not(a[target="_blank"], a[no-pjax])', {
    container: '#pjax-container',
    fragment: '#pjax-container',
    timeout: 8000
  })

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

})


!function (e, t, a) { function n() { c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), o(), r() } function r() { for (var e = 0; e < d.length; e++)d[e].alpha <= 0 ? (t.body.removeChild(d[e].el), d.splice(e, 1)) : (d[e].y--, d[e].scale += .004, d[e].alpha -= .013, d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999"); requestAnimationFrame(r) } function o() { var t = "function" == typeof e.onclick && e.onclick; e.onclick = function (e) { t && t(), i(e) } } function i(e) { var a = t.createElement("div"); a.className = "heart", d.push({ el: a, x: e.clientX - 5, y: e.clientY - 5, scale: 1, alpha: 1, color: s() }), t.body.appendChild(a) } function c(e) { var a = t.createElement("style"); a.type = "text/css"; try { a.appendChild(t.createTextNode(e)) } catch (t) { a.styleSheet.cssText = e } t.getElementsByTagName("head")[0].appendChild(a) } function s() { return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")" } var d = []; e.requestAnimationFrame = function () { return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) { setTimeout(e, 1e3 / 60) } }(), n() }(window, document);