$(".footer, .toggle:not(:first-child)").hide();

$(".toggle").click(function(e) {

	e.preventDefault();

	if ( $(this).hasClass("is-open") ){
		$(this).removeClass("is-open").nextAll(".footer, .toggle:not(:first-child)").slideUp(500).removeClass("is-open");
		return;
	}

	$(this).toggleClass("is-open");
	$(this).next(".footer").slideToggle(500).next(".toggle").slideToggle(500);

	$("html, body").animate({
		scrollTop: $(document).height()
	}, 500);

});