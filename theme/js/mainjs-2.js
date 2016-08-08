var vw = $(window).width();
var vh = $(window).height();

$(document).ready(function () {
    initHomeSlider();
     $('.navigation-menu li.has-submenu a.scroll_to').on('click', function (e) {
        if ($(window).width() < 992) {
             e.preventDefault();
           
           
            $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
        }
    });
    $('.navbar-toggle').on('click', function (event) {
        $(this).toggleClass('open');
        $('#navigation').slideToggle(400);

    });
    $('a.scroll_to[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
                    || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                        .animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
    
    function initHomeSlider() {

        $('#home-slider img').each(function (index, el) {
            var slide = $(this).parent('li');
            var image = $(this).attr('src');

            $(slide).prepend($('<div class="slide-image"></div>').css('background-image', 'url(' + image + ')'));

            if (navigator.userAgent.indexOf("Firefox") != -1 && $('#home').hasClass('bordered')) {
                $('.slide-image').addClass('ff-fix');
            }

            $(this).remove();
        });

        var options = {
            prevText: '<i class="ti-angle-left"></i>',
            nextText: '<i class="ti-angle-right"></i>',
            keyboard: false,
        };

        if ($('#home-slider .slides > li').length < 2) {
            options.directionNav = false
        }

        if ($('#home-slider').hasClass('kenburn')) {

            options.start = function () {
                $('#home-slider').find(".slides > li.flex-active-slide > .slide-image").each(function () {
                    var $content = $(this);
                    $content.css({
                        '-webkit-transform': 'scale(1.2)',
                        '-moz-transform': 'scale(1.2)',
                        'transform': 'scale(1.2)',
                    });
                })
            }

            options.before = function () {
                $('#home-slider').find(".slides > li > .slide-image").each(function () {
                    var $content = $(this);
                    $content.css({
                        '-webkit-transform': 'scale(1)',
                        '-moz-transform': 'scale(1)',
                        'transform': 'scale(1)',
                    });
                })
            }

            options.after = function () {
                $('#home-slider').find(".slides > li.flex-active-slide > .slide-image").each(function () {
                    var $content = $(this);
                    $content.css({
                        '-webkit-transform': 'scale(1.2)',
                        '-moz-transform': 'scale(1.2)',
                        'transform': 'scale(1.2)',
                    });
                })
            }
        }

        $('#home-slider').flexslider(options);

        $('#text-rotator').flexslider({
            controlNav: false,
            directionNav: false
        })
    }
    $('.bg-img, .thumb-placeholder').each(function (index, el) {
        var image = $(el).attr('src');
        $(el).parent().css('background-image', 'url(' + image + ')');
        $(el).remove();
    });
      if ($(window).width() > 992) {
        $("html").niceScroll({
            cursorcolor: "#9C9C9C",
            cursorwidth: "14px",
            cursorborder: ".5px solid #F1F1F1",
            cursorborderradius: "0px",
            zindex: "3000",
            background: "#F1F1F1",
            autohidemode: false,
        });
    }
    else{
        $("html").niceScroll({ cursorcolor: "#9C9C9C",index: "3000",autohidemode: false,});
    }
});


$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $('#topnav').addClass('scroll');
    } else {
        $('#topnav').removeClass('scroll');
    }
});
    