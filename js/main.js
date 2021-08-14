$(function(){

  // Fixed Navbar
  $(window).scroll(function(){

    let nav = $('.navbar');

    $(window).scrollTop() >= nav.height() ? nav.addClass("scrolled") : nav.removeClass("scrolled");


  });


  // Tabs Selected
  $(".tabs li").click(function(){
    
    $(this).addClass('selected').siblings().removeClass('selected');

    $($(this).data("target")).show().siblings().hide();

  });
});