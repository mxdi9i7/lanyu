$(document).ready(function() {
	$('.runway-section').addClass('hide');
	$('#preloader-wrap').removeClass('hide');
	setTimeout(function() {
		$('#preloader-wrap').addClass('hide');
		$('.runway-section').removeClass('hide');
	}, 1500);
})