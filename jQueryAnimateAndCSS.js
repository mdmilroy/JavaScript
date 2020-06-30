$(document).ready(() => {
 
    $('.login-button').on('click', () => {
      $('.login-form').toggle();
    });
    
    $('.menu-button').on('mouseenter', () => {
        $('.nav-menu').show();
        $('.menu-button').css({
          color: '#C3FF00',
          backgroundColor: '#535353'});
      });

    // OR use .animate() and include transition speed
    // $('.menu-button').on('mouseenter', () => {
    //   $('.nav-menu').show();
    //   $('.menu-button').animate({
    //     color: '#C3FF00',
    //     backgroundColor: '#535353',
    //     fontSize: '24px'}, 200);
    // });
    
    $('.nav-menu').on('mouseleave', () => {
        $('.nav-menu').hide();
        $('.menu-button').css({
          color: '#EFEFEF',
          backgroundColor: '#303030'});
      });
      
    // OR use .animate() and include transition speed
    // $('.nav-menu').on('mouseleave', () => {
    //   $('.nav-menu').hide();
    //   $('.menu-button').animate({
    //     color: '#EFEFEF',
    //     backgroundColor: '#303030',
    //     fontSize: '18px'}, 200);
    // });

    // This will result in same functionality except based on click not hover
    // $('.menu-button').on('click', () => {
    //     $('.nav-menu').toggleClass('hide');
    // });  
  });

/*
    Separation of concerns is a design principle stating that code should be separated based on its purpose in a program. In web development, 
    that generally means the structure of a page is defined in an HTML document, styles are stored in a CSS file, and code that defines 
    dynamic behavior is stored in a JavaScript file.

    To keep CSS properties in a CSS file, jQuery can add a CSS class to an element with a method named addClass. It’s syntax looks like this:
    $('.example-class').addClass('active');
    AND
    $('.example-class').removeClass('active');
*/
