(function() {

	'use strict';

	function age(date) {
		return Math.floor((new Date() - new Date(date)) / 31536e6);
	}

	function each(iterable, callback) {
		[].forEach.call(iterable, function(value, key) {
			callback.call(value, key, value, iterable);
		});
	}

	function loadScript(url) {
		return new Promise(function(resolve, reject) {
			var s = document.createElement('script');
			s.src = url;
			request.addEventListener('readystatechange', function() {
				if (request.status == 200) {
					resolve(request);
				} else if (this.readyState === 4) {
					reject(request);
				}
			}, false);
			request.send();
		});
	}

	var bookmarklets = {
		'carbon-date': '/assets/js/bookmarklet.carbon-date.js',
		'resolution-test': '/assets/js/bookmarklet.resolution-test.js'
	};

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

	document.addEventListener('DOMContentLoaded', function() {

		var $insertAge = document.querySelectorAll('.insert-age'),
			$bookmarklets = document.querySelectorAll('.bookmarklet'),
			$disqus = document.createElement('script');

		function bookmarkletClick(e) {
			e.preventDefault();
			alert('Drag me to your bookmarks toolbar :)');
		}

		each($insertAge, function() {
			this.innerHTML = age('1987/12/01') + ' year old';
		});

		each($bookmarklets, function() {

			var key = this.dataset.bookmarklet;

			this.addEventListener('click', bookmarkletClick, false);

			if (key in bookmarklets) {

				if (typeof bookmarklets[key] === 'string') {
					bookmarklets[key] = loadScript(bookmarklets[key]);
				}

				bookmarklets[key].then(function(data) {
					this.href = data.responseText;
				});
			}
		});

		if (document.querySelectorAll('#disqus_thread').length) {
			window.disqus_shortname = 'liamnewmarch';
			$disqus.src = 'https://liamnewmarch.disqus.com/embed.js';
			document.body.appendChild($disqus);
		}

	}, false);

}());
