import './modules/app';
import './directives/bookmarklet';
import './directives/disqus-comments';
import './directives/google-analytics';
import './directives/insert-age';
import './services/script';


document.addEventListener('DOMContentLoaded', function() {
  angular.bootstrap(document, ['app']);
}, false);


/**
 * TODO move to component
 */
var page = document.querySelector('.page')
var toggle = document.querySelector('.hamburger');

page.addEventListener('click', function(event) {
  if (event.target === event.currentTarget) {
    event.stopPropagation();
    page.classList.remove('page--menu-open');
  }
});

toggle.addEventListener('click', function(event) {
  event.stopPropagation();
  page.classList.toggle('page--menu-open');
});
