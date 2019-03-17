$(function() {

	initOpenNavControls();
	initCloseNavControls();

})

function initOpenNavControls() {
	let openNavControls = $('.js-nav-open'),
			navMenu = $('.modal-nav-wrapper')

	openNavControls.on('click', function() {
		navMenu.addClass('open')
		$('body').css('overflow-y', 'hidden')
	})
}

function initCloseNavControls() {
	let closeNavControls = $('.js-nav-close'),
			navMenu = $('.modal-nav-wrapper')

	closeNavControls.on('click', function(e) {
		if (!e.target.classList.contains('js-nav-close')) return;
		navMenu.removeClass('open')
		$('body').css('overflow-y', 'auto')
	})
}