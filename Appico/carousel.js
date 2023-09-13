$(".phone-carousel").slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	centerMode: true,
	responsive: [
		{
			breakpoint: 980,
			settings: {
				arrows: false,
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 780,
			settings: {
				slidesToShow: 1,
				arrows: false,
			},
		},
	],
})
