$(document).ready(function() {

	$("#year").html(new Date().getFullYear());

	$(".project").hover3d({
		selector: ".project__card",
		sensitivity: 5,
	});

	setInterval(() => {
		$(".navbutton--next").click()
	}, 4000);
	
});

window.onload = function () {
	$(".loader-container").remove();
    $("body").css("background-color", "#fff");
    $("body").css("overflow-y", "auto");
}

$(window).on('resize scroll', function() {
	$('.heading').each((el, index) => {
		if ($(index).css("opacity") !== '0') {
			$(index).css("z-index", "2")
		} else {
			$(index).css("z-index", "1")
		}
	})
});