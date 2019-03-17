$(function() {
	animNum()
})

function animNum() {
	$(window).on('load scroll', function() {
		var $animNum = $('.js-animate-num');
		if ($animNum.length) {
			$animNum.each(function(i, e) {
				var $num = $(this),
					speed = $num.data('anim-speed'),
					maxNum = parseInt($num.data('num'));
				if (isElementInViewport($num) && !$num.hasClass('showed')) {
					$num.addClass('showed');
					$num.prop('number', 1).animateNumber({
						number: maxNum
					}, speed || Math.random() * (1500 - 500) + 500);
				}
			});
		}
	});
}

/**
 * проверяет видимость (нахождение) элемента в область видимости
 * @param el - jquery obg
 * @returns {boolean}
 */
function isElementInViewport (el) {
	//special bonus for those using jQuery
	if (typeof jQuery === "function" && el instanceof jQuery) {
			el = el[0];
	}
	var rect = el.getBoundingClientRect();
	return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
			rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
	);
}