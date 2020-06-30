$(document).ready(() => {
  
    $('.more-details-button').on('click', event => {
      $(event.currentTarget).closest('.product-details').next().toggle()
      $(event.currentTarget).find('img').toggleClass('rotate')
    });  
    
    $('.shoe-details li').on('click', event => {
      $(event.currentTarget).addClass('active');
      
      $(event.currentTarget).siblings().removeClass('active')
      
      $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled')
      
      
    });
    
    
    
    ///////////////////////////////////////////
    $('.login-button').on('click', () => {
      $('.login-form').toggle();
      $('.login-button').toggleClass('button-active');
    });
  
    $('.product-photo').on('mouseenter', () => {
      $(this).addClass('photo-active');
    }).on('mouseleave', function() {
      $(this).removeClass('photo-active');
    });
  
    $('.menu-button').on('click', () => {
      $('.menu-button').toggleClass('button-active');
      $('.nav-menu').toggleClass('hide');
    });

    ///////////////////////////////////////////
    $('.more-btn').on('click', event => {
        $(event.currentTarget).siblings().toggleClass()
      });
    
      $('.share').on('click', event => {
        $(event.currentTarget).siblings().toggle()
      });
    
      $('.notification').on('click', event => {
        $(event.currentTarget).toggleClass('active')
      });
  })