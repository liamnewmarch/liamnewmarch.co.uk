(function() {

	'use strict';

	function age(date) {
		return Math.floor((new Date() - new Date(date)) / 31536e6);
	}

	var bookmarklets = {
		'carbon-date': '/assets/js/bookmarklet.carbon-date.js',
		'resolution-test': '/assets/js/bookmarklet.resolution-test.js'
	};

	// Disqus global

	window.disqus_shortname = 'liamnewmarch';

	// Google Analytics globals

	window.GoogleAnalyticsObject = 'ga';
	window.ga = function() {
		window.ga.q.push(arguments);
		window.ga.l = 1 * new Date();
	};
	window.ga.q = [];

	// Push page track event
	ga('create', 'UA-6676765-4', 'liamnewmarch.co.uk');
	ga('send', 'pageview');

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

			var key = $(this).data('bookmarklet');

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
