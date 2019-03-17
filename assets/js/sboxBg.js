$(function() {
	initSboxBg();
})

function initSboxBg() {
	let sboxNodes = $('.sbox'),
			bgClassList = ['sbox_gr-1', 'sbox_gr-2'],
			bgClassIndex = false;

	sboxNodes.each(function() {
		if ($(this).hasClass('sbox_bg') || $(this).hasClass('sbox_lead')) {
			bgClassIndex = !bgClassIndex;
		} else $(this).addClass(bgClassList[bgClassIndex ? 1 : 0])
	})
}