angular.module('app', []).config(config);

config.$inject = [ '$compileProvider' ];

function config($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|javascript):/);
}

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
