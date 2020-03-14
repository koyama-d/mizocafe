/* For the sticky navivation */
$(document).ready(function (){

    $('.js--section-features').waypoint(function(direction){
        if (direction == "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    } ,{
  offset: '60px;'
})

/* Scroll on buttons */
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);   
    });
    $('.js--scroll-to-section-features').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);   
    });
   
    
/* Animation on scroll */
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });    
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    }); 
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated rollIn');
    }, {
        offset: '50%'
    });
    
/* Mobile nav */    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $(".close-circle-outline");
        nav.slideToggle(200);
        if(icon.attr("name") === "menu-outline"){
            icon.removeAttr("name");
            icon.attr("name","close-circle-outline")
        }else{
            icon.removeAttr("name","close-circle-outline")
            icon.attr("name","menu-outline")
        }
    });
});
