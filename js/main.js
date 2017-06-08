$(document).ready(function (){
	$(".min-menu-box").click(function (){
		$(".min-menu-list").slideToggle(500);
		$(this).toggleClass("open");
	});
})
