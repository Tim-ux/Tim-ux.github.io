// // Import jQuery module (npm i jquery)
import $ from 'jquery'; window.jQuery = $; window.$ = $;

// // Import vendor jQuery plugin example (not module)
//require('~/app/libs/mmenu/dist/mmenu.js')
require('~/node_modules/jquery/dist/jquery.min.js')
require('~/node_modules/superfish/dist/js/superfish.min.js')
require('~/node_modules/owl.carousel/dist/owl.carousel.min.js')
require('~/node_modules/mmenu-js/dist/mmenu.js')
require('~/node_modules/mburger-css/dist/mburger.js')
require('~/app/libs/equalHeights/equalheights.js')
require('~/node_modules/magnific-popup/dist/jquery.magnific-popup.min.js')

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    FixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });

  $("a[href='#callback']").click(function() {
		$("#callback .formname").val($(this).data("form"));
	});

  $(".top-line .sf-menu").superfish({
		cssArrows: false,
		hoverClass: 'no-class',
		delay: 200
	});

  var owl = $(".slider");
  owl.owlCarousel({
    loop: true,
    items: 1,
    itemClass: "slide-wrap",
    nav: false,
    navText: '',
    navElement: null,
    autoHeight: true,
    //autoplay: true,
    //autoplayTimeout: 5000,
    //autoplayHoverPause: true,
    //smartSpeed: 1500
  });
  $(".next").click(function() {
    owl.trigger('next.owl.carousel');
  })
  $(".prev").click(function() {
    owl.trigger('prev.owl.carousel');
  });

  $(".sf-menu").after("<div id='my-menu'>");
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style", "");
	$("#my-menu").find("ul").removeClass("sf-menu");

  new Mmenu('#my-menu', {
    "slidingSubmenus": false,
    extensions: [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
    navbar: {
      title: 'Меню'
    },
    "slidingSubmens": false,
  });

  $(".service-item h4").equalHeights();
  $(".new-item-text").equalHeights();
  $(".link-item").equalHeights();

  $(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("visible");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

})