/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
﻿/// <reference path="jquery-1.11.3.min.js" />



        var vw = $(window).width();
var vh = $(window).height();

//config 

var max_slide = 4;
var current_slide = 1;
var process_active = 0;
$(window).on('load', function () {

    $(".tb-preloader-wave").fadeOut();
    $("#tb-preloader").delay(200).fadeOut("slow").remove();

});

$(window).resize(function () {
    $('.screen-height').css('height', vh);
    $('.margin-top-30').css('margin-top', vh * .35);

});
$(document).ready(function () {
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



    $('.screen-height').css('height', vh);
    $('.margin-top-30').css('margin-top', vh * .35);

    $('.play-btn span').click(function () {
        $('.video-player').fadeIn('');
        $('body').addClass('playing_video');
        $('#video_playerin')[0].play();
    });
    $('.close-the-video').click(function () {
        $('#video_playerin')[0].pause();
        $('.video-player').fadeOut()
        $('body').removeClass('playing_video');
    });
    $('.process-flow-nav li a').click(function (e) {
        e.preventDefault();
        process_active = 1;
        $('.process-flow-nav li').removeClass('active');
        $(this).parent('li').addClass('active');
        var ref_loc = $(this).attr("href");
        //alert(ref_loc);
        $('.tab-content .tab-pane').removeClass('active');
        $('.tab-content ' + ref_loc).addClass('active');

    });
    $('.missin .section-body').mouseleave(function () {
        process_active = 0;
    })
    $('#header-nav').addClass('slideInDown animated');
    // fadeIn 
    $('.play-btn span').addClass('fadeIn animated');
    $('.clickmetodown').addClass('fadeInUp animated');
    $('#sec1 .main-center-title').addClass('fadeInUp animated');
    $('.cd-primary-nav-trigger').click(function () {
        $('.cd-primary-nav-trigger .cd-menu-icon').toggleClass('is-clicked');
        if (!$('.cd-primary-nav-trigger .cd-menu-icon').hasClass('is-clicked')) {

        }
        else
            $('html, body').animate({scrollTop: $("#sec5").offset().top}, 500);
        $('.menu-on-about').slideToggle('slow');
        //alert('hai');
    });
    window.setInterval(function () {
        //$( "ul.nav li:nth-child(2)
        // alert("hi..")
        if (process_active == 0) {
            $('.process-flow-nav li').removeClass('active');
            $(".process-flow-nav li:nth-child(" + current_slide + " )").addClass('active');
            var ref_loc = $(".process-flow-nav li:nth-child(" + current_slide + " ) a").attr("href");
            $('.tab-content .tab-pane').removeClass('active');
            $('.tab-content ' + ref_loc).addClass('active');
            if (current_slide === max_slide) {
                current_slide = 1;
            }
            else
                current_slide++;
        }

    }, 2000);

});

$(window).scroll(function () {




    if ($(window).scrollTop() >= 100) {
        $('#topnav').addClass('scroll');
    } else {
        $('#topnav').removeClass('scroll');
    }
    
    if ($(window).width() > 480) {
    $(".onscrollfadeout").css("opacity", 1 - $(window).scrollTop() / 600);
    $(".main-center-title h1").css({
        bottom: -$(window).scrollTop() / 4,
    });
    $(".main-center-title h4").css({
        bottom: -$(window).scrollTop() / 4,
    });
    $(".btn-subscribe").css({
        bottom: -$(window).scrollTop() / 4,
    });
    $(".click_todown_btn").css({
        bottom: -$(window).scrollTop() / 2,
    });
    //console.log($(window).scrollTop()); play-btn
    $(".play-btn").css({
        bottom: -$(window).scrollTop() / 2,
    });
}
    if ($('#sec1').isInViewport({"tolerance": 1, "debug": false})) {

        $('#sec1 .main-center-title').addClass('animated ');
    }

    if ($('#sec2').isInViewport({"tolerance": 1, "debug": false})) {


    }



    if ($('#sec5').isInViewport({"tolerance": 100, "debug": false}) || $('#footer').isInViewport({"tolerance": 100, "debug": false}) ) {

     //   $('#topnav').fadeOut('slow');
     //   $('#topnav').css('z-index', '-10')

    }
    else {
        $('#topnav').fadeIn('slow');
        $('#topnav').css('z-index', '1030')
        //$('.menu-on-about').slideUp('slow');
    }

});
