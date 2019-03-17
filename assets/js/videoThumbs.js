$(function(){

	initVideoThumbs();
	
});

function initVideoThumbs() {
	let video = $('.js-video-embed')

	if (video) {

		video.click(function() {
			if ($(this).hasClass('active')) return
			let videoSrc = $(this).data('src');
			
			$(this).html(`<iframe 
				src="${videoSrc}" 
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>`)
			$(this).removeAttr('data-src');
			$(this).addClass('active');
		})
	}
}