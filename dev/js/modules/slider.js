$('.owl-carousel').owlCarousel({
    items: 2,
    loop:true,
    // nav:true,
    autoWidth: true,
    autoplay: true,
    mouseDrag: true,
    dots: true,
    dotsEach: true,
    nav: true,
    checkVisible: false,
	navText: [
	'<i class="fas fa-chevron-left"></i>',
	'<i class="fas fa-chevron-right"></i>'
	]
})

$('.carousel').carousel()