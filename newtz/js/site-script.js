//to slide background in main-page
$(document).ready(function () {
    $(".rslides").responsiveSlides({
        auto: true,
        speed: 1000,
        timeout: 4000,
        pager: true,
        nav: true,
        random: false,
        pause: false,
        pauseControls: false,
        prevText: "Previous",
        nextText: "Next",
        maxwidth: "",
        navContainer: "",
        manualControls: "",
        namespace: "callbacks",
        before: function () {
            $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
            $('.events').append("<li>after event fired.</li>");
        }
    });
});

//to slide browser to any block in content (header/header-scroll function)
var topMenu = $('.top-menu');
var menuItems = topMenu.find("a");
menuItems.click(function(){
   var href = $(this).attr('href');
    $('#header-scroll').css("display","block");
    $('#header').css("display","none");
    $('html,body').animate({scrollTop: $(href).offset().top - 80},800);
    return false;
});

//to show/hide header,header-scroll and header-mobile when browser is scrolling
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('#header-scroll').css("display", "block");
        $('#header').css("display", "none");
    }
    if ($(this).scrollTop() > 120) {
        $('#header-mobile').fadeOut(300);
    }
    else if ($(this).scrollTop() <= 0) {
        $('#header-scroll').css("display","none");
        $('#header').css("display","block");
    }
});

//to activate top-menu-block when current block in content is viewport
$(window).scroll(function () {
    if ($(this).scrollTop() >= $('#portfolio').offset().top-80) {
        $('.top-menu-block a.active').removeClass('active');
        $('.top-menu-block a').eq(1).addClass('active');
    }
    if ($(this).scrollTop() >= $('#advantages').offset().top-80) {
        $('.top-menu-block a.active').removeClass('active');
        $('.top-menu-block a').eq(2).addClass('active');
    }
    if ($(this).scrollTop() >= $('#work-plan').offset().top-80) {
        $('.top-menu-block a.active').removeClass('active');
        $('.top-menu-block a').eq(3).addClass('active');
    }
    if ($(this).scrollTop() >= $('#comments').offset().top-80) {
        $('.top-menu-block a.active').removeClass('active');
        $('.top-menu-block a').eq(4).addClass('active');
    }
    if ($(this).scrollTop() >= $('#contacts').offset().top-80) {
        $('.top-menu-block a.active').removeClass('active');
        $('.top-menu-block a').eq(5).addClass('active');
    }
    else if ($(this).scrollTop() < $('#portfolio').offset().top-80) {
        $('.top-menu-block a.active').removeClass('active');
        $('.top-menu-block a').eq(0).addClass('active');
    }
    return false;
});

//to slide browser to footer
var down = $('#button-to-down');
down.click(function(){
    var href = $(this).attr('href');
    $('html,body').animate({scrollTop: $(href).offset().top - 80},800);
    return false;
});

//to show/hide popup when mouse hover/leave this
$('.portfolio-content-photo').each(function(){
    var el = $(this);
    el.hover(function(){
        el.find('.portfolio-content-photo-popup').slideToggle(450);
    });
    el.mouseleave(function() {
        if (el.children().is(':hidden')) el.find('.portfolio-content-photo-popup').clearQueue();
    });
});

//to slide content in comment-page
$(window).load(function(){
    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: true,
        slideshowSpeed: 4000,
        animationDuration: 500,
        touch: false,
        directionNav: true,
        animationLoop: true,
        pauseOnAction: false,
        pauseOnHover: false,
        start: function(slider){
            $('body').removeClass('loading');
        }
    });
});

//to add/remove opacity on elements with class "hover"
$('a.hover').hover(function() {
    $(this).css("opacity","0.7");
});
$('a.hover').mouseleave(function() {
    $(this).css("opacity","1.0");
});
$('a.hover').click(function() {
    $(this).css("opacity","1.0");
});

//to show/hide header-mobile when menu-mobile-button is on
$('#menu-mobile-button').click(function() {
    $('#header-mobile').slideToggle(300);
});

//to hide header-mobile when screen size >= 1024px
 $(window).resize(function() {
 if ($(window).width() >= '1024') {
 $('#header-mobile').css("display","none");
 }
 });

//to slide browser to any block in content (header-mobile function)
var topMenuMobile = $('.top-menu-mobile');
var mobileMenuItems = topMenuMobile.find("a");
mobileMenuItems.click(function(){
    var href = $(this).attr('href');
    $('html,body').animate({scrollTop: $(href).offset().top},800);
    return false;
});

//to show/hide and fixed/unfixed button-up when browser is scrolling
$(window).scroll(function () {
    if ($(this).scrollTop() >= $('#portfolio').offset().top-80) {
        $('#button-up').css("display","block");
    }
    if ($(this).scrollTop() > $('#contacts').offset().top-80) {
        $('#button-up').css("position","absolute");
    }
    else if ($(this).scrollTop() < $('#portfolio').offset().top-80) {
        $('#button-up').css("display","none");
    }
    else if ($(this).scrollTop() < $('#contacts').offset().top-80) {
        $('#button-up').css("position","fixed");
    }
});

//to slide browser to header
var up = $('#button-up');
up.click(function(){
    var href = $(this).attr('href');
    $('html,body').animate({scrollTop: $(href).offset().top},800);
    return false;
});

//to resize blocks in about-page and in portfolio-page
var portfolio = $('.portfolio-content-photo');
var about = $('.about-content-photo');
$(function(){
    $(window).resize(function(){
        portfolio.height(portfolio.width() / 1.4);
        about.height(about.width() / 1.4);
    });
    portfolio.height(portfolio.width() / 1.4);
    about.height(about.width() / 1.4);
});

//to open first-modal window
$('a.modal-button-first').click(function(event){
    event.preventDefault();
    $('#overlay').fadeIn(300,function(){
        $('#modal-first').fadeIn(400);
    });
});

//to close first-modal window and refresh forms
$('#modal-form')[0].reset();
$('#contacts-content-form')[0].reset();
$('#modal-close').click(function() {
	$('#modal-form')[0].reset();
    $('#modal-first').fadeOut(400,function(){
        $('#overlay').fadeOut(300);
    });
});