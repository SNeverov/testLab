/* eslint-disable */

$(document).ready(function(){
	$(".wrap_items").slick(
		{
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 1500,
			// autoplay: true,
			autoplaySpeed: 2500,
			dots: true,
			adaptiveHeight: true,
			prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
			// variableWidth: true,
			responsive: [
				{
				  breakpoint: 1401,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				  }
				}, {
					breakpoint: 769,
					settings: {
						arrows: false,
						slidesToShow: 2
					}
				}
			]
		}
	);
});