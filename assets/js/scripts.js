$(document).ready(function() {

	$(".project").hover3d({
		selector: ".project__card",
		// shine: true,
		sensitivity: 4,
	});

	setInterval(() => {
		$(".navbutton--next").click()
	}, 4000);
	
});

$(window).on('resize scroll', function() {
	$('.heading').each((el, index) => {
		if ($(index).css("opacity") !== '0') {
			$(index).css("z-index", "2")
		} else {
			$(index).css("z-index", "1")
		}
	})
});