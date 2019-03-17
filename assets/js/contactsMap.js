$(function() {
	initMap();
})

// init yandex map
function initMap() {
	var $contMap = $('.contacts-map');

	if (!$contMap.length) return false;

	$contMap.each(function() {
		var $map = $(this),
			id = $map.attr('id');

		ymaps.ready(function () {
			var coordX = parseFloat($map.attr('data-coord-x')),
				coordY = parseFloat($map.attr('data-coord-y')),
				baloonContent = $map.attr('data-baloonContent');

			var contMap = new ymaps.Map(id, {
					center: [coordX,coordY],
					zoom: 17,
					controls: ['zoomControl']//'zoomControl'
				}),
				placemark = new ymaps.Placemark(contMap.getCenter(), {
					iconContent: baloonContent,
					iconCaption: baloonContent,
					balloonContent: baloonContent
				}, {
					// preset: 'islands#blueDotIconWithCaption',
					iconLayout: 'default#image',
					iconImageHref: '/themes/razoom/assets/icons/map-marker.svg',
					iconImageSize: [35, 50],
					iconImageOffset: [0,0]
				});
			contMap.behaviors.disable('scrollZoom');
			// if (isTouch()) contMap.behaviors.disable('drag');
			contMap.geoObjects.add(placemark);
		});
	});

}