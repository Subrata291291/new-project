 // Product slider js
 $(".banner_slider").slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: false,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1399,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
        autoplay:false,
        slidesToScroll: 1
      }
    }
  ]
});

   // Class slider js
 $(".category_slider").slick({
  dots: false,
  infinite: true,
  centerMode: false,
  // centerPadding: '0px',
  arrows: false,
  autoplay: false,
  fade: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1399,
      settings: {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        dots: true,
        arrows: false,
        slidesToScroll: 1
      }
    }
  ]
});

   // Class slider js
   $(".best_product_slider").slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: false,
    // centerMode: true,
    fade: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1399,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
          slidesToScroll: 1
        }
      }
    ]
  });

     // Class slider js
     $(".sponsored_slider").slick({
      dots: false,
      infinite: true,
      arrows: false,
      autoplay: true,
      fade: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1399,
          settings: {
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 991,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            dots: true,
            arrows: false,
            slidesToScroll: 1
          }
        }
      ]
    });

     // Class slider js
     $(".gallery_slider").slick({
      dots: false,
      infinite: true,
      arrows: false,
      autoplay: true,
      fade: false,
      slidesToShow: 6,
      slidesToScroll: 2,
      responsive: [{
          breakpoint: 1399,
          settings: {
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 991,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            dots: true,
            arrows: false,
            slidesToScroll: 1
          }
        }
      ]
    });

 // Product tab area
  $(document).ready(function() {
    $('.tabs li').click(function() {
      var tab_id = $(this).attr('data-tab');
      $('.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    })
  });


  // Modal tab area
  $(document).ready(function() {
    $('.modal-tabs li').click(function() {
      var tab_id = $(this).attr('data-tab');
      $('.modal-tabs li').removeClass('current');
      $('.modal-tab-content').removeClass('current');
      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    })
  });

 // Shrink header 
  // $(document).ready(function() {
  //   $(window).scroll(function() {
  //     if ($(document).scrollTop() > 270) {
  //       $(".header-area").addClass("shrink")
  //     } else {
  //       $(".header-area").removeClass("shrink")
  //     }
  //   });
  // });

// Password Show 
  $(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
