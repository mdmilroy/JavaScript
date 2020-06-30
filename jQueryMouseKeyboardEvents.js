$(document).ready(() => {
  
  $('.menu').on('mouseenter', () => {
    $('.nav-menu').show();
  }).on('mouseleave', () => {
    $('.nav-menu').hide();
  })
  
  $('.btn').on('mouseover', event => {
    $(event.currentTarget).addClass('btn-hover');
  }).on('mouseleave', event => {
    $(event.target).removeClass('btn-hover');
  });

  $('.postText').on('keyup', event => {
    $(event.currentTarget).focus();
    const post = $(event.currentTarget).val();
    const remaining = 140 - post.length;
    $('.characters').html(remaining);

    if (remaining <= 0) {
      $('.wordcount').addClass('red');
    } else {
      $('.wordcount').removeClass('red');
    }
  });

}); 
