$(document).on("ready", inicio);

function inicio(){
	$("#menu a").on("click", irA);
}

function irA(){
	var seccion = $(this).attr("href");
	$("body, html").animate({
		scrollTop: $(seccion).offset().top-110
	}, 800);

	return false;
}