$(document).ready(function(){
  $('.nav li a').click(function(e) {
    $('.nav li').removeClass('current');
    var $parent = $(this).parent(),
        target = $parent.find( 'a').attr('data-description'),
        targetOffsetTop = $('#' + target).offset().top -100;

    if (!$parent.hasClass('current')) {
        $parent.addClass('current');
    }

    $('html, body').animate({scrollTop:targetOffsetTop}, 'slow');
    e.preventDefault();
  });

  $(function() {
    var header = $('.header'),
        navHomeY = header.offset().top,
        isFixed = false,
        $window = $(window);

    $window.scroll(function(e) {
      var scrollTop = $window.scrollTop(),
          shouldBeFixed = scrollTop > 160;

      if (shouldBeFixed && !isFixed) {
        header.addClass('sticky');
        isFixed = true;

      } else if (!shouldBeFixed && isFixed) {
        header.removeClass('sticky');
        isFixed = false;
      }

      e.preventDefault();
    });
	});

  $(window).scroll(function(){
    if (jQuery(this).scrollTop() > 100) {
      jQuery('.scrollup').fadeIn();
    } else {
      jQuery('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 700);
      return false;
  });

$(window).load(function() {
    $('.flexslider').flexslider();
  });
});
