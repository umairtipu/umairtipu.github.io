$(document).ready(function() {

	$("#year").html(new Date().getFullYear());

	$(".project").hover3d({
		selector: ".project__card",
		// shine: true,
		sensitivity: 4,
	});

	setInterval(() => {
		$(".navbutton--next").click()
	}, 4000);

	setTimeout(() => {
		$(".loader-container").remove();
    	$("body").css("background-color", "#fff");
	}, 5000);
	
});

window.onload = function () {
	console.log('kkkkk');
}

// $(window).load(function() {
// 	console.log('kkkkk');
// });

$(window).on('resize scroll', function() {
	$('.heading').each((el, index) => {
		if ($(index).css("opacity") !== '0') {
			$(index).css("z-index", "2")
		} else {
			$(index).css("z-index", "1")
		}
	})
});