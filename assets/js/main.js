$( document ).ready(function() {

  img_src = $('.carousel-item.active img').attr('src'); 
  $('.bg-blur').css('background-image' , `url(${img_src})`);

  $('#carouselExampleControls').bind('slide.bs.carousel', function (e) {
      var img_src;
      setTimeout(function(){ 
          img_src = $('.carousel-item.active img').attr('src'); 
          $('.bg-blur').css('background-image' , `url(${img_src})`).fadeIn(1000);
      }, 700);

  });


  // SLICK SLIDER RESPONSIVE
  $('.team-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

  // MEGA MENU
  if($(window).width() > 992){
    $('.accordion .card .card-header .btn-link').hover(function(){
      var dataTarget = $(this).attr("data-target");
  
      $('.accordion .card .collapse').removeClass('show');
      $(`${dataTarget}`).addClass('collapse show');
    });

    $('.accordion .card .card-header .btn-link').click(function(){
      var dataTarget = $(this).attr("data-target");
  console.log(dataTarget);
      $('.accordion .card .collapse').removeClass('show');
      $(`${dataTarget}`).addClass('collapse');
    });
  }

  $('.dropdown-menu .accordion .card .card-header .btn-link').hover(function(){
    $('.dropdown-menu .accordion .card .card-header .btn-link').removeClass("active");
    $(this).addClass('active');
  })
});

