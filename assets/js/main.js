(function() {

	'use strict';

	function age(date) {
		return Math.floor((new Date() - new Date(date)) / 31536e6);
	}

	var bookmarklets = {
		'carbon-date': '/assets/js/bookmarklet.carbon-date.js',
		'resolution-test': '/assets/js/bookmarklet.resolution-test.js'
	};

	$(function() {

		$('.insert-age').each(function() {
			$(this).html(age('1987/12/01') + ' year old');
		});

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
		});
	});
}());
