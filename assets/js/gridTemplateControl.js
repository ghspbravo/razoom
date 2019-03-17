$(function() {
	generateGrid();
	$( window ).resize(function() {
		generateGrid();
	});
})

function generateGrid() {
	let grid = $('.events-grid'),
		items = $('.events-grid-item'),
		itemsCount = $('.events-grid-item').length

	if ($(window).width() < 767) {
	rows = ''
	items.each(() => {
		rows = rows + '250px '
	})
	grid.css('grid-template-rows', rows);
	} else if ($(window).width() < 991) {
	if (itemsCount === 6 || itemsCount === 5) grid.css('grid-template-rows', '350px 350px 350px');
	if (itemsCount === 4 || itemsCount === 3) grid.css('grid-template-rows', '350px 350px');
	if (itemsCount === 2 || itemsCount === 1) grid.css('grid-template-rows', '350px');
	} else if (itemsCount < 6) grid.css('grid-template-rows', '275px 275px');
}