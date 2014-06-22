(function() {

	'use strict';

	var bookmarklets = {
		'carbon-date': '/assets/js/bookmarklet.carbon-date.js',
		'resolution-test': '/assets/js/bookmarklet.resolution-test.js'
	};

	$(function() {


		$('.bookmarklet').on('click', function() {

			// Add usage instruction to bookmarklet

			alert('Drag me to your bookmarks toolbar :)');
			return false;

		}).each(function() {

			// Get bookmarklet via ajax and add

			var promise, key = $(this).data('bookmarklet');

			if (key in bookmarklets) {

				if (typeof bookmarklets[key] === 'string') {
					bookmarklets[key] = $.ajax(bookmarklets[key], {
						dataType: 'text'
					});
				}

				bookmarklets[key].done(function(data) {
					this.href = data;
				});

				bookmarklets[key].fail(function(data) {
					console.error('Bookmarklet not found, key: ' + key);
				});
			}
		})
	});
}());
